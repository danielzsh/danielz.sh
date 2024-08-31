---
date: 2024-04-13
title: Fast Fourier Transform
image: https://upload.wikimedia.org/wikipedia/commons/6/61/FFT-Time-Frequency-View.png
---

As a competitive programmer, here's how I was first introduced to FFT:
![](@images/fft/fftf.png)

Politely, WTF?

By the way, before we get started, here are a few resources that were invaluable to me when learning about the Fast Fourier Transform (FFT):

- [3Blue1Brown's video on FFT](https://www.youtube.com/watch?v=spUNpyF58BY)
- [Veritasium's video on FFT](https://youtu.be/nmgFG7PUHfo?si=O465095qeLPh7Xw7)
- [Zach Star's video](https://youtu.be/3gjJDuCAEQQ)
- [BetterExplained's interactive demo](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)

In this article, I hope to combine all the things into one comprehensive guide to FFT. This article will also be posing questions along the way, so feel free to stop scrolling if you want to ponder a section on your own before moving on. Let's get started!

## It's Pretty Complex

BetterExplained starts off with a key insight: the best way to think about sine and cosine is not as a 1D sinusoid in the x-y plane, but a **2D circle in the complex plane.**
![](@images/fft/polar.gif)
_Here, we see the imaginary part of the circle corresponds to the sine wave, and similarly the real part corresponds to the cosine wave._

To see why, recall that $e^{i\theta} = \cos{\theta} + i\sin{\theta}$.

For the purposes of this article, we'll be looking at the **real** components of such functions; in other words, $e^{it}$ will be the "2D version" of $\cos{t}$.

A few exercises to get started:

1. What would be the "2D version" of $\sin{t}$?
2. What's the "2D version" of $\cos(t - \frac{\pi}{4})$? (Must be in the form of $ze^{it}$!)

## Something's Going Around...

Let's say we have a real-valued function $f(t)$ that we know is composed of sinusoids of various frequencies, e.g. $f(t) = \cos{t} + \sin{t} + 2\cos{2t}$. Then, let $F(t)$ be the "2D version" of this function; for the above example, $F(t) = (1 - i)e^{it} + 2e^{2it}$.

_In general, $F(t)$ will be a sum of terms of the form $ce^{i\omega t}$, where $\omega$ is the frequency of the sinusoid and $c$ is any complex number._

![](@images/fft/harder.gif)

_On the left is the "2D function" $F(t)$ (rotated 90 degrees counterclockwise for greater clarity), and on the right is the real-valued function $f(t)$._

Hmm...what kind of shape does $ce^{i\omega t}$ draw out in the complex plane? Does it have any special properties? How will these properties be affected when multiple such terms are added together?

![](@images/fft/circles.png)

_Note that the rightmost function is only drawn with $t \in [0, 100]$; try increasing that right endpoint!_

You may have noticed that all the graph are centered at the origin. Why is this the case? What does this imply about the "2D function" $F(t)$?

## The Big Idea

Formally, being centered at the origin means that the **average value** of $F(t)$ is 0, or, with a bit of calculus, $\int_{0}^{2\pi} F(t) \, dt = 0$.

> **Note:** this assumes that $F(t)$ has period $2\pi$. You may have seen the more general Fourier Transform, which takes an integral from $-\infty$ to $\infty$ instead, thus accounting for any abitrary period. It's also worth nothing $\int_{-\infty}^{\infty} sin(t) \, dt$ is considered to be 0, even though it technically doesn't converge (same for $cos(t)$).

How does this help? Let's say $F(t) = (1 + i)e^{it} + 2e^{2it}$. How can we extract that $1 + i$ from $F(t)$?

Well, the most obvious way to eliminate the $e^{it}$ is to simply multiply by $e^{-it}$, which gets us $(1 + i) + 2e^{it}$. The $2e^{it}$ term alone is still a circle and thus still centered at the origin, but the $(1 + i)$ term now causes the circle to be centered at $(1, 1)$. Thus, when we average over all $t$, we will get $(1 + i)$!
