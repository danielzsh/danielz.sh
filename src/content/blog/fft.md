---
date: 2024-04-13
title: Fast Fourier Transform
image: https://upload.wikimedia.org/wikipedia/commons/6/61/FFT-Time-Frequency-View.png
---

As a competitive programmer, here's how I was first introduced to FFT:
![](@images/fftf.png)

Politely, WTF?

By the way, before we get started, here are a few resources that were invaluable to me when learning about the Fast Fourier Transform (FFT):

- [3Blue1Brown's video on FFT](https://www.youtube.com/watch?v=spUNpyF58BY)
- [Veritasium's video on FFT](https://youtu.be/nmgFG7PUHfo?si=O465095qeLPh7Xw7)
- [Zach Star's video](https://youtu.be/3gjJDuCAEQQ)
- [BetterExplained's interactive demo](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)

In this article, I hope to combine all the things into one comprehensive guide to FFT. Let's get started!

BetterExplained starts off with a key insight: the best way to think about the Fourier Transform is not as a 1D sinusoid in the x-y plane, but a 2D circle in the complex plane.
