#include <iostream>
#include <vector>

using namespace std;

void print(std::vector<int> const &input)
{
	for (int i = 0; i < input.size(); i++) {
		std::cout << input.at(i) << ' ';
	}
}

void swap(vector<int>& arr, int a, int b) {
	int temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

int partition(vector<int>& arr, int start, int end) {
	int pivotValue = arr[end];
	int pivotIndex = start;
	cout << "pivotValue: " << pivotValue << "pivotIndex: " <<pivotIndex << endl;
	for (int i = start; i < end; i++) {
		if (arr[i] < pivotValue) {
			swap(arr, i, pivotIndex);
			pivotIndex++;
			print(arr);
			cout << endl;
		}
	}
	swap(arr, pivotIndex, end);
	print(arr);
	cout << endl;
	return pivotIndex;
}

void quickSort(vector<int>& arr, int start, int end) {
	if (start >= end) return;
	int index = partition(arr, start, end);
	cout << index << endl;
	quickSort(arr, start, index - 1);
	quickSort(arr, index + 1, end);
}

int main(int argc, char *argv[]) {
//	vector<int> arr = {12, 34, 22, 1, 4, 3, 7, 4, 94};
	vector<int> arr = {2, 3, 7, 4, 8, 5};
	print(arr);
	cout << endl;
	quickSort(arr, 0, arr.size() - 1);
	print(arr);
}