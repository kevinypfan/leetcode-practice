#include <iostream>
#include <vector>
#include <unordered_map>


using namespace std;


class Solution {
	public:
		vector<int> twoSum(vector<int>& nums, int target) {
			unordered_map<int, int> indies;
			for(int i = 0; i < nums.size(); ++i) {
				indies[nums[i]] = i;
			}
			
			for(int i = 0; i < nums.size(); ++i) {
				int left = target - nums[i];
				if (indies.count(left) && indies[left] != i) {
					return {i, indies[left]};
				}
			}
			return {};
		}
};


int main(int argc, char *argv[]) {
	vector<int> data_ary {3, 4, 2};
	Solution ans;
	vector<int> result = ans.twoSum(data_ary, 6);
	cout << "[";
	for (auto i = result.begin(); i != result.end(); ++i) {
		if (i == result.end() - 1) {
			std::cout << *i;
		} else {
			std::cout << *i << ", ";

		}
	}
	cout << "]";
}


