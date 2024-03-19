<script>
  import harryPotter from "$lib/images/harryPotter.jpg";
  import Ron from "$lib/images/Ron.jpg";

</script>
<section class="testimonials-section bg-gray-100 py-10 dark:bg-dark-lighten1">
  <div class="container my-0 mx-auto max-w-[1200px] p-4">
    <div class="testimonials-content flex flex-col">
      <div class="testimonials-content__title flex flex-col my-0 mx-auto text-center max-w-[600px] mb-5">
        <h4>Reviewed by People</h4>
        <h2>Client's Testimonials</h2>
        <p>
          Discover the positive impact we've made on the our clients by
          reading through their testimonials. Our clients have experienced
          our service and results, and they're eager to share their
          positive experiences with you.
        </p>
      </div>

      <div class="all-testimonials flex gap-3 w-full justify-center p-3">
        <div class="all-testimonials__box">
          <span class="quotes-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5m13-7h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"/></svg>
          </span>
          <p class="text-[20px] font-semibold font-poppins">
            "We rented a car from this website and had an amazing
            experience! The booking was easy and the rental rates were
            very affordable. "
          </p>
          <div class="grow"/>
          <div class="all-testimonials__box__name">
            <div class="all-testimonials__box__name__profile">
              <img src={harryPotter} alt="user_img" />
              <span>
                <h4>Parry Hotter</h4>
                <p>Belgrade</p>
              </span>
            </div>
          </div>
        </div>

        <div class="all-testimonials__box box-2">
          <span class="quotes-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5m13-7h-4a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v6c0 2.667-1.333 4.333-4 5"/></svg>
          </span>
          <p class="text-[20px] font-semibold font-poppins">
            "The car was in great condition and made our trip even better.
            Highly recommend for this car rental website!"
          </p>
          <div class="grow "/>
          <div class="all-testimonials__box__name">
            <div class="all-testimonials__box__name__profile">
              <img src={Ron} alt="user_img" />
              <span>
                <h4>Ron Rizzly</h4>
                <p>Novi Sad</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
.all-testimonials__box {
  @apply bg-white shadow-3xl w-[540px] p-10 relative flex flex-col justify-between dark:bg-dark-darken1;
}
.all-testimonials__box__name {
  @apply flex justify-between;
}
.all-testimonials__box__name__profile {
  @apply flex gap-4 items-center mt-3;
  & img {
    @apply w-16 h-16 rounded-full;
  }
}
.quotes-icon {
  @apply text-[3rem] text-primary-blue absolute bottom-[33px] right-[60px];
}
.box-2 {
  @apply hidden md:block;
}
</style>