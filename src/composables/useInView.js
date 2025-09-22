import { ref, onMounted, onBeforeUnmount } from "vue";

export function useInView(options = { threshold: 0.2 }) {
  const el = ref(null);
  const visible = ref(false);
  let obs;

  onMounted(() => {
    obs = new IntersectionObserver(([e]) => (visible.value = e.isIntersecting), options);
    if (el.value) obs.observe(el.value);
  });
  onBeforeUnmount(() => obs && obs.disconnect());

  return { el, visible };
}
