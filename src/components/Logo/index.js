import React from 'react';
import { Svg } from './styles';

export const Logo = props => (
  <Svg
    width={452.14}
    height={131.371}
    viewBox="23.93 9.314 452.14 131.371"
    style={{
      background: '0 0',
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <linearGradient
        id="prefix__editing-stripes-gradient"
        x1={0.043}
        x2={0.957}
        y1={0.297}
        y2={0.703}
      >
        <stop offset={0} stopColor="#0095ff" />
        <stop offset={1} stopColor="#ff00f2" />
      </linearGradient>
      <filter
        id="prefix__editing-stripes"
        x="-100%"
        y="-100%"
        width="300%"
        height="300%"
      >
        <feFlood result="color" floodColor="red" />
        <feImage
          xlinkHref="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDAwcHgiIGhlaWdodD0iMTAwMHB4Ij48ZGVmcz48cGF0dGVybiBpZD0icGF0dGVybiIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQiIGhlaWdodD0iNCI+PHBhdGggZD0iTSAtNCAtNCBMIDggOCBNIC04IC00IEwgNCA4IE0gLTQgLTggTCA4IDQiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI3BhdHRlcm4pIi8+PC9zdmc+"
          width={2000}
          height={1000}
          result="image"
        />
        <feTile in="image" result="tile" />
        <feComposite operator="in" in="SourceGraphic" in2="image" />
      </filter>
    </defs>
    <g filter="url(#prefix__editing-stripes)">
      <path
        d="M44.35-29.1q0 3.85-2.08 6.96-2.07 3.11-6.04 4.57L45.57 0H30.44L23-15.31h-5V0H4.51v-41.97H30.2q4.51 0 7.71 1.74t4.82 4.7q1.62 2.96 1.62 6.43zm-13.73.55q0-1.65-1.1-2.74-1.09-1.1-2.68-1.1H18v7.75h8.84q1.59 0 2.68-1.13 1.1-1.13 1.1-2.78zm37.15-4.39q8.85 0 13.51 4.15 4.67 4.15 4.67 12.69v2.07H61.79q0 3.48 1.56 5.25 1.55 1.77 4.91 1.77 3.05 0 4.48-1.29 1.44-1.28 1.44-3.41h11.77q0 5.85-4.45 9.15Q77.04.73 68.5.73q-8.96 0-13.91-4.18-4.94-4.18-4.94-12.65 0-8.3 4.82-12.57t13.3-4.27zm.49 7.75q-5.74 0-6.41 5.43h11.84q0-2.51-1.44-3.97-1.43-1.46-3.99-1.46zm39.47-7.75q7.38 0 12.01 2.47 4.64 2.47 4.64 8.02v12.57q0 1.03.49 1.71.48.67 1.46.67h2.2v7.01q-.19.12-.95.4-.76.27-2.16.55-1.41.27-3.24.27-3.54 0-5.82-1.07-2.29-1.06-3.14-2.95-2.32 1.83-5.19 2.92-2.87 1.1-6.71 1.1-11.35 0-11.35-9.03 0-4.69 2.54-7.16 2.53-2.47 7.29-3.39 4.75-.91 12.44-.91v-1.59q0-1.89-1.31-2.87-1.31-.97-3.39-.97-1.89 0-3.26.67-1.37.67-1.37 2.13v.25H90.95q-.06-.31-.06-.86 0-4.57 4.36-7.26 4.36-2.68 12.48-2.68zm4.51 18.91q-5.19 0-7.66 1.13-2.47 1.13-2.47 3.02 0 3.05 4.15 3.05 2.38 0 4.18-1.28 1.8-1.28 1.8-3.18v-2.74zm36.9-18.91q7.93 0 12.85 3.39 4.91 3.38 4.91 10.34h-11.78q0-5.49-5.98-5.49-5.97 0-5.97 6.89v3.48q0 6.83 6.22 6.83t6.22-5.62h11.29q0 7.02-4.91 10.44Q157.07.73 149.14.73q-8.47 0-13.29-4.27-4.82-4.27-4.82-12.56 0-8.3 4.82-12.57t13.29-4.27zm38.68.73h6.83v8.24h-6.83v12.26q0 2.19.73 3.2.73 1.01 2.69 1.01h3.41v7.13q-1.46.49-3.78.8-2.32.3-4.03.3-5.37 0-8.26-1.95-2.9-1.95-2.9-6.65v-16.1h-4.51v-8.24h5l2.62-9.76h9.03v9.76zM201.12 0v-41.97h13.48v31.23h21.53V0h-35.01zm55.75-32.94q7.38 0 12.02 2.47 4.63 2.47 4.63 8.02v12.57q0 1.03.49 1.71.49.67 1.47.67h2.19v7.01q-.18.12-.94.4-.77.27-2.17.55-1.4.27-3.23.27-3.54 0-5.83-1.07-2.28-1.06-3.14-2.95-2.32 1.83-5.18 2.92-2.87 1.1-6.71 1.1-11.35 0-11.35-9.03 0-4.69 2.53-7.16 2.53-2.47 7.29-3.39 4.76-.91 12.44-.91v-1.59q0-1.89-1.31-2.87-1.31-.97-3.38-.97-1.89 0-3.27.67-1.37.67-1.37 2.13v.25H240.1q-.06-.31-.06-.86 0-4.57 4.36-7.26 4.36-2.68 12.47-2.68zm4.51 18.91q-5.18 0-7.65 1.13-2.47 1.13-2.47 3.02 0 3.05 4.15 3.05 2.38 0 4.18-1.28 1.79-1.28 1.79-3.18v-2.74zm32.46-15.19q3.47-3.72 9.03-3.72 6.52 0 10.06 4.24 3.54 4.24 3.54 12.54 0 8.35-3.54 12.62T302.87.73q-6.71 0-10.25-5.31L291.58 0h-9.88v-44.23h12.14v15.01zm5.24 5.25q-2.68 0-4.02 1.92-1.34 1.92-1.34 4.97v2.01q0 3.05 1.34 4.94 1.34 1.9 4.02 1.9 5.25 0 5.25-6.23v-3.23q0-6.28-5.25-6.28z"
        fill="url(#prefix__editing-stripes-gradient)"
        transform="translate(89.51 97.597)"
      />
    </g>
    <style />
  </Svg>
)

