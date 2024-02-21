import { Component } from '@angular/core';

@Component({
  selector: 'doctoralia-footer',
  standalone: true,
  template: ` <footer>
    <svg
      class="logo"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="16"
      height="16"
      viewBox="0 0 16 16"
    >
      <defs>
        <path
          id="docplanner-a"
          d="M8.87358099,12.3156117 C9.25871163,11.3713144 10.3422885,10.0499173 11.4475239,9.36820536 L13.8946098,13.4169389 L11.3880851,15.2380952 L8.87358099,12.3156117 Z M5.25884484,15.2337092 L1.80862797,13.0146025 C4.42083965,8.131851 9.30198376,4.65471296 15.0390461,4.00688302 L16,6.9669951 C11.2712797,7.89842372 7.32503409,11.019801 5.25884484,15.2337092 Z M6.01178346,5.18394271 L6.44788488,0 L9.54716875,0 L9.94093023,4.68809298 C8.16265259,5.2979686 7.11685599,5.78518493 5.91863558,6.52179217 C5.03405645,7.06422962 4.22959752,7.69902803 3.50981848,8.42700189 L0,6.94531691 L0.95671988,3.99367532 L6.01178346,5.18394271 Z"
        />
      </defs>
      <use xlink:href="#docplanner-a" />
    </svg>
    <span class="brand">Docplanner</span>
  </footer>`,
  styles: `footer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background-color: #02c1a5;

    .logo {
        width: 30px;
        height: 30px;
        fill: white;
        margin-right: 10px;
    }
    .brand {
        font-size: 1.5em;
        color: white;
    }
}
`,
})
export class FooterComponent { }
