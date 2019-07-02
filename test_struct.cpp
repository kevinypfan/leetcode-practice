#include <iostream>

using namespace std;

struct Student_Detail {
	int age;
	char *name;
	char *address;
};
struct Student_Data {
	int stuid;
	struct Student_Detail detail;
};

struct ListNode {
	int val;
	ListNode *next;
	ListNode(int x) : val(x), next(NULL) {}
};

struct Foo {
	int bar;

	Foo(int x):  bar(x)  //initialization lists
	{
	}
};

int main(int argc, char *argv[]) {
	Foo data(4);
	cout << data.bar << endl;
	ListNode 
}