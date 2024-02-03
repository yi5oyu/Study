public class Recursion {
	// 0~n 합
	public static int sum(int n) {
		if(n==0)
			return 0;
		else
			return n+sum(n-1);
	}
	
	// factorial n! / n>0
	public static int fac(int n) {
		if(n==0)
			return 1;
		else
			return n*fac(n-1);
	}
	
	// x^n / n>0
	public static double power(double x, int n) {
		if(n==0)
			return 1;
		else
			return x*power(x, n-1);
	}
	
	// fibonacci / n>1
	public static int fib(int n) {
		if(n>2)
			return n;
		else
			return fib(n-1)+fib(n-2);
	}
	
	// 최대공약수 euclid method
	public static double gcd(int m, int n) {
		/* m>=n
		if(m<n) {
			int tmp = m;
			m=n;
			n=tmp;
		}
		if(m%n==0)
			return n;
		else
			return gcd(n, m%n);
		*/
		if(n==0)
			return m;
		else
			return gcd(n, m%n);
	}
	
	// 문자열 길이
	public static int length(String str) {
		if(str.equals(""))
			return 0;
		else
			return 1+length(str.substring(1));
	}

	// 문자열 출력
	public static void print(String str, boolean reverse) {
		if(!reverse) {
			if(str.length()==0)
				return;
			else
				System.out.print(str.charAt(0));
				print(str.substring(1), false);
		} else {
			if(str.length()==0)
				return;
			else
				print(str.substring(1), true);
				System.out.print(str.charAt(0));
		}

	}
	
	// 진수변환
	public static void Binary(int n) {
		if(n<2)
			System.out.print(n);
		else {
			Binary(n/2);
			System.out.print(n%2);
		}
	}
	
	// 배열의 합 0~n-1
	public static int sumArr(int n, int[] data) {
		if(n<=0)
			return 0;
		else
			return sumArr(n-1, data)+data[n-1];
	}

	// 순차 검색
	public static int search(int[] data, int begin, int end, int target) {
		/*
		for(int i = 0; i<n; i++) 
			if(data[i] == target)
				return i;
		return -1;
		*/
		//
		if(begin>end)
			return -1;
		else if(target==data[begin])
		//else if(target==data[end-1])
			return begin;
			//return end;
		else
			return search(data, begin+1, end, target);
			//retrun search(data, begin, end-1, target);
	}
	
	// 최대값 검색 / begin <= end
	public static int max(int[] data, int begin, int end) {
		if(begin == end)
			return data[begin];
		else
			return Math.max(data[begin], max(data, begin+1, end));
	}
	
	// 이진 검색 binary search / 크기순으로 정렬되어있을때
	public static int binarySearch(String[] items, String target, int begin, int end) {
		if(begin>end)
			return -1;
		else {
			int middle = (begin+end)/2;
			int compResult = target.compareTo(items[middle]);
			if(compResult==0)
				return middle;
			else if(compResult<0)
				return binarySearch(items, target, begin, middle-1);
			else
				return binarySearch(items, target, middle+1, end);
		}
	}
}
