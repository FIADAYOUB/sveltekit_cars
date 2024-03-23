<script>
  import { createSelect, melt } from '@melt-ui/svelte';

  export let options;
  export let selectedValue;
  export let required = false;

  const {
    elements: { trigger, menu, option, group, groupLabel, label },
    states: { selectedLabel, open, selected },
    helpers: { isSelected },
  } = createSelect({
    forceVisible: true,
    required,
    positioning: {
      placement: 'bottom',
      fitViewport: true,
      sameWidth: true,
    },
  });

  $: selectedValue = $selected;
</script>

<div class="flex flex-col gap-1 w-full">
  <!-- svelte-ignore a11y-label-has-associated-control - $label contains the 'for' attribute -->
  <label
    class="flex items-center gap-2 w-fit"
    use:melt={$label}
  >
    <slot />
  </label>
  <button
    class="flex h-10 min-w-[220px] items-center justify-between rounded-lg bg-white px-3 py-2 text-magnum-700 shadow transition-opacity hover:opacity-90 dark:bg-dark-lighten5"
    use:melt={$trigger}
    on:m-keydown={(e) => {
      e.preventDefault(); // Cancel default builder behabiour
      e.detail.originalEvent.preventDefault(); // Cancel page scroll

      const { key } = e.detail.originalEvent;

      if (!['ArrowDown', 'ArrowUp', 'Space', 'Enter'].includes(key)) return;

      const allOptions = Object.values(options).flat();
      const index = allOptions.indexOf(`${$selectedLabel}`);

      if (key === 'ArrowDown') {
        const nextIndex = index + 1;
        const nextOption = allOptions[nextIndex] || allOptions[0];
        selected.set({ value: nextOption, label: nextOption });
      } else if (key === 'ArrowUp') {
        const prevIndex = index - 1;
        const prevOption =
          allOptions[prevIndex] || allOptions[allOptions.length - 1];
        selected.set({ value: prevOption, label: prevOption });
      } else {
        open.set(true);
      }
    }}
    aria-label="car"
  >
    {#if $selectedLabel}
      {$selectedLabel}
    {:else}
      <div class="grow" />
    {/if}
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-chevron-down size-5"><path d="m6 9 6 6 6-6"></path></svg>
  </button>
  {#if $open}
    <div
      class="z-10 flex max-h-[300px] flex-col
      overflow-y-auto rounded-lg bg-white p-1
      shadow focus:!ring-0"
      use:melt={$menu}
    >
      {#each Object.entries(options) as [key, arr]}
        <div use:melt={$group(key)}>
          {#each arr as item}
            <div
              class="relative cursor-pointer rounded-lg py-1 pl-8 pr-4 text-neutral-800
                    focus:z-10 focus:text-magnum-600
                  data-[highlighted]:bg-magnum-50 data-[selected]:bg-magnum-100
                  data-[highlighted]:text-magnum-900 data-[selected]:text-magnum-900"
              use:melt={$option({ value: item, label: item })}
            >
              <div class="check {$isSelected(item) ? 'block' : 'hidden'}">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide-icon lucide lucide-check size-4"><path d="M20 6 9 17l-5-5"></path></svg>
              </div>
              {item}
            </div>
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</div>

<style lang="postcss">
  .check {
    position: absolute;
    left: theme(spacing.2);
    top: 50%;
    z-index: theme(zIndex.20);
    translate: 0 calc(-50% + 1px);
    color: theme(colors.magnum.500);
  }
</style>