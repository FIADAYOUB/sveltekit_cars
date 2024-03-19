<script>
  import { cn } from "$lib/components/melt/docs/utils/style";
  import { createAccordion, melt } from "@melt-ui/svelte";
  import { slide } from "svelte/transition";

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion({
    defaultValue: 'item-1',
  });

  const items = [
    {
      id: "item-1",
      title: "1. What is special about comparing rental car deals?",
      description:
        "Comparing rental car deals is important as it helps find the best deal that fits your budget and requirements, ensuring you get the most value for your money. By comparing various  options, you can find deals that offer lower prices, additional services, or better car models. You can find car rental deals by researching online and comparing prices from different rental companies.",
    },
    {
      id: "item-2",
      title: "2. How do I find the car rental deals?",
      description:
        "You can find car rental deals by researching online and comparing prices from different rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare prices and view available rental options. It is also recommended to sign up for email newsletters and follow rental car companies on social media to be informed of any special deals or promotions.",
    },
    {
      id: "item-3",
      title: "3. How do I find such low rental car prices?",
      description:
        "Book in advance: Booking your rental car ahead of time can often result in lower prices. Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity to compare prices from multiple rental car companies. Look for discount codes and coupons: Search for discount codes and coupons that you can use to lower the rental price. Renting from an off-airport location can sometimes result in lower prices.",
    },
  ];
  let className = '';
</script>

<section class="faq-section bg-[url('$lib/images/faCar.png')] py-20 bg-auto bg-no-repeat bg-left">
  <!-- TODO -->
  <div class="container  my-0 mx-auto max-w-[1200px] p-4">
    <div class="faq-content flex flex-col items-center gap-8">
      <div class="faq-content__title flex flex-col my-0 mx-auto text-center max-w-[600px] gap-2">
        <h5 class="text-[22px]">FAQ</h5>
        <h2 class="text-[42px]">Frequently Asked Questions</h2>
        <p>
          Frequently Asked Questions About the Car Rental Booking Process on Our
          Website: Answers to Common Concerns and Inquiries.
        </p>
      </div>

      <div
        class={cn(
          "all-questions flex flex-col bg-white dark:bg-dark-base shadow-4xl w-full md:w-[700px]",
          className
        )}
        {...$root}
      >
        {#each items as { id, title, description }, i}
          <div
            use:melt={$item(id)}
            class="overflow-hidden transition-colors first:rounded-t-xl last:rounded-b-xl"
          >
            <h2 class="flex">
              <button
                use:melt={$trigger(id)}
                class={cn(
                  "flex flex-1 cursor-pointer items-center justify-between ",
                  "bg-white dark:bg-dark-lighten1 px-5 py-5 text-base font-medium leading-none",
                  "text-black dark:text-white transition-colors hover:bg-neutral-100 dark:hover:bg-dark-lighten2 focus:!ring-0",
                  "focus-visible:text-magnum-800",
                  i !== 0 && "border-t border-t-neutral-300",
                  ""
                )}
              >
                {title}
              </button>
            </h2>
            {#if $isSelected(id)}
              <div
                class={cn(
                  "content",
                  "overflow-hidden bg-neutral-100 dark:bg-dark-lighten3 text-sm text-neutral-600 dark:text-white"
                )}
                use:melt={$content(id)}
                transition:slide
              >
                <div class="px-5 py-4">
                  {description}
                </div>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style lang="postcss">
  .content {
    box-shadow: inset 0px 1px 0px theme("colors.neutral.300");
  }
</style>
