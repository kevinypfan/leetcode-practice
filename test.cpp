#include <iostream>
#include <vector>
#include "string"

using namespace std;

int charToInt(char c) {
	switch (c) {
		case 'V':
			return 5;
		default:
			return 0;
	}
}

int main(int argc, char *argv[]) {
	string str = "IVM";
	cout << charToInt(str[1]) << endl;
	
}