package Algorithm;

public class Blob {
	private static int BACKGROUND = 0;
	private static int IMAGE = 1;
	private static int ALREADY = 2;
	private int N;
	int[][] grid = new int[N][N];
	
	public Blob(int N) {
		this.N = N;
	}
	
	public int countCells(int x, int y) {
		if(x<0 || x>=N || y<0 || y>=N)
			return 0;
		else if(grid[x][y] != IMAGE)
			return 0;
		else {
			grid[x][y] = ALREADY;
			return 1 +countCells(x-1, y+1) + countCells(x, y+1)
				+ countCells(x+1, y+1) + countCells(x-1, y)
				+ countCells(x+1, y) + countCells(x-1, y-1)
				+ countCells(x, y-1) + countCells(x+1, y-1);
		}
	}
}
