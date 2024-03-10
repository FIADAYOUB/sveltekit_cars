<script>
  export let car;
  console.log({ car });
</script>

<div class="pick-car">
  <!-- {carLoad && <span class="loader"></span>} -->
  <img src={car?.img} alt="car_img" />
</div>
<div class="pick-description">
  <div class="pick-description__price">
    <span>${car?.price}</span>/ rent per day
  </div>
  <div class="pick-description__table">
    <div class="pick-description__table__col">
      <span>Model</span>
      <span>{car?.model}</span>
    </div>

    <div class="pick-description__table__col">
      <span>Mark</span>
      <span>{car?.mark}</span>
    </div>

    <div class="pick-description__table__col">
      <span>Year</span>
      <span>{car?.year}</span>
    </div>

    <div class="pick-description__table__col">
      <span>Doors</span>
      <span>{car?.doors}</span>
    </div>

    <div class="pick-description__table__col">
      <span>AC</span>
      <span>{car?.air}</span>
    </div>

    <div class="pick-description__table__col">
      <span>Transmission</span>
      <span>{car?.transmission}</span>
    </div>

    <div class="pick-description__table__col">
      <span>Fuel</span>
      <span>{car?.fuel}</span>
    </div>
  </div>
  <a class="cta-btn" href="#booking-section"> Reserve Now </a>
</div>

<style lang="postcss">
  .pick-car {
    @apply w-full md:w-[500px] relative;
  }
  .pick-car img {
    @apply w-full mt-24;
  }
  .pick-description {
    @apply w-96;
  }
  .pick-description__price {
    @apply w-full bg-magnum-500 text-f4 flex items-center gap-6 text-white py-1 px-8 whitespace-nowrap;
  }
  .pick-description__table {
    @apply grid grid-cols-[1fr] grid-rows-[auto] text-f5;
  }
  .pick-description__table__col {
    @apply grid grid-cols-[1fr,1fr] text-center grid-rows-[auto] py-2 px-2 border-b-[1px] border-gray-400;
  }
</style>
