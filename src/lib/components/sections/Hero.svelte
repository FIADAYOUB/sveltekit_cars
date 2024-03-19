<script>
  import hero from "$lib/images/hero.png";
</script>

<div class="hero">
  <div class="flex-1 pt-36 padding-x">
    <h4>Plan your trip now</h4>
    <h1 class="hero__title">Save big with our car rental</h1>
    <p class="hero__subtitle">
      Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible
      pick-up options and much more.
    </p>
  </div>
  <div class="hero__image-container">
    <div class="hero__image">
      <img src={hero} alt="hero" class="object-contain" />
    </div>
    <div class="hero__image-overlay" />
  </div>
</div>

<style lang="postcss">
  .hero {
    @apply flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto;
  }

  .hero__title {
    @apply 2xl:text-[72px] sm:text-[64px] text-[50px] font-paytone;
  }

  .hero__subtitle {
    @apply text-[27px] text-black-100 font-light mt-5 dark:text-white;
  }

  .hero__image-container {
    @apply xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen;
  }

  .hero__image {
    @apply relative xl:w-full w-[90%] xl:h-full h-[590px] z-0;
  }
  .hero__image img {
    @apply absolute h-full w-full left-0 top-0 right-0 bottom-0 text-transparent;
  }

  .hero__image-overlay {
    @apply absolute xl:-top-24 xl:-right-1/2 bottom-20 -right-1/3 bg-repeat-round -z-10 w-full xl:h-screen h-[390px] bg-hero-bg overflow-hidden;
  }
</style>
