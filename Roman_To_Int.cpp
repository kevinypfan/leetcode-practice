#include <iostream>
#include <unordered_map>
#include <string>

using namespace std;

class Solution {
public:
	int romanToInt(string s) {
		int ans = 0;
		unordered_map<char, int> m {
			{'M', 1000},
			{'D', 500},
			{'C', 100},
			{'L', 50},
			{'X', 10},
			{'V', 5},
			{'I', 1}
		};
		for (int i = 0; i < s.size(); ++i) {
			ans += m[s[i]];
			if (i > 0 && m[s[i]] - m[s[i - 1]] > 0) {
				ans -= 2 * m[s[i - 1]];
			}
		}
		return ans;
	}
};


int main(int argc, char *argv[]) {
	Solution ans;
	cout << ans.romanToInt("MDCCLXXIV") << endl;
}