<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
  
	let marqueeContainer; // Reference to the marquee container
	let marqueeContent; // Reference to the marquee content
  
	// Speed of the marquee
	const speed = 50;
  
	onMount(() => {
	  const contentWidth = marqueeContent.scrollWidth;
  
	  // Duplicate the content for smooth infinite scroll
	  marqueeContent.innerHTML += marqueeContent.innerHTML;
  
	  // GSAP animation
	  gsap.to(marqueeContainer, {
		x: `-${contentWidth}px`,
		duration: contentWidth / speed,
		repeat: -1,
		ease: "none",
	  });
	});
  </script>
  
  <style>
	.marquee-container {
	  overflow: hidden;
	  white-space: nowrap;
	  position: relative;
	  width: 100%;
	}
  
	.marquee-content {
	  display: inline-block;
	  white-space: nowrap;
	}
  
	.marquee-item {
	  display: inline-block;
	  margin: 0 2rem;
	  font-size: 1.5rem;
	}
  </style>
  
  <div class="marquee-container" bind:this={marqueeContainer}>
	<div class="marquee-content" bind:this={marqueeContent}>
	  <span class="marquee-item">Item 1</span>
	  <span class="marquee-item">Item 2</span>
	  <span class="marquee-item">Item 3</span>
	  <span class="marquee-item">Item 4</span>
	</div>
  </div>
  