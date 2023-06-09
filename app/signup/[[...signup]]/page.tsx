import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-[100svh] flex flex-col items-center justify-center bg-background">
      <SignUp
        appearance={{
          elements: {
            card: "bg-[#2C5E5D]",
            formButtonPrimary: "bg-headingRed hover:bg-[#591023]",
            headerTitle: "text-headingRed font-black",
            headerSubtitle: "text-white",
            socialButtonsBlockButtonText: "text-white",
            formFieldInput: "bg-[#2C5E5D] text-white",
            formFieldLabel: "text-white",
            footerActionLink: "text-headingRed",
            formHeaderTitle: "text-headingRed",
            formHeaderSubtitle: "text-white",
            formResendCodeLink: "text-headingRed",
            identityPreviewEditButton: "text-headingRed",
            identityPreviewText: "text-white",
            otpCodeFieldInput: "text-white",
            otpCodeFieldErrorText: "text-headingRed",
          },
        }}
      />
    </div>
  );
}
