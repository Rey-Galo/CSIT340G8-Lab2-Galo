
function Fact({ label, value }) {
  return (
    <div class="flex flex-col items-center">
      <dt class="text-sm text-stone-500">{label}</dt>
      <dd class="mt-1 font-medium">{value}</dd>
    </div>
  );
}

export default Fact;