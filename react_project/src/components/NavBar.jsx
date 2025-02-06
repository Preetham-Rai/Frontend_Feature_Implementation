import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="nav-header">
      <div className="main-heading">
        <svg
          width="80px"
          height="80px"
          viewBox="0 0 1024 1024"
          class="icon"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M512.3 510.1m-415.7 0a415.7 415.7 0 1 0 831.4 0 415.7 415.7 0 1 0-831.4 0Z"
            fill="#FFFFFF"
          />
          <path
            d="M512.3 933.8c-57.2 0-112.7-11.2-164.9-33.3-50.5-21.3-95.8-51.9-134.7-90.8-38.9-38.9-69.5-84.2-90.8-134.7-22.1-52.2-33.3-107.7-33.3-164.9s11.2-112.7 33.3-164.9c21.3-50.5 51.9-95.8 90.8-134.7s84.2-69.5 134.7-90.8c52.2-22.1 107.7-33.3 164.9-33.3S625 97.6 677.2 119.7c50.5 21.3 95.8 51.9 134.7 90.8 38.9 38.9 69.5 84.2 90.8 134.7 22.1 52.2 33.3 107.7 33.3 164.9S924.8 622.8 902.7 675c-21.3 50.5-51.9 95.8-90.8 134.7-38.9 38.9-84.2 69.5-134.7 90.8-52.2 22.1-107.7 33.3-164.9 33.3z m0-831.4c-55 0-108.4 10.8-158.7 32-48.5 20.5-92.1 49.9-129.6 87.4-37.4 37.4-66.8 81-87.4 129.6-21.3 50.3-32 103.6-32 158.7 0 55 10.8 108.4 32 158.7 20.5 48.5 49.9 92.1 87.4 129.6 37.4 37.4 81 66.8 129.6 87.4 50.3 21.3 103.6 32 158.7 32s108.4-10.8 158.7-32c48.5-20.5 92.1-49.9 129.6-87.4s66.8-81 87.4-129.6c21.3-50.3 32-103.6 32-158.7 0-55-10.8-108.4-32-158.7-20.5-48.5-49.9-92.1-87.4-129.6-37.4-37.4-81-66.8-129.6-87.4-50.2-21.2-103.6-32-158.7-32z"
            fill="#0A0408"
          />
          <path
            d="M512.3 510.1m-331.6 0a331.6 331.6 0 1 0 663.2 0 331.6 331.6 0 1 0-663.2 0Z"
            fill="#55B7A8"
          />
          <path
            d="M512.4 933.8c-0.1 0-0.1 0 0 0-2.4 0-4.9-0.1-7.3-0.3l1.3-15.9c2 0.2 4 0.2 6 0.2 2.8 0 5.6-0.2 8.4-0.5l1.8 15.9c-3.5 0.4-6.9 0.6-10.2 0.6z m-24.5-3.3c-5.4-1.5-10.9-3.5-16.2-5.9l6.7-14.5c4.5 2.1 9.1 3.8 13.7 5l-4.2 15.4z m51.6-0.8l-4.6-15.3c4.5-1.4 9.1-3.2 13.6-5.4l7.1 14.3c-5.3 2.6-10.7 4.8-16.1 6.4z m-82.8-13.4c-4.6-3-9.1-6.4-13.6-10.1l10.2-12.3c4 3.3 8 6.3 12.1 8.9l-8.7 13.5z m113.6-1.6l-9-13.2c4-2.7 8-5.8 11.9-9.2l10.5 12.1c-4.4 3.8-8.9 7.2-13.4 10.3z m-139.5-19.9c-3.8-3.8-7.5-8-11.2-12.3l12.3-10.3c3.4 4 6.8 7.9 10.3 11.4l-11.4 11.2z m165-1.9l-11.6-11.1c3.4-3.6 6.8-7.5 10.2-11.5l12.4 10.1c-3.6 4.4-7.3 8.6-11 12.5z m-186.3-23.5c-3.1-4.3-6.2-8.9-9.3-13.6l13.5-8.6c2.8 4.5 5.8 8.8 8.7 12.8l-12.9 9.4z m207.3-2.2l-13.1-9.3c2.9-4.1 5.8-8.4 8.6-12.9l13.6 8.5c-3 4.8-6.1 9.4-9.1 13.7z m-225-25.4c-2.6-4.6-5.2-9.5-7.8-14.4l14.3-7.3c2.4 4.7 4.9 9.4 7.4 13.8l-13.9 7.9z m242.4-2.4l-14-7.8c2.5-4.4 4.9-9.1 7.3-13.8l14.3 7.2c-2.4 4.9-5 9.8-7.6 14.4z m-257.3-26.7c-2.2-4.8-4.4-9.8-6.5-14.9l14.8-6.2c2 4.9 4.2 9.7 6.3 14.4l-14.6 6.7z m272-2.5l-14.6-6.6c2.1-4.7 4.2-9.5 6.2-14.4l14.8 6.1c-2.1 5-4.2 10.1-6.4 14.9z m-284.6-27.6c-1.9-5-3.7-10.1-5.5-15.3l15.1-5.2c1.7 5 3.5 10 5.4 14.8l-15 5.7z m297-2.5l-15-5.6c1.8-4.9 3.6-9.8 5.3-14.9l15.2 5.1c-1.8 5.3-3.7 10.4-5.5 15.4z m-307.6-28.2c-1.6-5.1-3.2-10.3-4.6-15.5l15.4-4.4c1.5 5.1 3 10.2 4.5 15.1l-15.3 4.8z m318-2.5l-15.3-4.7c1.5-5 3-10.1 4.5-15.2l15.4 4.3c-1.5 5.2-3 10.5-4.6 15.6z m-326.9-28.6c-1.3-5.1-2.6-10.4-3.9-15.7l15.6-3.6c1.2 5.2 2.5 10.3 3.8 15.4l-15.5 3.9z m335.7-2.6l-15.5-3.9c1.3-5.1 2.5-10.2 3.7-15.4l15.6 3.6c-1.2 5.2-2.5 10.5-3.8 15.7z m-343-29c-1.1-5.2-2.2-10.5-3.2-15.9l15.7-3c1 5.2 2 10.4 3.1 15.5l-15.6 3.4z m350.2-2.6l-15.7-3.2c1.1-5.1 2.1-10.3 3-15.5l15.7 2.9c-0.9 5.3-1.9 10.6-3 15.8z m-356.2-29.1c-0.9-5.2-1.7-10.6-2.5-16l15.8-2.3c0.8 5.2 1.6 10.5 2.5 15.7l-15.8 2.6z m362.1-2.7l-15.8-2.6c0.8-5.1 1.6-10.4 2.4-15.7l15.8 2.3c-0.7 5.4-1.6 10.8-2.4 16z m-366.8-29.3c-0.7-5.3-1.3-10.7-1.9-16l15.9-1.7c0.6 5.3 1.2 10.5 1.8 15.7l-15.8 2z m371.4-2.7l-15.9-2c0.6-5.2 1.2-10.5 1.8-15.8l15.9 1.7c-0.6 5.5-1.2 10.9-1.8 16.1z m-374.9-29.4c-0.5-5.3-0.9-10.7-1.3-16.1l16-1.1c0.4 5.3 0.8 10.6 1.3 15.8l-16 1.4z m378.2-2.7l-15.9-1.4c0.5-5.3 0.9-10.6 1.2-15.8l16 1.1c-0.4 5.3-0.8 10.7-1.3 16.1zM321 561.2c-0.3-5.3-0.5-10.8-0.7-16.1l16-0.6c0.2 5.3 0.4 10.6 0.7 15.8l-16 0.9z m382.8-2.7l-16-0.8c0.3-5.2 0.5-10.6 0.7-15.9l16 0.5c-0.2 5.4-0.5 10.9-0.7 16.2z m-383.9-29.6c-0.1-5.4-0.2-10.8-0.2-16.1h16c0 5.3 0.1 10.6 0.2 15.9l-16 0.2z m384.9-2.7l-16-0.3c0.1-5.3 0.1-10.6 0.1-15.9v-5.3l16-0.1v5.4c0.1 5.5 0 10.9-0.1 16.2z m-369-29.3l-16-0.2c0.1-5.4 0.2-10.8 0.4-16.1l16 0.5c-0.2 5.1-0.4 10.5-0.4 15.8z m352.9-7.9c-0.1-5.3-0.3-10.6-0.5-15.9l16-0.6c0.2 5.3 0.4 10.8 0.5 16.1l-16 0.4z m-352-23.9l-16-0.8c0.3-5.4 0.6-10.8 0.9-16.1l16 1c-0.3 5.3-0.6 10.7-0.9 15.9z m350.8-7.8c-0.3-5.3-0.7-10.6-1-15.8l16-1.2c0.4 5.3 0.8 10.7 1.1 16.1l-16.1 0.9z m-348.7-23.8l-15.9-1.3c0.4-5.4 0.9-10.8 1.5-16.1l15.9 1.6c-0.5 5.2-1 10.5-1.5 15.8z m346.3-7.9c-0.5-5.3-1-10.6-1.6-15.8l15.9-1.8c0.6 5.3 1.1 10.7 1.6 16.1l-15.9 1.5zM342 401.9l-15.9-1.9c0.6-5.3 1.3-10.7 2.1-16l15.8 2.2c-0.6 5.2-1.3 10.5-2 15.7z m339.6-7.8c-0.7-5.2-1.4-10.5-2.2-15.7l15.8-2.4c0.8 5.3 1.5 10.7 2.2 16l-15.8 2.1z m-335.2-23.6l-15.8-2.5c0.9-5.3 1.8-10.7 2.7-15.9l15.7 2.8c-0.8 5.2-1.7 10.4-2.6 15.6z m330.5-7.7c-0.9-5.2-1.8-10.5-2.8-15.6l15.7-3c1 5.2 2 10.6 2.9 15.9l-15.8 2.7z m-324.8-23.4l-15.7-3.2c1.1-5.3 2.2-10.6 3.4-15.8l15.6 3.5c-1.2 5.1-2.3 10.3-3.3 15.5z m318.9-7.7c-1.1-5.2-2.3-10.4-3.5-15.4l15.6-3.7c1.2 5.2 2.4 10.5 3.6 15.8l-15.7 3.3z m-312-23.2l-15.5-3.9c1.3-5.3 2.7-10.5 4.1-15.7l15.4 4.3c-1.3 5-2.7 10.2-4 15.3z m304.7-7.6c-1.4-5.1-2.8-10.3-4.2-15.2l15.4-4.4c1.5 5.1 2.9 10.4 4.3 15.6l-15.5 4zM367.5 278l-15.3-4.7c1.6-5.2 3.2-10.4 4.9-15.5l15.2 5.1c-1.7 5-3.3 10.1-4.8 15.1z m287.4-7.4c-1.6-5-3.3-10.1-5-15l15.1-5.3c1.8 5 3.5 10.2 5.1 15.4l-15.2 4.9z m-277.4-22.5l-15-5.5c1.9-5.1 3.9-10.2 5.8-15.2l14.8 6c-1.9 4.8-3.8 9.7-5.6 14.7z m266.9-7.3c-1.9-4.9-3.9-9.8-5.9-14.6l14.7-6.2c2.1 4.9 4.1 10 6.1 15.1l-14.9 5.7zM389.3 219l-14.6-6.5c2.2-5 4.6-10 6.9-14.8l14.4 7.1c-2.3 4.5-4.6 9.3-6.7 14.2z m242.8-7.1c-2.2-4.8-4.6-9.5-6.9-14.1l14.2-7.4c2.5 4.7 4.9 9.6 7.2 14.6l-14.5 6.9z m-229-21l-14-7.7c2.7-4.9 5.4-9.6 8.2-14.2l13.6 8.4c-2.6 4.3-5.2 8.8-7.8 13.5z m214.6-6.8c-2.7-4.6-5.4-9-8.2-13.3l13.4-8.7c2.9 4.5 5.8 9.2 8.6 14l-13.8 8z m-198.2-19.8l-13.1-9.1c3.2-4.6 6.5-9.1 9.8-13.3l12.5 10c-3.1 3.9-6.2 8.1-9.2 12.4z m181.2-6.2c-3.1-4.2-6.4-8.3-9.6-12.1l12.1-10.4c3.5 4.1 7 8.4 10.3 13l-12.8 9.5z m-162-17.9L427 129.4c3.9-4.2 7.9-8.1 11.9-11.7l10.7 11.9c-3.7 3.2-7.3 6.8-10.9 10.6z m142-5.4c-3.7-3.7-7.5-7.1-11.3-10.1l10-12.5c4.2 3.4 8.4 7.1 12.5 11.2l-11.2 11.4z m-119.4-14.7l-9.3-13c4.8-3.4 9.6-6.4 14.5-8.9l7.4 14.2c-4.1 2.2-8.4 4.8-12.6 7.7z m95.8-4.1c-4.3-2.7-8.7-5-13.1-6.9l6.3-14.7c5.1 2.2 10.2 4.9 15.2 7.9l-8.4 13.7z m-69.6-9.4l-5.1-15.2c5.6-1.9 11.2-3.2 16.9-4l2.3 15.8c-4.7 0.7-9.5 1.8-14.1 3.4z m42.7-2c-4.7-1.1-9.5-1.8-14.3-2l0.8-16c5.7 0.3 11.5 1.1 17.2 2.5l-3.7 15.5z"
            fill="#0A0408"
          />
          <path
            d="M912.7 518.1h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16zM867.4 312.7h-6.2v-16h6.2v16z m-22.2 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16zM867.4 723.5h-6.2v-16h6.2v16z m-22.2 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z m-32 0h-16v-16h16v16z"
            fill="#0A0408"
          />
          <path
            d="M809.7 475.1c0 72.8-131.9 181.7-131.9 181.7S545.9 547.9 545.9 475.1s59-131.9 131.9-131.9 131.9 59.1 131.9 131.9z"
            fill="#EBB866"
          />
          <path
            d="M677.8 667.1l-5.1-4.2c-5.5-4.5-134.8-112.1-134.8-187.8 0-77.1 62.7-139.9 139.9-139.9S817.7 398 817.7 475.1c0 75.7-129.3 183.3-134.8 187.8l-5.1 4.2z m0-315.9c-68.3 0-123.9 55.6-123.9 123.9 0 27.7 22 66.7 63.7 112.6 24.7 27.2 49.7 49.5 60.1 58.5 10.5-9 35.4-31.3 60.1-58.5 41.7-46 63.7-84.9 63.7-112.6 0.2-68.3-55.4-123.9-123.7-123.9z"
            fill="#0A0408"
          />
          <path
            d="M677.8 491.9c-22.7 0-41.1-18.5-41.1-41.1 0-22.7 18.5-41.1 41.1-41.1s41.1 18.5 41.1 41.1h-16c0-13.9-11.3-25.1-25.1-25.1s-25.1 11.3-25.1 25.1 11.3 25.1 25.1 25.1v16z"
            fill="#0A0408"
          />
          <path
            d="M677.8 558.2c-22.7 0-41.1-18.5-41.1-41.1h16c0 13.9 11.3 25.1 25.1 25.1s25.1-11.3 25.1-25.1-11.3-25.1-25.1-25.1v-16c22.7 0 41.1 18.5 41.1 41.1s-18.4 41.1-41.1 41.1z"
            fill="#0A0408"
          />
          <path d="M669.8 394.2h16v178.7h-16z" fill="#0A0408" />
          <path
            d="M678.9 739.1h-2.2c-12.5 0-22.6-10.1-22.6-22.6v-2.2c0-12.5 10.1-22.6 22.6-22.6h2.2c12.5 0 22.6 10.1 22.6 22.6v2.2c-0.1 12.5-10.2 22.6-22.6 22.6z"
            fill="#FFFFFF"
          />
          <path
            d="M678.9 747.1h-2.2c-16.8 0-30.6-13.7-30.6-30.6v-2.2c0-16.8 13.7-30.6 30.6-30.6h2.2c16.8 0 30.6 13.7 30.6 30.6v2.2c-0.1 16.9-13.8 30.6-30.6 30.6z m-2.2-47.3c-8 0-14.6 6.5-14.6 14.6v2.2c0 8 6.5 14.6 14.6 14.6h2.2c8 0 14.6-6.5 14.6-14.6v-2.2c0-8-6.5-14.6-14.6-14.6h-2.2z"
            fill="#0A0408"
          />
          <path
            d="M513.4 949.4h-2.2c-12.5 0-22.6-10.1-22.6-22.6v-2.2c0-12.5 10.1-22.6 22.6-22.6h2.2c12.5 0 22.6 10.1 22.6 22.6v2.2c0 12.5-10.1 22.6-22.6 22.6z"
            fill="#DC444A"
          />
          <path
            d="M513.4 957.4h-2.2c-16.8 0-30.6-13.7-30.6-30.6v-2.2c0-16.8 13.7-30.6 30.6-30.6h2.2c16.8 0 30.6 13.7 30.6 30.6v2.2c0 16.9-13.7 30.6-30.6 30.6z m-2.2-47.3c-8 0-14.6 6.5-14.6 14.6v2.2c0 8 6.5 14.6 14.6 14.6h2.2c8 0 14.6-6.5 14.6-14.6v-2.2c0-8-6.5-14.6-14.6-14.6h-2.2z"
            fill="#0A0408"
          />
          <path
            d="M513.4 120.6h-2.2c-12.5 0-22.6-10.1-22.6-22.6v-2.2c0-12.5 10.1-22.6 22.6-22.6h2.2c12.5 0 22.6 10.1 22.6 22.6V98c0 12.5-10.1 22.6-22.6 22.6z"
            fill="#DC444A"
          />
          <path
            d="M513.4 128.6h-2.2c-16.8 0-30.6-13.7-30.6-30.6v-2.2c0-16.8 13.7-30.6 30.6-30.6h2.2c16.8 0 30.6 13.7 30.6 30.6V98c0 16.9-13.7 30.6-30.6 30.6z m-2.2-47.3c-8 0-14.6 6.5-14.6 14.6v2.2c0 8 6.5 14.6 14.6 14.6h2.2c8 0 14.6-6.5 14.6-14.6v-2.2c0-8-6.5-14.6-14.6-14.6h-2.2z"
            fill="#0A0408"
          />
        </svg>
        <h1 className="company-name">
          Manage<span>Box</span>
        </h1>
      </div>
      <nav className="navigation-bar">
        <ul>
          <li>Home</li>
          <li>Work</li>
          <li>Contact</li>
          <li>About</li>
          <li>Products</li>
        </ul>
      </nav>
      <div className="userRegBtn">
        <button>
          <Link to="/login" className="link-btn">
            Login
          </Link>
        </button>
        <button>
          <Link to="/signup" className="link-btn">
            Signup
          </Link>
        </button>
      </div>
    </header>
  );
}

export default NavBar;
