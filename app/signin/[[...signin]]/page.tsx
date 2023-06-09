import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full h-[100svh] flex flex-col items-center justify-center bg-background">
      <SignIn
        appearance={{
          elements: {
            card: "bg-[#2C5E5D]",
            formButtonPrimary: "bg-headingBlue hover:bg-[#045250]",
            headerTitle: "text-headingBlue font-black",
            headerSubtitle: "text-white",
            socialButtonsBlockButtonText: "text-white",
            formFieldInput: "bg-[#2C5E5D] text-white",
            formFieldLabel: "text-white",
            footerActionLink: "text-headingBlue",
            formHeaderTitle: "text-headingBlue",
            formHeaderSubtitle: "text-white",
            formResendCodeLink: "text-headingBlue",
            identityPreviewEditButton: "text-headingBlue",
            identityPreviewText: "text-white",
            otpCodeFieldInput: "text-white",
            otpCodeFieldErrorText: "text-headingBlue",
          },
        }}
      />
    </div>
  );
}
