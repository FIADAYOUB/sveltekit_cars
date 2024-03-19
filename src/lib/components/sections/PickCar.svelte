<script>
  import CarBox from "./CarBox.svelte";
  import { CAR_DATA } from "$lib/data/carData";

  let selectedCar = CAR_DATA[0];
</script>

<section class="pick-section">
  <div class="container">
    <div class="pick-container">
      <div class="pick-container__title">
        <h3>Vehicle Models</h3>
        <h2>Our rental fleet</h2>
        <p>
          Choose from a variety of our amazing vehicles to rent for your next
          adventure or business trip
        </p>
      </div>
      <div class="pick-container__car-content">
        <div class="pick-box">
          {#each CAR_DATA as car, index}
            <button
              class:selected={car.id === selectedCar.id}
              on:click={() => (selectedCar = car)}
            >
              {car.name}
            </button>
          {/each}
        </div>
        <div class="box-cars">
          <CarBox car={selectedCar} />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .pick-section {
    @apply py-40 px-0;
  }
  .container {
    @apply my-0 mx-auto max-w-[1200px] p-4;
  }
  .pick-container {
    @apply flex flex-col;
  }
  .pick-container__title {
    @apply my-0 mx-auto text-center max-w-[50rem] mb-20;
  }
  .pick-container__car-content {
    @apply flex justify-between gap-4 flex-col md:flex-row md:gap-4;
  }

  .pick-box {
    @apply flex flex-col gap-3;
  }
  .pick-box button {
    @apply text-f5 text-nowrap border-none cursor-pointer p-4 bg-gray-100 transition-all duration-500 text-left hover:bg-magnum-400 hover:text-white dark:bg-dark-lighten2;
  }
  .pick-box button.selected {
    @apply bg-magnum-400 text-white ;
  }
  .box-cars {
    @apply flex gap-8 justify-between;
  }
</style>
