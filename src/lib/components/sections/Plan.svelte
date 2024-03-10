<script>
  import Drive from "$lib/images/icon1.png";
  import Contact from "$lib/images/icon2.png";
  import SelectCar from "$lib/images/icon3.png";


</script>

<section class="plan-section p-20">
  <div class="container">
    <div class="plan-container">
      <div class="plan-container__title">
        <h3>Plan your trip now</h3>
        <h2>Quick & easy car rental</h2>
      </div>

      <div class="plan-container__boxes">
        <div class="plan-container__boxes__box">
          <img src={SelectCar} alt="icon_img" />
          <h3>Select Car</h3>
          <p>
            We offers a big range of vehicles for all your driving needs. We
            have the perfect car to meet your needs
          </p>
        </div>

        <div class="plan-container__boxes__box">
          <img src={Contact} alt="icon_img" />
          <h3>Contact Operator</h3>
          <p>
            Our knowledgeable and friendly operators are always ready to help
            with any questions or concerns
          </p>
        </div>

        <div class="plan-container__boxes__box">
          <img src={Drive} alt="icon_img" />
          <h3>Let's Drive</h3>
          <p>
            Whether you're hitting the open road, we've got you covered with our
            wide range of cars
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .container {
    @apply my-0 mx-auto max-w-[1200px] py-0 px-4;
  }
  .plan-container__title {
    @apply my-0 mx-auto text-center
  }
  .plan-container__boxes {
    @apply grid gap-8 grid-cols-[1fr] sm:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] grid-rows-[auto];
  }
  .plan-container__boxes__box {
    @apply flex flex-col items-center justify-center text-center;
  }
</style>
