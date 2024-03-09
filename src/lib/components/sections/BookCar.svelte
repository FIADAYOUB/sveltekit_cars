<script>
</script>

<section id="booking-section" class="book-section relative">
  <div class="container">
    <div class="book-content">
      <div class="book-content__box">
        <h2>
          Book a car
        </h2>
        <p class="error-message">All fields required!</p>
        <p class="booking-done">
          Check your email to confirm an order.{" "}
        </p>
        <form class="box-form">
          <div class="box-form__car-type">
            <div>Select Your Car</div>
            <select>
              <option>Select your car type</option>
              <option value="Audi A1 S-Line">Audi A1 S-Line</option>
              <option value="VW Golf 6">VW Golf 6</option>
              <option value="Toyota Camry">Toyota Camry</option>
              <option value="BMW 320 ModernLine"> BMW 320 ModernLine </option>
              <option value="Mercedes-Benz GLK">Mercedes-Benz GLK</option>
              <option value="VW Passat CC">VW Passat CC</option>
            </select>
          </div>

          <div class="box-form__car-type">
            <select>
              <option>Select pick up location</option>
              <option>Belgrade</option>
              <option>Novi Sad</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>

          <div class="box-form__car-type">
            <select>
              <option>Select drop off location</option>
              <option>Novi Sad</option>
              <option>Belgrade</option>
              <option>Nis</option>
              <option>Kragujevac</option>
              <option>Subotica</option>
            </select>
          </div>

          <div class="box-form__car-time"></div>

          <div class="box-form__car-time"></div>
          <button type="submit"> Search </button>
        </form>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .container {
    @apply my-0 mx-auto max-w-[133rem] py-0 px-[2.5rem];
  }
  .book-content {
    @apply mt-0 mb-10 mx-auto;
  }
  .book-content__box {
    @apply bg-[url('$lib/images/book-bg.png')] bg-[50%] bg-no-repeat bg-cover flex flex-col items-center h-auto p-4 w-full z-[4] shadow-4xl;
  }
</style>
