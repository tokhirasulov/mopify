"use client";

import { Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import BookingForm from "@/components/BookingForm";

const CTA = () => {
  const t = useTranslations("cta");

  return (
<<<<<<< HEAD
    <section className='py-24'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='glass-card p-6 sm:p-12 sm:p-16 rounded-3xl text-center relative overflow-hidden'>
          <div className='absolute inset-0 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10' />

          <div className='relative z-10 max-w-3xl mx-auto'>
            <h2 className='text-4xl sm:text-5xl font-bold mb-6'>
              {t("title")}{" "}
              <span className='gradient-text'>{t("titleHighlight")}</span>
            </h2>
            <p className='text-[16px] sm:text-xl text-muted-foreground mb-8'>
              {t("description")}
            </p>

            <div className='flex flex-col md:flex-row gap-4 justify-center'>
              <Button
                variant='hero'
                size='lg'
                className='text-[16px] sm:text-lg px-4 sm:px-8 text-wrap sm:text-nowrap'
                data-testid='button-get-quote-cta'>
                {t("getFreeQuote")}
                <ArrowRight className='w-5 h-5' />
              </Button>
              <Button
                variant='secondary'
                size='lg'
                className='text-[16px] sm:text-lg px-4 sm:px-8'
                data-testid='button-call-now'>
                <Phone className='w-5 h-5' />
                {t("callNow")}
              </Button>
            </div>

            <p className='text-sm text-muted-foreground mt-6'>
              {t("availability")}
            </p>
=======
    <section className="py-24" id="booking">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            {t("title")}{" "}
            <span className="gradient-text">{t("titleHighlight")}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-4">
            {t("description")}
          </p>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Phone className="w-4 h-4" />
            <a href="tel:+998998944791" className="hover:text-primary transition-colors">
              +998 99 894 47 91
            </a>
>>>>>>> cbfaf5719b5775187e847395613916d5bee8eefa
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <BookingForm />
        </div>

        <p className="text-sm text-muted-foreground text-center mt-8">
          {t("availability")}
        </p>
      </div>
    </section>
  );
};

export default CTA;
