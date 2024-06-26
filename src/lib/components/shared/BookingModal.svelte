<script>
  import { createCheckbox, melt } from "@melt-ui/svelte";
  /** Internal helpers */
  import { flyAndScale } from "$lib/components/melt/docs/utils/transition";
  import { fade } from "svelte/transition";

  export let booking;
  export let overlay, content, portalled, open;

  const {
    elements: { root, input },
    helpers: { isChecked, isIndeterminate },
  } = createCheckbox({
    defaultChecked: 'indeterminate',
  });

  let pickTime, dropTime, pickUp, dropOff, carType, imgUrl;
</script>

<div class="" use:melt={$portalled}>
  {#if $open}
    <div
      use:melt={$overlay}
      class="fixed inset-0 z-50 bg-black/50"
      transition:fade={{ duration: 150 }}
    />
    <div
      class="fixed left-[50%] top-[50%] z-50 max-h-[85vh] w-[90vw]
            max-w-[830px] translate-x-[-50%] translate-y-[-50%] rounded-xl bg-white overflow-y-auto
            shadow-lg"
      transition:flyAndScale={{
        duration: 150,
        y: 8,
        start: 0.96,
      }}
      use:melt={$content}
    >
      <div class="booking-modal">
        <div class="booking-modal__title flex items-center justify-between py-2 px-3 bg-magnum-700 text-white ">
          <h2 class="uppercase">Complete Reservation</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
            ><path
              fill="currentColor"
              d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
            /></svg
          >
        </div>
        <!-- message -->
        <div class="booking-modal__message flex flex-col gap-3 py-4 px-6 bg-magnum-50">
          <h4 class="text-magnum-600 flex items-start gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1-19.995.324L2 12l.004-.28C2.152 6.327 6.57 2 12 2m0 9h-1l-.117.007a1 1 0 0 0 0 1.986L11 13v3l.007.117a1 1 0 0 0 .876.876L12 17h1l.117-.007a1 1 0 0 0 .876-.876L14 16l-.007-.117a1 1 0 0 0-.764-.857l-.112-.02L13 15v-3l-.007-.117a1 1 0 0 0-.876-.876zm.01-3l-.127.007a1 1 0 0 0 0 1.986L12 10l.127-.007a1 1 0 0 0 0-1.986z"
              /></svg
            >
            Upon completing this reservation enquiry, you will receive:
          </h4>
          <p class="text-f5 opacity-50">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <!-- car info -->
        <div class="booking-modal__car-info bg-white p-6 grid grid-cols-[1fr] text-center md:grid-cols-[1fr,1fr] border-b-[1px] border-b-[#77777779f]">
          <div class="dates-div flex flex-col gap-4">
            <div class="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                  /></svg
                >
                <div class="content">
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" class="input-time outline outline-[1px] outline-gray-500" />
                  </p>
                </div>
              </span>
            </div>

            <div class="booking-modal__car-info__dates">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                  /></svg
                >
                <div class="content">
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" class="input-time outline outline-[1px] outline-gray-500" />
                  </p>
                </div>
              </span>
            </div>

            <div class="booking-modal__car-info__dates">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                  /></svg
                >
                <div class="content">
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div class="booking-modal__car-info__dates">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  ><path
                    fill="currentColor"
                    d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203.21l-4.243 4.242a3 3 0 0 1-4.097.135l-.144-.135l-4.244-4.243A9 9 0 0 1 18.364 4.636M12 8a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                  /></svg
                >
                <div class="content">
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div class="booking-modal__car-info__model">
            <h5>
              <span>Car -</span>
              {carType}
            </h5>
            {#if imgUrl}
              <img src={imgUrl} alt="car_img" />
            {:else}
              <div class="w-[400px] h-[400px] "></div>
            {/if}
          </div>
        </div>
        <!-- personal info -->
        <div class="booking-modal__person-info p-6">
          <h4 class="text-magnum-600 uppercase mb-4">Personal Information</h4>
          <form class="info-form">
            <div class="info-form__2col">
              <div class="custom_input">
                <label>
                  <div class="input_title">
                    First Name
                    <b>*</b>
                  </div>
                  <input
                    value=""
                    type="text"
                    placeholder="Enter your first name"
                  />
                  <p class="error-modal">This field is required.</p>
                </label>
              </div>
              <div class="custom_input">
                <label>
                  <div class="input_title">
                    Last Name
                    <b>*</b>
                  </div>
                  <input
                    value=""
                    type="text"
                    placeholder="Enter your last name"
                  />
                  <p class="error-modal">This field is required.</p>
                </label>
              </div>
              <div class="custom_input">
                <label>
                  <div class="input_title">
                    Phone Number
                    <b>*</b>
                  </div>
                  <input
                    value=""
                    type="tel"
                    placeholder="Enter your phone number"
                  />
                  <p class="error-modal">This field is required.</p>
                </label>
              </div>
              <div class="custom_input">
                <label>
                  <div class="input_title">
                    Age
                    <b>*</b>
                  </div>
                  <input value="" type="number" placeholder="18" />
                  <p class="error-modal">This field is required.</p>
                </label>
              </div>
            </div>
            <div class="info-form__1col">
              <div class="custom_input">
                <label>
                  <div class="input_title">
                    Email
                    <b>*</b>
                  </div>
                  <input
                    value=""
                    type="email"
                    placeholder="Enter your email address"
                  />
                  <p class="error-modal">This field is required.</p>
                </label>
              </div>
              <div class="custom_input">
                <label>
                  <div class="input_title">
                    Address
                    <b>*</b>
                  </div>
                  <input
                    value=""
                    type="text"
                    placeholder="Enter your street address"
                  />
                  <p class="error-modal">This field is required.</p>
                </label>
              </div>
            </div>
            <div class="info-form__2col">
              <div class="custom_input">
                <label>
                  <div class="input_title">
                    City
                    <b>*</b>
                  </div>
                  <input value="" type="text" placeholder="Enter your city" />
                  <p class="error-modal">This field is required.</p>
                </label>
              </div>

              <div class="custom_input">
                <label>
                  <div class="input_title">
                    Zip Code
                    <b>*</b>
                  </div>
                  <input
                    value=""
                    type="text"
                    placeholder="Enter your zip code"
                  />
                  <p class="error-modal">This field is required.</p>
                </label>
              </div>
            </div>

            <div class="flex items-center justify-start">
              <button
                use:melt={$root}
                class="flex size-4 appearance-none items-center justify-center
                      bg-white shadow outline outline-1 hover:opacity-75"
                id="checkbox"
              >
                {#if $isChecked}
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m9.55 18l-5.7-5.7l1.425-1.425L9.55 15.15l9.175-9.175L20.15 7.4z"/></svg>
                {/if}
                <input use:melt={$input} />
              </button>
              <label class="pl-2 font-medium text-f6" for="checkbox">
                Please send me latest news and updates
              </label>
            </div>
            <div class="reserve-button w-full flex items-end justify-end py-8">
              <button class="bg-magnum-100 text-magnum-950 px-6 py-1 text-f3">
                Reserve Now
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  {/if}
</div>

<style lang="postcss">
  .booking-modal__car-info__dates {
    @apply flex flex-col gap-4;
    & h5 {
      @apply text-magnum-600 text-f4 font-bold text-start;
    }
    & span {
      @apply flex gap-2 items-start;
      & p {
        @apply text-gray-500 text-f5;
      }
      & svg {
        @apply mt-1;
      }
    }
    & .content {
      & h6 {
        @apply font-bold font-poppins;
      }
    }
  }
  .info-form__2col {
    @apply grid gap-4 grid-cols-[1fr] md:grid-cols-[1fr,1fr] py-2;
  }
  .info-form__1col {
    @apply grid gap-4 grid-cols-[1fr] py-2;
  }
  .custom_input {
    @apply flex flex-col gap-1;
    & label {
      @apply flex flex-col;
      & .input_title b {
        @apply text-red-500;
      }
      & input {
        @apply bg-gray-200 p-2;
      }
    }
  }
</style>
