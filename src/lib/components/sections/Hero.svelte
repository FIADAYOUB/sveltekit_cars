<script>
  import { fly } from 'svelte/transition';
  import hero from "$lib/images/hero.png";
</script>

<div class="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] mx-auto">
  <div class="flex-1 pt-36 padding-x">
    <h4 class="text-lg md:text-xl font-medium text-primary-500 dark:text-primary-400 mb-2">
      Plan your trip now
    </h4>
    <h1 class="2xl:text-[72px] sm:text-[64px] text-[50px] font-paytone text-gray-900 dark:text-white">
      Save big with our car rental
    </h1>
    <p class="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 font-light mt-6 max-w-2xl">
      Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
    </p>
    <div in:fly={{ y: 30, duration: 600, delay: 500 }} class="grid grid-cols-3 gap-6 mt-16 max-w-xl">
      <div class="text-center">
        <p class="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400">500+</p>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">Happy Clients</p>
      </div>
      <div class="text-center">
        <p class="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400">50+</p>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">Car Types</p>
      </div>
      <div class="text-center">
        <p class="text-3xl md:text-4xl font-bold text-primary-500 dark:text-primary-400">24/7</p>
        <p class="text-sm md:text-base text-gray-600 dark:text-gray-400 mt-1">Support</p>
      </div>
    </div>
  </div>
  <div class="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
    <div class="relative xl:w-full w-[90%] xl:h-full h-[590px] z-0 animate-float">
      <img src={hero} alt="hero" class="absolute h-full w-full left-0 top-0 right-0 bottom-0 object-contain text-transparent" />
    </div>
    <div class="absolute xl:-top-24 xl:-right-1/2 bottom-20 -right-1/3 bg-repeat-round -z-10 w-full xl:h-screen h-[390px] bg-hero-bg overflow-hidden" />
  </div>
</div>

<style>
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  .animate-float {
    animation: float 6s ease-in-out infinite;
  }

  .animation-delay-700 {
    animation-delay: 700ms;
  }
</style>