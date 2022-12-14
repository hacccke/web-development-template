<div class="flex justify-center flex-wrap">
  <button type="button" class="
          px-7
          py-3
          bg-red-600
          text-white
          font-medium
          text-sm
          leading-snug
          uppercase
          rounded
          shadow-md
          hover:bg-red-700 hover:shadow-lg
          focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-red-800 active:shadow-lg
          transition
          duration-150
          ease-in-out
        " data-bs-toggle="popover" data-bs-title="Popover title"
    data-bs-content="And here's some amazing content. It's very engaging. Right?">
    Click to toggle popover
  </button>
</div>
<!-- Required popper.js -->
<script src="https://unpkg.com/@popperjs/core@2.9.1/dist/umd/popper.min.js" charset="utf-8"></script>
<script>
  var popoverTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="popover"]')
  );
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new Popover(popoverTriggerEl);
  });
</script>