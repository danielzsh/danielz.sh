from manim import *


class CreateCircle(Scene):
    def construct(self):
        # circle = Circle()  # create a circle
        # circle.set_fill(PINK, opacity=0.5)  # set the color and transparency
        t = ValueTracker(0)

        ax1 = Axes(
          x_range=[0, TAU],
          y_range=[-1.5, 1.5],
        )
        cos = VGroup(ax1, always_redraw(
          lambda: ax1.plot(
            lambda x: np.cos(x),
            x_range=[0, t.get_value()],
            color=BLUE,
          )
        ))

        ax2 = Axes(
          x_range=[-1.5, 1.5],
          y_range=[-1.5, 1.5],
          x_length=8,
          y_length=8,
          axis_config={"include_numbers": True},
        )
        func = VGroup(
          ax2,
          always_redraw(
            lambda: ax2.plot_parametric_curve(
              lambda t: np.array((np.cos(t), np.sin(t))),
              t_range = (0, t.get_value()),
            ).set_color(RED)
          )
        )

        group = VGroup(cos, func).arrange().scale_to_fit_width(13.0)
        self.add(group)
        self.play(t.animate.set_value(TAU), rate_func=linear, run_time=2)
