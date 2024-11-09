from manim import *

class SymmetricMatrixTransform(Scene):
  def construct(self):
    plane = NumberPlane(x_range=[-10, 10], y_range=[-10, 10])
    v1 = Vector([-1, 1], color=RED)
    v2 = Vector([1, 1], color=RED)
    group = Group(plane, v1, v2)
    # Create the matrix
    matrix = np.array([[2, 1], [1, 2]])
    # Add everything to the scene
    self.play(ApplyMatrix(0.6 * matrix, group))
