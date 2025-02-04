<script lang="ts">
    import { cursor } from '$lib/state/cursor';
    import { onMount } from 'svelte';
    import { gsap } from 'gsap';
  
    let cursorEl;
    let unsubscribe;
  
    // Update the cursor's position and hovering state
    onMount(() => {
      const moveCursor = (e) => {
        cursor.update(($cursor) => ({
          ...$cursor,
          x: e.pageX,
          y: e.pageY
        }));
  
        gsap.to(cursorEl, {
          x: $cursor.x,
          y: $cursor.y,
          ease: 'power3.out',
          duration: 0.1
        });
      };
  
      // Set up mouse move listener
      document.addEventListener('mousemove', moveCursor);
  
      // Clean up the event listener
      return () => {
        document.removeEventListener('mousemove', moveCursor);
      };
    });
  
    // Watch for hover state
    $: hoverClass = $cursor.isHovering ? 'cursor-hover' : '';
  </script>
  
  <div
    bind:this={cursorEl}
    class="cursor {hoverClass}"
    style="left: {$cursor.x}px; top: {$cursor.y}px;"
  ></div>
  