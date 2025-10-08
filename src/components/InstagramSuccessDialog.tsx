import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

interface InstagramSuccessDialogProps {
  isOpen: boolean;
}

const InstagramSuccessDialog = ({ isOpen }: InstagramSuccessDialogProps) => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <Dialog open={isOpen} modal>
      <DialogContent className="max-w-2xl" hideCloseButton>
        <div className="text-center space-y-6 py-8">
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-brand-blue to-brand-green bg-clip-text text-transparent">
            Fantastic, thanks for participating! 🎉
          </h2>
          
          <p className="text-lg text-gray-300">
            Keep a look out on our Instagram page by clicking below or scan the QR code on your mobile.
          </p>

          <div className="flex flex-col items-center gap-6 py-4">
            <a
              href="https://www.instagram.com/crux_consulting.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button className="bg-gradient-to-r from-brand-blue to-brand-green hover:from-brand-blue/80 hover:to-brand-green/80 text-white px-8 py-6 text-lg">
                Visit Our Instagram
              </Button>
            </a>

            <div className="border border-gray-700 rounded-lg p-4 bg-white">
              <img
                src="/lovable-uploads/crux_consulting.ai_qr.png"
                alt="Instagram QR Code"
                className="w-48 h-48 md:w-64 md:h-64"
              />
            </div>

            <p className="text-brand-green font-semibold">
              We appreciate a follow! ❤️
            </p>
          </div>

          <Button
            onClick={handleGoHome}
            variant="outline"
            className="mt-8"
          >
            Return to Home
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InstagramSuccessDialog;
