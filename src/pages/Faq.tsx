import ChargeFaq from "@/components/FaqPage/ChargeFaq";
import FaqQuestion from "@/components/FaqPage/FaqQuestion";
import SecurityFaq from "@/components/FaqPage/SecurityFaq";
import TechnicalFaq from "@/components/FaqPage/TechnicalFaq";
import TransactionFaq from "@/components/FaqPage/TransactionFaq";
import UsageFaq from "@/components/FaqPage/UsageFaq";

const Faq = () => {
  return (
    <div>
      <FaqQuestion />
      <SecurityFaq />
      <TransactionFaq />
      <ChargeFaq />
      <UsageFaq />
      <TechnicalFaq />
    </div>
  );
};

export default Faq;
