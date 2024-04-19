from manim import *
import numpy as np

def f(t) -> np.ndarray:
  return np.array((np.cos(t), np.sin(t)))

class Intro(Scene):
    def construct(self):
        t = ValueTracker(0)

        ax1 = ComplexPlane(
          x_range=[-1.5, 1.5],
          y_range=[-1.5, 1.5],
          x_length=8,
          y_length=8,
          background_line_style={
            "stroke_opacity": 0,
          },
          axis_config={
            "include_tip": True,
          }
        ).add_coordinates()

        ax2 = Axes(
          x_range=[0, TAU],
          y_range=[-1.5, 1.5],
          y_length=8,
        )

        axes = VGroup(ax1, ax2).arrange().scale_to_fit_width(13.0)
        self.add(axes)

        title1 = Tex(r"$e^{it}$", font_size=60)
        title1.next_to(ax1, UP)

        title2 = Tex(r"$\sin(t)$", font_size=60)
        title2.next_to(ax2, UP)

        self.add(title1, title2)

        parametric = ax1.plot_parametric_curve(
          lambda t: np.array((np.cos(t), np.sin(t))),
          t_range = (0, TAU + 0.1),
        ).set_color(RED)

        sin = ax2.plot(
          np.sin,
          color=BLUE,
        )

        line1 = always_redraw(
          lambda: Line(
              start=ax1.c2p(0, 0),
              end=ax1.c2p(np.cos(t.get_value()), np.sin(t.get_value())),
              color=YELLOW
          )
        )

        line2 = always_redraw(
          lambda: DashedLine(
            start=ax1.c2p(np.cos(t.get_value()), np.sin(t.get_value())),
            end=ax2.c2p(t.get_value(), np.sin(t.get_value())),
            color=YELLOW
          )
        )

        self.add(sin, parametric, line1, line2)
        self.play(t.animate.set_value(TAU), run_time=4, rate_func=linear)

class Complex(Scene):
  def f(self, t):
    return np.cos(t) + np.cos(2 * t)

  def F(self, t):
    z = np.exp(t * 1j) + np.exp(t * 2j)
    return np.array((-z.imag, z.real))

  def construct(self):
    ax1 = Axes(
      x_range=[-3, 3],
      y_range=[-3, 3],
      x_length=6,
      y_length=6,
    )

    ax2 = Axes(
      x_range=[0, TAU],
      y_range=[-3, 3],
      y_length=6,
    )

    axes = VGroup(ax1, ax2).arrange().scale_to_fit_width(13.0)
    self.add(axes)

    title1 = Tex(r"$e^{it} + e^{2it}$", font_size=60)
    title1.next_to(ax1, UP)

    title2 = Tex(r"$\cos(t) + \cos(2t)$", font_size=60)
    title2.next_to(ax2, UP)

    self.add(title1, title2)

    parametric = ax1.plot_parametric_curve(
      self.F,
      color=BLUE,
      t_range = (0, TAU + 0.1),
    )
    self.add(parametric)

    fn = ax2.plot(
      self.f,
      color=RED,
    )
    self.add(fn)

    t = ValueTracker(0)

    line1 = always_redraw(
      lambda: Line(
          start=ax1.c2p(0, 0),
          end=ax1.c2p(*self.F(t.get_value())),
          color=YELLOW
      )
    )

    line2 = always_redraw(
      lambda: DashedLine(
        start=ax1.c2p(*self.F(t.get_value())),
        end=ax2.c2p(t.get_value(), self.f(t.get_value())),
        color=YELLOW
      )
    )

    self.add(line1, line2)

    self.play(t.animate.set_value(TAU), run_time=4, rate_func=linear)

class Circles(Scene):
  def construct(self):
    ax1 = Axes(
      x_range=[-3, 3],
      y_range=[-3, 3],
      x_length=6,
      y_length=6,
    )
    ax2 = ax1.copy()
    ax3 = ax1.copy()
    axes = VGroup(ax1, ax2, ax3).arrange().scale_to_fit_width(13.0)
    self.add(axes)

    titles = [r"$e^{it}$", r"$e^{it} + e^{5it}$", r"$e^{it} + e^{i\pi t}$"]
    for title, ax in zip(titles, axes.submobjects):
      title = Tex(title, font_size=60)
      title.next_to(ax, UP)
      self.add(title)

    f1 = ax1.plot_parametric_curve(
      f,
      t_range=(0, TAU + 0.1),
      color=RED
    )
    f2 = ax2.plot_parametric_curve(
      lambda t: f(t) + f(5 * t),
      t_range=(0, TAU + 0.1),
      color=BLUE
    )
    f3 = ax3.plot_parametric_curve(
      lambda t: f(t) + f(PI * t),
      t_range=(0, 100),
      color=GREEN
    )
    self.add(f1, f2, f3)
