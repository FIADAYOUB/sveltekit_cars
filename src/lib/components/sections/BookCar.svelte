<script>
  import Select from "$lib/components/melt/Select.svelte";
  import DatePicker from "$lib/components/melt/DatePicker.svelte";
  import BookingModal from "../shared/BookingModal.svelte";


  const carTypes = {
    levelOne: ['Audi A1 S-Line', 'VW Golf 6', 'Toyota Camry', 'BMW 320 ModernLine', 'Mercedes-Benz GLK', 'VW Passat CC']
  };
  const locations = {
    levelOne: ['Belgrade', 'Novi Sad', 'Nis', 'Kragujevac', 'Subotica']
  };
  const dropLocation = {
    levelOne: ['Novi Sad', 'Belgrade', 'Nis', 'Kragujevac', 'Subotica']
  };
</script>

<section id="booking-section" class="book-section relative font-poppins">
  <div class="container">
    <div class="book-content">
      <div class="book-content__box">
        <h2>Book a car</h2>
        <form class="box-form">
          <!-- carTypes -->
          <div class="box-form__car-type">
            <div class="flex items-center w-full gap-2">
              <Select options={carTypes}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon"><path d="M7 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M17 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"></path><path d="M5 17h-2v-6l2 -5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6 -6h15m-6 0v-5"></path></svg>
                <div class="font-poppins text-f6 font-semibold">
                  Select Your Car Type
                  <span class="text-red-600">*</span>
                </div>
              </Select>
            </div>
          </div>
          <!-- locations -->
          <div class="box-form__car-type">
            <div class="flex items-center w-full gap-2">
              <Select options={locations}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" stroke-width="0"></path></svg>
                <div class="font-poppins text-f6 font-semibold">
                  Pick-up
                  <span class="text-red-600">*</span>
                </div>
              </Select>
            </div>
          </div>
          <!-- drop locations -->
          <div class="box-form__car-type">
            <div class="flex items-center w-full gap-2">
              <Select options={dropLocation}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" stroke-width="0"></path></svg>
                <div class="font-poppins text-f6 font-semibold">
                  Drop-of
                  <span class="text-red-600">*</span>
                </div>
              </Select>
            </div>
          </div>
          <!-- Pick-uo date -->
          <div class="box-form__car-type">
            <div class="flex items-center w-full gap-2">
              <DatePicker>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" stroke-width="0"></path></svg>
                <div class="font-poppins text-f6 font-semibold">
                  Pick-up
                  <span class="text-red-600">*</span>
                </div>
              </DatePicker>
            </div>
          </div>
          <!-- Drop-uo date -->
          <div class="box-form__car-type">
            <div class="flex items-center w-full gap-2">
              <DatePicker>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="input-icon"><path d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z" fill="currentColor" stroke-width="0"></path></svg>
                <div class="font-poppins text-f6 font-semibold">
                  Drop-up
                  <span class="text-red-600">*</span>
                </div>
              </DatePicker>
            </div>
          </div>
          <div class="flex items-end">
            <BookingModal >
              <span>Search</span>
            </BookingModal>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .container {
    @apply my-0 mx-auto max-w-[1200px] py-0 px-4;
  }
  .book-content {
    @apply mt-0 mb-20 mx-auto;
  }
  .book-content__box {
    @apply bg-[url('$lib/images/book-bg.png')] bg-[50%] bg-no-repeat bg-cover flex flex-col h-auto py-8 p-2 md:px-12 w-full z-[4] shadow-4xl dark:bg-dark-lighten1;
  }
  .box-form {
    @apply grid gap-8 grid-cols-[1fr] sm:grid-cols-[1fr,1fr] lg:grid-cols-[1fr,1fr,1fr] grid-rows-[auto,auto,auto]
  }
</style>
