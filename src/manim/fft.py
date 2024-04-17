from manim import *


class CreateCircle(Scene):
    def construct(self):
        # circle = Circle()  # create a circle
        # circle.set_fill(PINK, opacity=0.5)  # set the color and transparency
        t = ValueTracker(0)

        ax1 = Axes(
          x_range=[-1.5, 1.5],
          y_range=[-1.5, 1.5],
          x_length=8,
          y_length=8,
          axis_config={"include_numbers": True},
        )

        ax2 = Axes(
          x_range=[0, TAU],
          y_range=[-1.5, 1.5],
          y_length=8,
        )

        axes = VGroup(ax1, ax2).arrange().scale_to_fit_width(13.0)

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


        self.add(axes, sin, parametric, line1, line2)
        self.play(t.animate.set_value(TAU), run_time=4, rate_func=linear)
