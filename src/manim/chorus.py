from manim import *

class ABWalk(Scene):
    def construct(self):
        # Create the axes
        axes = Axes(
            x_range=[-1, 6],
            y_range=[-1, 6],
            x_length=7,
            y_length=7,
            axis_config={"color": BLUE},
        )

        # Add the y=x line
        y_equals_x = axes.plot(lambda x: x, color=WHITE)

        # Define the AB string
        ab_string = "AABBABABAB"

        # Create the path
        path = VMobject()
        path.points = np.array([axes.get_origin()])
        last_point = path.points[-1]

        for char in ab_string:
          if char == 'A':
            last_point = last_point + axes.c2p(1, 0) - axes.get_origin()
          else:  # char == 'B'
            last_point = last_point + axes.c2p(0, 1) - axes.get_origin()
          path.add_points_as_corners([last_point])

        # Style the path
        path.set_color(RED)

        # Add everything to the scene
        self.add(axes, y_equals_x, path)
