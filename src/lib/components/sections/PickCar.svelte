<script>
  import CarBox from "./CarBox.svelte";
  import { CAR_DATA } from "$lib/data/carData";

  let colorBtn;

  const coloringButton = (id) => {
    return colorBtn === id ? "colored-button" : "";
  };
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
          <button class={`${coloringButton("btn1")}`} on:click={() => {}}>
            Audi A1 S-Line
          </button>
          <button
            class={`${coloringButton("btn2")}`}
            id="btn2"
            on:click={() => {}}
          >
            VW Golf 6
          </button>
          <button
            class={`${coloringButton("btn3")}`}
            id="btn3"
            on:click={() => {}}
          >
            Toyota Camry
          </button>
          <button
            class={`${coloringButton("btn4")}`}
            id="btn4"
            on:click={() => {}}
          >
            BMW 320 ModernLine
          </button>
          <button
            class={`${coloringButton("btn5")}`}
            id="btn5"
            on:click={() => {}}
          >
            Mercedes-Benz GLK
          </button>
          <button
            class={`${coloringButton("btn6")}`}
            id="btn6"
            on:click={() => {}}
          >
            VW Passat CC
          </button>
        </div>

        <div class="box-cars">
          <CarBox car={CAR_DATA[4]} />
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .pick-section {
    @apply py-40 px-0;
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
    @apply text-f5 text-nowrap border-none cursor-pointer p-4 bg-gray-100 transition-all duration-500 text-left hover:bg-magnum-400 hover:text-white;
  }
  .box-cars {
    @apply flex gap-8 justify-between;
  }
</style>
