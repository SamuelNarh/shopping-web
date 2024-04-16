import React from "react";
import { Link } from "react-router-dom";
import "./NavList.css";

const NavLinks = () => {
  return (
    <div className="nav-links ">
      <ul className="ul">
        <Link to="/">
          <div className="flex items-center justify-center ">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              className="w-10 h-9"
            >
              <path
                d="M22 12.2039V13.725C22 17.6258 22 19.5763 20.8284 20.7881C19.6569 22 17.7712 22 14 22H10C6.22876 22 4.34315 22 3.17157 20.7881C2 19.5763 2 17.6258 2 13.725V12.2039C2 9.91549 2 8.77128 2.5192 7.82274C3.0384 6.87421 3.98695 6.28551 5.88403 5.10813L7.88403 3.86687C9.88939 2.62229 10.8921 2 12 2C13.1079 2 14.1106 2.62229 16.116 3.86687L18.116 5.10812C20.0131 6.28551 20.9616 6.87421 21.4808 7.82274"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M15 18H9"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            <label>Home</label>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center justify-center ">
            <svg
              fill="#fffff"
              height="80px"
              width="800px"
              version="1.1"
              id="Capa_1"
              viewBox="0 0 502.643 502.643"
              className="w-10 h-9"
            >
              <g>
                <path
                  d="M251.256,237.591c37.166,0,67.042-30.048,67.042-66.977c0.043-37.037-29.876-66.999-67.042-66.999
			c-36.908,0-66.869,29.962-66.869,66.999C184.387,207.587,214.349,237.591,251.256,237.591z"
                />
                <path
                  d="M305.032,248.506H197.653c-19.198,0-34.923,17.602-34.923,39.194v107.854c0,1.186,0.604,2.243,0.669,3.473h175.823
			c0.129-1.229,0.626-2.286,0.626-3.473V287.7C339.912,266.108,324.187,248.506,305.032,248.506z"
                />
                <path
                  d="M431.588,269.559c29.832,0,53.754-24.008,53.754-53.668s-23.922-53.711-53.754-53.711
			c-29.617,0-53.582,24.051-53.582,53.711C377.942,245.53,401.972,269.559,431.588,269.559z"
                />
                <path
                  d="M474.708,278.317h-86.046c-15.445,0-28.064,14.107-28.064,31.472v86.413c0,0.928,0.453,1.812,0.518,2.826h141.03
			c0.065-1.014,0.496-1.898,0.496-2.826v-86.413C502.707,292.424,490.11,278.317,474.708,278.317z"
                />
                <path
                  d="M71.011,269.559c29.789,0,53.733-24.008,53.733-53.668S100.8,162.18,71.011,162.18c-29.638,0-53.603,24.051-53.603,53.711
			S41.373,269.559,71.011,269.559L71.011,269.559z"
                />
                <path
                  d="M114.109,278.317H27.977C12.576,278.317,0,292.424,0,309.789v86.413c0,0.928,0.453,1.812,0.539,2.826h141.03
			c0.065-1.014,0.475-1.898,0.475-2.826v-86.413C142.087,292.424,129.489,278.317,114.109,278.317z"
                />
              </g>
            </svg>
            <label> About Us</label>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center justify-center ">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 1024 1024"
              className="w-10 h-9"
              version="1.1"
            >
              <path
                d="M120.791847 866.352377c-2.977459 0-5.170621-0.901019-5.709184-1.308526-3.105444-2.409202-3.760731-5.940583-3.760731-10.808133 0-34.688211 16.850081-63.506487 17.010831-63.782937l1.17542-1.612619c11.070248-13.029965 33.250676-25.087238 73.340906-39.248596 28.398483-10.037148 48.200426-20.017982 58.888764-29.662982 8.439887-7.612587 18.492393-22.892028 19.015599-40.890908l-0.841634-13.714944-1.889069-11.025197-4.343321-3.483258c-5.44707-4.388373-10.213256-14.077399-12.709489-25.914538l-2.03446-9.573328-9.588686-1.934119c-6.288704-1.261427-14.277057-4.953557-20.322076-22.33913-3.123874-8.992785-4.632057-17.302638-4.632057-25.391332 0-3.837522 0.988049-11.317004 0.988049-11.317005 0.115699-0.930712 0.651191-3.587694 1.639241-6.580511l2.427632-7.40781-4.691443-6.218056c-28.615547-37.826419-43.128098-78.440879-43.128097-120.711984 0-142.312893 163.926088-258.101013 365.418529-258.101012 201.4607 0 365.359144 115.78812 365.359144 258.101012 0 142.2832-163.898443 258.040603-365.359144 258.040604-33.62849 0-68.113971-3.64708-102.46942-10.837826l-16.906394-3.543668-1.278833 22.297151c0.46382 17.474651 9.659334 32.697778 18.548707 40.613435 10.546019 9.558993 30.359224 19.554162 58.802758 29.592334 39.525045 13.958629 62.301374 26.292351 73.894828 40.018558l1.148799 1.626954h-0.015358c-0.045051 0 17.023117 28.036028 17.023117 62.997616 0 7.033068-4.894172 11.941575-11.90881 11.941575l-459.780825-0.086007-3.313293 0.265187z"
                fill="#FFFFFF"
              />
              <path
                d="M441.530069 675.187867l-0.291808 5.054922c0.348121 11.504376 7.264466 23.010799 13.598221 28.646263 6.274369 5.693826 20.684531 14.961012 53.861488 26.670165 42.764618 15.107428 66.760395 28.413842 80.300254 44.44891l1.803062 2.469611c0.92764 1.481562 19.869519 32.363991 19.869519 71.759003 0 15.282512-11.504376 26.816581-26.783816 26.816581l-459.780825-0.086006c-1.511255 0.202729-2.441966 0.262115-3.314317 0.262114-5.578127 0-11.096869-1.597261-14.698897-4.328987-9.645-7.496888-9.645-18.506727-9.645-22.662678 0-39.364295 18.941879-71.119075 19.116963-71.40781l1.743676-2.499304c13.768186-16.329947 37.823348-29.662982 80.587967-44.77041 33.063305-11.67946 47.530805-20.946646 53.864559-26.670165 4.706801-4.241957 13.711872-15.978754 14.119378-30.273217l-0.811941-12.316317-0.699313-3.893836c-8.249444-6.625562-14.698898-19.057578-17.95383-34.426096-14.698898-2.963124-24.983826-13.452829-31.433279-32.046587-3.718751-10.719055-5.462428-20.625146-5.462428-30.270145 0-4.474379 1.103748-13.190715 1.103748-13.190715 0.173037-1.33617 0.871326-5.114307 2.263811-9.356264-29.225783-38.638361-46.132177-82.739149-46.132178-129.687363 0-150.520358 170.592606-272.974995 380.293536-272.974995 209.638472 0 380.23415 122.454637 380.234149 272.974995C927.282768 563.919177 756.687091 686.344121 547.048619 686.344121c-36.666357 0-71.934087-4.126258-105.51855-11.156254z"
                fill="#27323A"
              />
              <path
                d="M345.019662 369.499736c3.367559 0 6.505767 0.175084 9.412578 0.434127 2.26381-0.259043 5.28632-0.404435 8.481866-0.404434 44.508295 0 99.824724 25.188603 121.788087 95.814165 3.367559 10.950454 5.054922 22.951413 5.054922 35.705952 0 9.468891-1.975075 19.610476-3.951173 29.428512 7.321804 3.284624 9.936807 16.591038 10.692434 22.080087 0.752556 0 1.103748 12.985938 1.103749 13.104709 0 9.701313-1.803062 19.580783-5.405091 30.270146-2.439919 6.972659-9.645 27.658214-31.261267 32.1029-0.348121 1.832755-1.219447 3.197594-1.684291 4.967892 28.122034 5.230006 57.291503 8.716336 87.797143 8.716335 185.002768 0 335.610156-102.410034 335.610155-228.291615 0-125.914346-150.606364-228.351001-335.610155-228.351001-185.062153 0-335.669541 102.436655-335.669541 228.351001 0 18.998192 3.890764 37.329835 10.400627 54.965236 0.348121-1.133441 0.46382-2.410226 0.871326-3.543667 23.647655-70.307134 78.731662-95.350345 122.368631-95.350345z"
                fill="#FFFFFF"
              />
              <path
                d="M288.251364 837.067208c-19.87259-20.976339-33.818932-47.878926-38.989553-75.304717-10.808133 5.345705-23.12445 10.489705-36.722671 15.282512-12.200618 4.27165-48.631481 17.141888-60.718448 30.852736-1.451869 2.877118-6.390068 14.469547-9.12077 29.169469h145.551442z"
                fill="#79CCBF"
              />
              <path
                d="M290.806982 774.836482c9.18118-10.168205 19.580783-18.331643 30.913145-24.257891l5.866863-3.052202-4.997584-4.299294c-9.061385-7.669925-16.850081-14.961012-23.416257-21.817973l-3.890765-4.126258-3.078823 4.8225c-3.314317 5.200314-7.205081 10.025885-12.027581 14.848385a45.98269 45.98269 0 0 1-2.790087 3.48633l-1.336171 1.508183 0.232422 2.004767a142.086614 142.086614 0 0 0 7.029997 29.401891l2.499304 7.029997 4.995537-5.548435zM407.130593 804.556802l-1.859375-2.671317c-20.21764-28.821348-44.157102-35.270802-52.698354-36.57728-6.85696 1.306478-30.852736 7.785624-51.017134 36.633594l-1.859376 2.674388 1.975075 2.615003c13.830643 17.953829 31.436351 31.200858 45.903851 34.601181l0.523205 0.115699 12.783208-0.262115c13.47945-3.400323 30.852736-16.939159 44.272802-34.544867l1.976098-2.584286zM416.023037 774.777097l4.994513 5.551506 2.499304-7.033068c3.778137-10.516326 5.869935-21.205689 6.333755-31.751708 0 0-4.590078-6.307134-5.054922-6.886653-3.426944-3.48633-6.85696-7.901323-9.936807-12.753515l-3.02251-4.881885-3.951173 4.15595c-6.566177 6.913274-14.4675 14.321084-23.58827 22.050394l-5.05697 4.299295 5.869935 3.052202c11.388676 5.925224 21.78828 14.058969 30.913145 24.197482z"
                fill="#FFFFFF"
              />
              <path
                d="M418.054426 837.067208h146.367479c-3.430016-17.924136-10.283904-30.097109-10.344314-30.243524-11.156254-12.461708-47.994625-25.507031-60.079543-29.779705-13.654535-4.852193-26.03126-10.022813-36.898779-15.398211-5.168573 27.486202-19.172253 54.445102-39.044843 75.42144z"
                fill="#79CCBF"
              />
              <path
                d="M454.777097 584.660022c3.022509-9.353192 4.706801-19.259283 2.90681-29.573904-0.815013-5.027277-2.441966-8.19313-5.173692-10.77844-1.859376-0.902043-5.810549 0.318428-5.982562-2.180876 5.518742-21.728894 7.261395-44.157102 1.451869-63.44915-24.403283-81.549394-95.87355-72.570944-95.87355-72.570944s-70.131025-9.356264-96.802214 72.570944c-6.218056 19.146656-4.123186 41.720255 1.511255 63.44915-0.115699 2.499304-4.126258 1.278833-5.926249 2.180876-2.847425 2.58531-4.414994 5.75014-5.286319 10.77844-1.803062 10.314621-0.175084 20.220711 3.019437 29.573904 4.766186 14.149071 9.996192 20.07532 26.090646 15.196506 0 36.633593 14.119379 39.974531 17.198202 43.259155 9.12077 9.876398 16.850081 33.873198 16.850081 45.435935 4.241957 4.706801 16.269538 19.173277 44.392596 41.66087 25.855152-20.628218 37.767034-34.223367 43.288847-41.66087h0.1157c0-0.056314 0.056314-0.115699 0.056313-0.173036 0.523205-0.755627 1.338218-1.743677 1.803062-2.383605-0.699314-0.493513-0.930712-2.499304-1.047434-4.679156 1.803062-12.985938 7.612587-29.544211 14.063065-38.201162 2.148111-2.963124 17.138816-6.101333 17.138816-43.259155 16.153839 4.879837 21.382821-1.046411 26.205321-15.195482z"
                fill="#F4CE73"
              />
              <path
                d="M752.448206 540.907354c0 20.512519-16.677044 37.186491-37.186491 37.186491-20.512519 0-37.186491-16.673973-37.186491-37.186491 0-20.509447 16.674996-37.186491 37.186491-37.186491 20.508423 0 37.186491 16.678068 37.186491 37.186491zM573.136193 437.308589h208.245988c8.19313 0 14.875006-6.625562 14.875006-14.875006 0-8.19313-6.681876-14.875006-14.875006-14.875006H573.136193c-8.249444 0-14.815621 6.681876-14.815621 14.875006 0 8.249444 6.566177 14.875006 14.815621 14.875006zM770.750156 488.730158c0 16.442574 13.307438 29.748988 29.748988 29.748988 16.386261 0 29.750012-13.307438 29.750012-29.748988 0-16.442574-13.363751-29.750012-29.750012-29.750012-16.442574 0.001024-29.748988 13.307438-29.748988 29.750012zM599.225815 523.013934c-24.579391 0-44.56768 20.045627-44.567681 44.680308 0 24.579391 19.988289 44.56768 44.567681 44.567681 24.576319 0 44.623994-19.988289 44.623994-44.567681 0-24.635705-20.047675-44.680308-44.623994-44.680308zM573.136193 372.46286h208.245988c8.19313 0 14.875006-6.681876 14.875006-14.875006 0-8.249444-6.681876-14.875006-14.875006-14.875006H573.136193c-8.249444 0-14.815621 6.625562-14.815621 14.875006 0 8.194154 6.566177 14.875006 14.815621 14.875006zM358.207305 307.561841h423.174876c8.19313 0 14.875006-6.625562 14.875006-14.875006 0-8.19313-6.681876-14.875006-14.875006-14.875006H358.207305c-8.19313 0-14.875006 6.681876-14.875006 14.875006 0.001024 8.249444 6.681876 14.875006 14.875006 14.875006z"
                fill="#27323A"
              />
            </svg>
            <label>Contact Us</label>
          </div>
        </Link>

        <Link to="/signin">
          <div className="flex items-center justify-center ">
            <svg
              className="w-10 h-9"
              stroke="currentColor"
              strokeWidth="1.0"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinejoin="round"
                strokeLinecap="round"
              ></path>
            </svg>
            <label>Account</label>
          </div>
        </Link>
        <Link to="">
          <div className="flex items-center justify-center ">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-10 h-9"
            >
              <path
                d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19"
                stroke="#1C274C"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                opacity="0.5"
                d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                opacity="0.5"
                d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
              <path
                d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5"
                stroke="#1C274C"
                strokeWidth="1.5"
              />
            </svg>
            <label>Cart</label>
          </div>
        </Link>
      </ul>
    </div>
  );
};

export default NavLinks;
