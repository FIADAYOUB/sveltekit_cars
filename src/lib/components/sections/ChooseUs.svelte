<script>
  import mainImg from "$lib/images/mainImg.png";
  import box1 from "$lib/images/box1.png";
  import box2 from "$lib/images/box2.png";
  import box3 from "$lib/images/box3.png";

</script>
<section class="choose-section bg-white pt-2 pb-6 bg-cover bg-no-repeat bg-[url('$lib/images/bgChoose.png')] dark:bg-dark-base">
  <div class="container my-0 mx-auto max-w-[1200px] p-4">
    <div class="choose-container flex flex-col">
      <img
        class="choose-container__img w-full md:w-[90%] h-auto my-0 mx-auto"
        src={mainImg}
        alt="car_img"
      />
      <div class="text-container flex mt-4 w-full flex-col items-start text-center gap-6 md:flex-row md:justify-around">
        <div class="text-container__left md:items-start md:text-left flex gap-2 flex-col max-w-[500px] items-center text-center">
          <h4>Why Choose Us</h4>
          <h2>Best valued deals you will ever find</h2>
          <p>
            Discover the best deals you'll ever find with our unbeatable
            offers. We're dedicated to providing you with the best value
            for your money, so you can enjoy top-quality services and
            products without breaking the bank. Our deals are designed to
            give you the ultimate renting experience, so don't miss out on
            your chance to save big.
          </p>
          <a href="#home" class="flex items-center gap-2">
            Find Details &nbsp;
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="currentColor" d="m181.66 133.66l-80 80a8 8 0 0 1-11.32-11.32L164.69 128L90.34 53.66a8 8 0 0 1 11.32-11.32l80 80a8 8 0 0 1 0 11.32"/></svg>
          </a>
        </div>
        <div class="text-container__right flex flex-col gap-3 max-w-[450px]">
          <div class="text-container__right__box">
            <img src={box1} alt="car-img" />
            <div class="text-container__right__box__text">
              <h4>Cross Country Drive</h4>
              <p>
                Take your driving experience to the next level with our
                top-notch vehicles for your cross-country adventures.
              </p>
            </div>
          </div>
          <div class="text-container__right__box">
            {" "}
            <img src={box2} alt="coin-img" />
            <div class="text-container__right__box__text">
              <h4>All Inclusive Pricing</h4>
              <p>
                Get everything you need in one convenient, transparent
                price with our all-inclusive pricing policy.
              </p>
            </div>
          </div>
          <div class="text-container__right__box">
            {" "}
            <img src={box3} alt="coin-img" />
            <div class="text-container__right__box__text">
              <h4>No Hidden Charges</h4>
              <p>
                Enjoy peace of mind with our no hidden charges policy. We
                believe in transparent and honest pricing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<style lang="postcss">
.text-container__right__box {
  @apply flex flex-col items-center md:flex-row;
  &img {
    @apply w-[11rem] h-[11rem] mr-4;
  }
}
.text-container__right__box__text{
  @apply  flex flex-col justify-center gap-2;
}
</style>