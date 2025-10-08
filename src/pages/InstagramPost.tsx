import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InstagramSuccessDialog from "@/components/InstagramSuccessDialog";

const InstagramPost = () => {
  const [formData, setFormData] = useState({
    imageDescription: "",
    style: "",
    caption: "",
    instagramProfile: "",
    nickname: "",
    email: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const { toast } = useToast();

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const validateForm = () => {
    // Required fields
    if (!formData.imageDescription.trim()) {
      toast({
        title: "Validation Error",
        description: "Please describe the picture in your mind.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.style) {
      toast({
        title: "Validation Error",
        description: "Please select a style.",
        variant: "destructive",
      });
      return false;
    }

    // Word count validation (min 15 words)
    if (countWords(formData.imageDescription) < 15) {
      toast({
        title: "Validation Error",
        description: "Image description must contain at least 15 words.",
        variant: "destructive",
      });
      return false;
    }

    if (formData.caption.trim() && countWords(formData.caption) < 15) {
      toast({
        title: "Validation Error",
        description: "Caption must contain at least 15 words if provided.",
        variant: "destructive",
      });
      return false;
    }

    // Email validation if provided
    if (formData.email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        toast({
          title: "Validation Error",
          description: "Please enter a valid email address.",
          variant: "destructive",
        });
        return false;
      }
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const webhookUrl = "https://n8n-j4ogc84ccogk8gwogc8s88cc.crux-consulting.ai/webhook/0d22850b-a95a-4a66-af14-bc667a28addf";
      
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
        body: JSON.stringify({
          imageDescription: formData.imageDescription,
          style: formData.style,
          caption: formData.caption,
          instagramProfile: formData.instagramProfile,
          nickname: formData.nickname,
          email: formData.email,
          timestamp: new Date().toISOString(),
          source: "Instagram Post Form",
        }),
      });

      setShowSuccessDialog(true);
      
      // Reset form
      setFormData({
        imageDescription: "",
        style: "",
        caption: "",
        instagramProfile: "",
        nickname: "",
        email: ""
      });
    } catch (error) {
      console.error("Error sending form data:", error);
      toast({
        title: "Error",
        description: "There was an issue submitting your post. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleStyleChange = (value: string) => {
    setFormData({
      ...formData,
      style: value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Header />
      
      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Intro Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Welcome to our interactive AI experiment! ✨
            </h1>
            
            <div className="space-y-6 text-left max-w-3xl mx-auto">
              <p className="text-lg text-gray-300">
                Your idea, our automation. Use this form to describe an image and write a caption. Our system will then automatically generate it and post it to our Instagram feed for everyone to see.
              </p>

              <div className="border-l-4 border-brand-blue pl-6 py-2">
                <h2 className="text-xl font-bold text-brand-blue mb-2">The theme:</h2>
                <p className="text-gray-300">
                  How do you imagine the workplace in 2035?
                </p>
              </div>

              <div className="border-l-4 border-brand-green pl-6 py-2">
                <h2 className="text-xl font-bold text-brand-green mb-2">One ask:</h2>
                <p className="text-gray-300">
                  <strong>Be Creative & Positive:</strong> We're here to create fun and inspiring content together. Use this to share some love and positivity with us. You could imagine to automate the dishes, the drive to the office, the walk with the dog in the rain, whatever comes to your mind.
                </p>
              </div>

              <div className="border-l-4 border-white pl-6 py-2">
                <h2 className="text-xl font-bold text-white mb-2">What Happens Next? Your post goes live :-)</h2>
                <p className="text-gray-300">
                  If you provide your email, we'll notify you when your creation is live, this should take maximum two minutes. We will not use your email again to send you marketing and stuff but delete your email once the email is out.
                </p>
              </div>

              <p className="text-center text-xl font-semibold text-white mt-8">
                Let's create something amazing!
              </p>
            </div>
          </div>

          {/* Form Section */}
          <div className="border border-gray-700 p-8 backdrop-blur-sm bg-transparent rounded-lg">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Question 1: Image Description */}
              <div>
                <Label htmlFor="imageDescription" className="text-gray-300 text-lg mb-2 block">
                  1. Describe the picture in your mind <span className="text-red-500">*</span>
                </Label>
                <p className="text-sm text-gray-400 mb-3">
                  This is the image prompt, be as descriptive as possible, the more details you describe, the better the result. This includes but is not limited to the scene, surroundings, colors etc.
                </p>
                <Textarea
                  id="imageDescription"
                  name="imageDescription"
                  required
                  value={formData.imageDescription}
                  onChange={handleInputChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[120px]"
                  placeholder="Describe the scene, colors, mood, details..."
                  disabled={isSubmitting}
                  rows={5}
                />
                <p className="text-xs text-gray-500 mt-1">
                  {countWords(formData.imageDescription)} words (minimum 15 required)
                </p>
              </div>

              {/* Question 2: Style */}
              <div>
                <Label className="text-gray-300 text-lg mb-3 block">
                  2. Style <span className="text-red-500">*</span>
                </Label>
                <RadioGroup
                  value={formData.style}
                  onValueChange={handleStyleChange}
                  className="space-y-3"
                  disabled={isSubmitting}
                >
                  <div className="flex items-center space-x-3 bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                    <RadioGroupItem value="Photorealistic" id="photorealistic" />
                    <Label htmlFor="photorealistic" className="text-gray-300 cursor-pointer flex-1">
                      Photorealistic
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                    <RadioGroupItem value="Cinematic" id="cinematic" />
                    <Label htmlFor="cinematic" className="text-gray-300 cursor-pointer flex-1">
                      Cinematic
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 bg-gray-700/30 p-4 rounded-lg border border-gray-600">
                    <RadioGroupItem value="Digital Painting" id="digital-painting" />
                    <Label htmlFor="digital-painting" className="text-gray-300 cursor-pointer flex-1">
                      Digital Painting
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Question 3: Caption */}
              <div>
                <Label htmlFor="caption" className="text-gray-300 text-lg mb-2 block">
                  3. Add your caption
                </Label>
                <p className="text-sm text-gray-400 mb-3">
                  Write something unique and add context or color to the image you have in mind. This will be added exactly like this to the post below the picture.
                </p>
                <Textarea
                  id="caption"
                  name="caption"
                  value={formData.caption}
                  onChange={handleInputChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400 min-h-[100px]"
                  placeholder="Your caption text..."
                  disabled={isSubmitting}
                  rows={4}
                />
                {formData.caption.trim() && (
                  <p className="text-xs text-gray-500 mt-1">
                    {countWords(formData.caption)} words (minimum 15 required if provided)
                  </p>
                )}
              </div>

              {/* Question 4: Instagram Profile */}
              <div>
                <Label htmlFor="instagramProfile" className="text-gray-300 text-lg mb-2 block">
                  4. Your instagram profile name
                </Label>
                <p className="text-sm text-gray-400 mb-3">
                  If you want, we can tag your instagram in the picture. Please write your exact profile name, so extra characters and please pay attention to capitalization as well.
                </p>
                <Input
                  id="instagramProfile"
                  name="instagramProfile"
                  type="text"
                  value={formData.instagramProfile}
                  onChange={handleInputChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="@your_instagram_handle"
                  disabled={isSubmitting}
                />
              </div>

              {/* Question 5: Nickname */}
              <div>
                <Label htmlFor="nickname" className="text-gray-300 text-lg mb-2 block">
                  5. Your nickname
                </Label>
                <p className="text-sm text-gray-400 mb-3">
                  Give yourself a nickname, it will be part of the caption on Instagram and help you to always identify your work again.
                </p>
                <Input
                  id="nickname"
                  name="nickname"
                  type="text"
                  value={formData.nickname}
                  onChange={handleInputChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="Your nickname..."
                  disabled={isSubmitting}
                />
              </div>

              {/* Question 6: Email */}
              <div>
                <Label htmlFor="email" className="text-gray-300 text-lg mb-2 block">
                  6. Your email address
                </Label>
                <p className="text-sm text-gray-400 mb-3">
                  If you want, we notify you once the picture is life on instagram. We will not use this email to send you something ever again but delete it instead.
                </p>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="bg-gray-700/50 border-gray-600 text-white placeholder:text-gray-400"
                  placeholder="your@email.com"
                  disabled={isSubmitting}
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white py-6 text-lg"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Your Creation"}
              </Button>
            </form>
          </div>
        </div>
      </main>

      <Footer />

      <InstagramSuccessDialog isOpen={showSuccessDialog} />
    </div>
  );
};

export default InstagramPost;
