#include <iostream>

using namespace std;
#include <vector>


void swap(vector<int>& arr, int a, int b) {
	int temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

int partition(vector<int>& arr, int start, int end) {
	int pivotValue = arr[end];
	int pivotIndex = start;
	for (int i = start; i < end; i++) {
		if (arr[i] < pivotValue) {
			swap(arr, i, pivotIndex);
			pivotIndex++;
		}
	}
	swap(arr, pivotIndex, end);
	return pivotIndex + start;
}

int find_k(vector<int>& arr, int start, int end, int k) {
	int index = partition(arr, start, end);
	if (k - 1 == index) return arr[index];
	if (k - 1 < index) {
		return find_k(arr, start, index - 1, k);
	} else {
		return find_k(arr, index + 1, end, k);
	}
}

int main(int argc, char *argv[]) {
	vector<int> arr = {2, 3, 7, 4, 8, 5, 3};

	int ans = find_k(arr, 0, arr.size() - 1, 5);
	cout << ans;
}