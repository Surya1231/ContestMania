/* eslint-disable */

export const companyCategories = [
  'Adobe',
  'Aetion',
  'Affirm',
  'Airbnb',
  'Akuna Capital',
  'Alibaba',
  'Amazon',
  'AppDynamics',
  'Apple',
  'Baidu',
  'Bloomberg',
  'Citadel',
  'Cloudera',
  'Coupang',
  'Coursera',
  'Drawbridge',
  'Dropbox',
  'Epic Systems',
  'Expedia',
  'Facebook',
  'Fallible',
  'GE Digital',
  'Gilt Groupe',
  'GoDaddy',
  'Goldman Sachs',
  'Google',
  'Helix',
  'Houzz',
  'Hulu',
  'IXL',
  'Indeed',
  'Intuit',
  'LinkedIn',
  'LiveRamp',
  'Lyft',
  'MAQ Software',
  'Machine Zone',
  'Mathworks',
  'Microsoft',
  'NetEase',
  'Netsuite',
  'Palantir',
  'Pinterest',
  'Pocket Gems',
  'Poynt',
  'Pure Storage',
  'Quip',
  'Quora',
  'Rackspace',
  'Radius',
  'Riot Games',
  'Rubrik',
  'Samsung',
  'Snapchat',
  'Square',
  'Tencent',
  'TripleByte',
  'Twitter',
  'Two Sigma',
  'Uber',
  'Valve',
  'WAP',
  'Works Applications',
  'Yahoo',
  'Yatra',
  'Yelp',
  'Zappos',
  'Zenefits',
  'databricks',
  'eBay',
  'inmobi',
];

export const companyQuestions = [
  {
    id: '1',
    name: 'Two Sum',
    acceptance: '36.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array of integers, return <b>indices</b> of the two numbers such that they add up to a specific target.</p>\n\n<p>You may assume that each input would have <b><i>exactly</i></b> one solution, and you may not use the <i>same</i> element twice.</p>\n\n<p>\n<b>Example:</b><br>\n</p><pre>Given nums = [2, 7, 11, 15], target = 9,\n\nBecause nums[<b>0</b>] + nums[<b>1</b>] = 2 + 7 = 9,\nreturn [<b>0</b>, <b>1</b>].\n</pre>\n<p></p>\n          ',
    tags: [
      'Facebook',
      'Microsoft',
      'Amazon',
      'Bloomberg',
      'Uber',
      'LinkedIn',
      'Apple',
      'Airbnb',
      'Yelp',
      'Yahoo',
      'Adobe',
      'Dropbox',
    ],
  },
  {
    id: '2',
    name: 'Add Two Numbers',
    acceptance: '28.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>You are given two <b>non-empty</b> linked lists representing two non-negative integers. The digits are stored in <b>reverse order</b> and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.</p>\n\n<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>\n\n<p>\n<b>Example</b>\n</p><pre><b>Input:</b> (2 -&gt; 4 -&gt; 3) + (5 -&gt; 6 -&gt; 4)\n<b>Output:</b> 7 -&gt; 0 -&gt; 8\n<b>Explanation:</b> 342 + 465 = 807.\n</pre>\n<p></p>\n          ',
    tags: ['Microsoft', 'Amazon', 'Bloomberg', 'Airbnb', 'Adobe'],
  },
  {
    id: '3',
    name: 'Longest Substring Without Repeating Characters',
    acceptance: '24.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a string, find the length of the <b>longest substring</b> without repeating characters.</p>\n\n<p><b>Examples:</b></p>\n\n<p>Given <code>"abcabcbb"</code>, the answer is <code>"abc"</code>, which the length is 3.</p>\n\n<p>Given <code>"bbbbb"</code>, the answer is <code>"b"</code>, with the length of 1.</p>\n\n<p>Given <code>"pwwkew"</code>, the answer is <code>"wke"</code>, with the length of 3. Note that the answer must be a <b>substring</b>, <code>"pwke"</code> is a <i>subsequence</i> and not a substring.</p>\n          ',
    tags: ['Amazon', 'Bloomberg', 'Yelp', 'Adobe'],
  },
  {
    id: '4',
    name: 'Median of Two Sorted Arrays',
    acceptance: '22.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>There are two sorted arrays <b>nums1</b> and <b>nums2</b> of size m and n respectively.</p>\n\n<p>Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>nums1 = [1, 3]\nnums2 = [2]\n\nThe median is 2.0\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>nums1 = [1, 2]\nnums2 = [3, 4]\n\nThe median is (2 + 3)/2 = 2.5\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Microsoft', 'Apple', 'Zenefits', 'Yahoo', 'Adobe', 'Dropbox'],
  },
  {
    id: '5',
    name: 'Longest Palindromic Substring',
    acceptance: '25.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a string <b>s</b>, find the longest palindromic substring in <b>s</b>. You may assume that the maximum length of <b>s</b> is 1000.</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b> "babad"\n\n<b>Output:</b> "bab"\n\n<b>Note:</b> "aba" is also a valid answer.\n</pre>\n<p></p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b> "cbbd"\n\n<b>Output:</b> "bb"\n</pre>\n<p></p>\n          ',
    tags: ['Microsoft', 'Amazon', 'Bloomberg'],
  },
  {
    id: '6',
    name: 'ZigZag Conversion',
    acceptance: '27.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nThe string <code>"PAYPALISHIRING"</code> is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)\n</p><pre>P   A   H   N\nA P L S I I G\nY   I   R\n</pre>\n\nAnd then read line by line: <code>"PAHNAPLSIIGYIR"</code><p></p>\n\n<p>\nWrite the code that will take a string and make this conversion given a number of rows:\n\n</p><pre>string convert(string text, int nRows);</pre>\n\n<code>convert("PAYPALISHIRING", 3)</code> should return <code>"PAHNAPLSIIGYIR"</code>.\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '7',
    name: 'Reverse Integer',
    acceptance: '24.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a 32-bit signed integer, reverse digits of an integer.</p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> 123\n<b>Output:</b>  321\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b> -123\n<b>Output:</b> -321\n</pre>\n<p></p>\n\n<p><b>Example 3:</b>\n</p><pre><b>Input:</b> 120\n<b>Output:</b> 21\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\nAssume we are dealing with an environment which could only hold integers within the 32-bit signed integer range. For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.\n</p>\n          ',
    tags: ['Bloomberg', 'Apple'],
  },
  {
    id: '8',
    name: 'String to Integer (atoi)',
    acceptance: '13.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Implement <span style="font-family:monospace">atoi</span> to convert a string to an integer.</p>\n\n<p><b>Hint:</b> Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.</p>\n\n<p>\n<b>Notes:</b> \nIt is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front. </p>\n\n<p>\n<b><font color="red">Update (2015-02-10):</font></b><br>\nThe signature of the <code>C++</code> function had been updated. If you still see your function signature accepts a <code>const char *</code> argument, please click the reload button <span class="glyphicon glyphicon-refresh"></span> to reset your code definition.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">spoilers alert... click to show requirements for atoi.</a></p>\n\n<div class="spoilers"><b>Requirements for atoi:</b>\n\n<p>The function first discards as many whitespace characters as necessary until the first non-whitespace character is found. Then, starting from this character, takes an optional initial plus or minus sign followed by as many numerical digits as possible, and interprets them as a numerical value.</p>\n\n<p>The string can contain additional characters after those that form the integral number, which are ignored and have no effect on the behavior of this function.</p>\n\n<p>If the first sequence of non-whitespace characters in str is not a valid integral number, or if no such sequence exists because either str is empty or it contains only whitespace characters, no conversion is performed.</p>\n\n<p>If no valid conversion could be performed, a zero value is returned. If the correct value is out of the range of representable values, INT_MAX (2147483647) or INT_MIN (-2147483648) is returned.\n</p>\n</div>\n          ',
    tags: ['Microsoft', 'Amazon', 'Bloomberg', 'Uber'],
  },
  {
    id: '9',
    name: 'Palindrome Number',
    acceptance: '35.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Determine whether an integer is a palindrome. Do this without extra space.</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show spoilers.</a></p>\n\n<div class="spoilers"><b>Some hints:</b>\n\n<p>Could negative integers be palindromes? (ie, -1)</p>\n\n<p>If you are thinking of converting the integer to string, note the restriction of using extra space.</p>\n\n<p>You could also try reversing an integer. However, if you have solved the problem "Reverse Integer", you know that the reversed integer might overflow. How would you handle such case?</p>\n\n<p>There is a more generic way of solving this problem.</p>\n\n</div>\n          ',
    tags: [],
  },
  {
    id: '10',
    name: 'Regular Expression Matching',
    acceptance: '24.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Implement regular expression matching with support for <code>\'.\'</code> and <code>\'*\'</code>.</p>\n\n<pre>\'.\' Matches any single character.\n\'*\' Matches zero or more of the preceding element.\n\nThe matching should cover the <b>entire</b> input string (not partial).\n\nThe function prototype should be:\nbool isMatch(const char *s, const char *p)\n\nSome examples:\nisMatch("aa","a") → false\nisMatch("aa","aa") → true\nisMatch("aaa","aa") → false\nisMatch("aa", "a*") → true\nisMatch("aa", ".*") → true\nisMatch("ab", ".*") → true\nisMatch("aab", "c*a*b") → true\n</pre>\n          ',
    tags: ['Google', 'Facebook', 'Uber', 'Twitter', 'Airbnb'],
  },
  {
    id: '11',
    name: 'Container With Most Water',
    acceptance: '36.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given <i>n</i> non-negative integers <i>a<sub>1</sub></i>, <i>a<sub>2</sub></i>, ..., <i>a<sub>n</sub></i>, where each represents a point at coordinate (<i>i</i>, <i>a<sub>i</sub></i>). <i>n</i> vertical lines are drawn such that the two endpoints of line <i>i</i> is at (<i>i</i>, <i>a<sub>i</sub></i>) and (<i>i</i>, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.\n</p>\n<p>Note: You may not slant the container and <i>n</i> is at least 2.\n</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '12',
    name: 'Integer to Roman',
    acceptance: '45.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an integer, convert it to a roman numeral.\n</p>\n\n<p>Input is guaranteed to be within the range from 1 to 3999.</p>\n          ',
    tags: ['Twitter'],
  },
  {
    id: '13',
    name: 'Roman to Integer',
    acceptance: '47.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a roman numeral, convert it to an integer.</p>\n\n<p>Input is guaranteed to be within the range from 1 to 3999.</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Bloomberg', 'Uber', 'Yahoo'],
  },
  {
    id: '14',
    name: 'Longest Common Prefix',
    acceptance: '31.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Write a function to find the longest common prefix string amongst an array of strings.\n</p>\n          ',
    tags: ['Yelp'],
  },
  {
    id: '15',
    name: '3Sum',
    acceptance: '21.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array <i>S</i> of <i>n</i> integers, are there elements <i>a</i>, <i>b</i>, <i>c</i> in <i>S</i> such that <i>a</i> + <i>b</i> + <i>c</i> = 0? Find all unique triplets in the array which gives the sum of zero.</p>\n\n<p><b>Note:</b> The solution set must not contain duplicate triplets.</p>\n\n<pre>For example, given array S = [-1, 0, 1, 2, -1, -4],\n\nA solution set is:\n[\n  [-1, 0, 1],\n  [-1, -1, 2]\n]\n</pre>\n          ',
    tags: ['Facebook', 'Microsoft', 'Amazon', 'Bloomberg', 'Adobe', 'Works Applications'],
  },
  {
    id: '16',
    name: '3Sum Closest',
    acceptance: '31.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array <i>S</i> of <i>n</i> integers, find three integers in <i>S</i> such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.</p>\n\n<pre>    For example, given array S = {-1 2 1 -4}, and target = 1.\n\n    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).\n</pre>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '17',
    name: 'Letter Combinations of a Phone Number',
    acceptance: '35.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a digit string, return all possible letter combinations that the number could represent.\n</p>\n\n<p>\nA mapping of digit to letters (just like on the telephone buttons) is given below.</p>\n<p><img src="http://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Telephone-keypad2.svg/200px-Telephone-keypad2.svg.png"></p>\n\n<pre><b>Input:</b>Digit string "23"\n<b>Output:</b> ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].\n</pre>\n\n<p>\n<b>Note:</b><br>\nAlthough the above answer is in lexicographical order, your answer could be in any order you want.\n</p>\n          ',
    tags: ['Google', 'Facebook', 'Amazon', 'Uber', 'Dropbox'],
  },
  {
    id: '18',
    name: '4Sum',
    acceptance: '27.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array <i>S</i> of <i>n</i> integers, are there elements <i>a</i>, <i>b</i>, <i>c</i>, and <i>d</i> in <i>S</i> such that <i>a</i> + <i>b</i> + <i>c</i> + <i>d</i> = target? Find all unique quadruplets in the array which gives the sum of target.</p>\n\n<p><b>Note:</b> The solution set must not contain duplicate quadruplets.\n</p>\n\n<pre>For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.\n\nA solution set is:\n[\n  [-1,  0, 0, 1],\n  [-2, -1, 1, 2],\n  [-2,  0, 0, 2]\n]\n</pre>\n          ',
    tags: [],
  },
  {
    id: '19',
    name: 'Remove Nth Node From End of List',
    acceptance: '34.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a linked list, remove the <i>n</i><sup>th</sup> node from the end of list and return its head.</p>\n\n<p>\nFor example,</p>\n\n<pre>   Given linked list: <b>1-&gt;2-&gt;3-&gt;4-&gt;5</b>, and <b><i>n</i> = 2</b>.\n\n   After removing the second node from the end, the linked list becomes <b>1-&gt;2-&gt;3-&gt;5</b>.\n</pre>\n\n<p>\n<b>Note:</b><br>\nGiven <i>n</i> will always be valid.<br>\nTry to do this in one pass.\n</p>\n          ',
    tags: [],
  },
  {
    id: '20',
    name: 'Valid Parentheses',
    acceptance: '33.7%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given a string containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>, <code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.</p>\n\n<p>The brackets must close in the correct order, <code>\"()\"</code> and <code>\"()[]{}\"</code> are all valid but <code>\"(]\"</code> and <code>\"([)]\"</code> are not.</p>\n\n          ",
    tags: ['Google', 'Facebook', 'Microsoft', 'Amazon', 'Bloomberg', 'Twitter', 'Airbnb', 'Zenefits'],
  },
  {
    id: '21',
    name: 'Merge Two Sorted Lists',
    acceptance: '39.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b> 1-&gt;2-&gt;4, 1-&gt;3-&gt;4\n<b>Output:</b> 1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4\n</pre>\n<p></p>\n          ',
    tags: ['Microsoft', 'Amazon', 'LinkedIn', 'Apple'],
  },
  {
    id: '22',
    name: 'Generate Parentheses',
    acceptance: '46.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven <i>n</i> pairs of parentheses, write a function to generate all combinations of well-formed parentheses.\n</p>\n\n<p>\nFor example, given <i>n</i> = 3, a solution set is:\n</p>\n<pre>[\n  "((()))",\n  "(()())",\n  "(())()",\n  "()(())",\n  "()()()"\n]\n</pre>\n          ',
    tags: ['Google', 'Uber', 'Zenefits'],
  },
  {
    id: '23',
    name: 'Merge k Sorted Lists',
    acceptance: '27.8%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nMerge <i>k</i> sorted linked lists and return it as one sorted list. Analyze and describe its complexity.\n</p>\n          ',
    tags: ['Google', 'Facebook', 'Microsoft', 'Amazon', 'Uber', 'LinkedIn', 'Twitter', 'Airbnb', 'IXL'],
  },
  {
    id: '24',
    name: 'Swap Nodes in Pairs',
    acceptance: '38.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a linked list, swap every two adjacent nodes and return its head.\n</p>\n\n<p>\nFor example,<br>\nGiven <code>1-&gt;2-&gt;3-&gt;4</code>, you should return the list as <code>2-&gt;1-&gt;4-&gt;3</code>.\n</p>\n\n<p>\nYour algorithm should use only constant space. You may <b>not</b> modify the values in the list, only nodes itself can be changed.\n</p>\n          ',
    tags: ['Microsoft', 'Bloomberg', 'Uber'],
  },
  {
    id: '25',
    name: 'Reverse Nodes in k-Group',
    acceptance: '31.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a linked list, reverse the nodes of a linked list <i>k</i> at a time and return its modified list.\n</p>\n\n<p>\n<i>k</i> is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of <i>k</i> then left-out nodes in the end should remain as it is.</p>\n\n<p>You may not alter the values in the nodes, only nodes itself may be changed.</p>\n\n<p>Only constant memory is allowed.</p>\n\n<p>\nFor example,<br>\nGiven this linked list: <code>1-&gt;2-&gt;3-&gt;4-&gt;5</code>\n</p>\n\n<p>\nFor <i>k</i> = 2, you should return: <code>2-&gt;1-&gt;4-&gt;3-&gt;5</code>\n</p>\n\n<p>\nFor <i>k</i> = 3, you should return: <code>3-&gt;2-&gt;1-&gt;4-&gt;5</code>\n</p>\n          ',
    tags: ['Facebook', 'Microsoft'],
  },
  {
    id: '26',
    name: 'Remove Duplicates from Sorted Array',
    acceptance: '35.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a sorted array, remove the duplicates <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><b>in-place</b></a> such that each element appear only <i>once</i> and return the new length.</p>\n\n<p>Do not allocate extra space for another array, you must do this by <b>modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></b> with O(1) extra memory.</p>\n\n<p>\n<b>Example:</b>\n</p><pre>Given <i>nums</i> = [1,1,2],\n\nYour function should return length = 2, with the first two elements of <i>nums</i> being 1 and 2 respectively.\nIt doesn\'t matter what you leave beyond the new length.\n</pre>\n<p></p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Bloomberg'],
  },
  {
    id: '27',
    name: 'Remove Element',
    acceptance: '40.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array and a value, remove all instances of that value <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><b>in-place</b></a> and return the new length.\n</p>\n\n<p>Do not allocate extra space for another array, you must do this by <b>modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></b> with O(1) extra memory.</p>\n\n<p>The order of elements can be changed. It doesn\'t matter what you leave beyond the new length.</p>\n\n<p>\n<b>Example:</b>\n</p><pre>Given <b>nums</b> = [3,2,2,3], <b>val</b> = 3,\n\nYour function should return length = 2, with the first two elements of <i>nums</i> being 2.\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '28',
    name: 'Implement strStr()',
    acceptance: '28.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nImplement <a href="http://www.cplusplus.com/reference/cstring/strstr/" target="_blank">strStr()</a>.\n</p>\n\n<p>\nReturn the index of the first occurrence of needle in haystack, or <b>-1</b> if needle is not part of haystack.\n</p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> haystack = "hello", needle = "ll"\n<b>Output:</b> 2\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b> haystack = "aaaaa", needle = "bba"\n<b>Output:</b> -1\n</pre>\n<p></p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Apple', 'Pocket Gems'],
  },
  {
    id: '29',
    name: 'Divide Two Integers',
    acceptance: '15.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nDivide two integers without using multiplication, division and mod operator.\n</p>\n<p>\nIf it is overflow, return MAX_INT.\n</p>\n          ',
    tags: [],
  },
  {
    id: '30',
    name: 'Substring with Concatenation of All Words',
    acceptance: '22.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nYou are given a string, <b>s</b>, and a list of words, <b>words</b>, that are all of the same length. Find all starting indices of substring(s) in <b>s</b> that is a concatenation of each word in <b>words</b> exactly once and without any intervening characters.\n</p>\n\n<p>\nFor example, given:<br>\n<b>s</b>: <code>"barfoothefoobarman"</code><br>\n<b>words</b>: <code>["foo", "bar"]</code>\n</p>\n\n<p>\nYou should return the indices: <code>[0,9]</code>.<br>\n(order does not matter).\n</p>\n          ',
    tags: [],
  },
  {
    id: '31',
    name: 'Next Permutation',
    acceptance: '28.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nImplement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.\n</p>\n<p>\nIf such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).\n</p>\n<p>\nThe replacement must be in-place, do not allocate extra memory.\n</p>\n<p>\nHere are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.<br>\n<code>1,2,3</code> → <code>1,3,2</code><br>\n<code>3,2,1</code> → <code>1,2,3</code><br>\n<code>1,1,5</code> → <code>1,5,1</code><br>\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '32',
    name: 'Longest Valid Parentheses',
    acceptance: '23.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a string containing just the characters <code>\'(\'</code> and <code>\')\'</code>, find the length of the longest valid (well-formed) parentheses substring.\n</p>\n<p>\nFor <code>"(()"</code>, the longest valid parentheses substring is <code>"()"</code>, which has length = 2.\n</p>\n<p>\nAnother example is <code>")()())"</code>, where the longest valid parentheses substring is <code>"()()"</code>, which has length = 4.\n</p>\n          ',
    tags: [],
  },
  {
    id: '33',
    name: 'Search in Rotated Sorted Array',
    acceptance: '32.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.</p>\n\n<p>(i.e., <code>0 1 2 4 5 6 7</code> might become <code>4 5 6 7 0 1 2</code>).</p>\n\n<p>You are given a target value to search. If found in the array return its index, otherwise return -1.</p>\n\n<p>You may assume no duplicate exists in the array.</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Bloomberg', 'Uber', 'LinkedIn'],
  },
  {
    id: '34',
    name: 'Search for a Range',
    acceptance: '31.5%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.</p>\n\n<p>Your algorithm's runtime complexity must be in the order of <i>O</i>(log <i>n</i>).</p>\n\n<p>If the target is not found in the array, return <code>[-1, -1]</code>.</p>\n\n<p>\nFor example,<br>\nGiven <code>[5, 7, 7, 8, 8, 10]</code> and target value 8,<br>\nreturn <code>[3, 4]</code>.\n</p>\n          ",
    tags: ['LinkedIn'],
  },
  {
    id: '35',
    name: 'Search Insert Position',
    acceptance: '39.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.</p>\n\n<p>You may assume no duplicates in the array.</p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> [1,3,5,6], 5\n<b>Output:</b> 2\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b> [1,3,5,6], 2\n<b>Output:</b> 1\n</pre>\n<p></p>\n\n<p><b>Example 3:</b>\n</p><pre><b>Input:</b> [1,3,5,6], 7\n<b>Output:</b> 4\n</pre>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> [1,3,5,6], 0\n<b>Output:</b> 0\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '36',
    name: 'Valid Sudoku',
    acceptance: '36.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Determine if a Sudoku is valid, according to: <a href="http://sudoku.com.au/TheRules.aspx">Sudoku Puzzles - The Rules</a>.</p>\n\n<p>The Sudoku board could be partially filled, where empty cells are filled with the character <code>\'.\'</code>.</p>\n\n<p>\n<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png"><br>\n</p><p style="font-size: 11px">A partially filled sudoku which is valid.</p>\n<p></p>\n\n<p><b>Note:</b><br>\nA valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.\n</p>\n          ',
    tags: ['Uber', 'Apple', 'Snapchat'],
  },
  {
    id: '37',
    name: 'Sudoku Solver',
    acceptance: '31.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Write a program to solve a Sudoku puzzle by filling the empty cells.</p>\n\n<p>Empty cells are indicated by the character <code>\'.\'</code>.</p>\n\n<p>You may assume that there will be only one unique solution.\n\n</p><p>\n<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Sudoku-by-L2G-20050714.svg/250px-Sudoku-by-L2G-20050714.svg.png"><br>\n</p><p style="font-size: 11px">A sudoku puzzle...</p>\n<p></p>\n\n<p>\n<img src="http://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Sudoku-by-L2G-20050714_solution.svg/250px-Sudoku-by-L2G-20050714_solution.svg.png"><br>\n</p><p style="font-size: 11px">...and its solution numbers marked in red.\n</p>\n          ',
    tags: ['Uber', 'Snapchat'],
  },
  {
    id: '38',
    name: 'Count and Say',
    acceptance: '35.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>The count-and-say sequence is the sequence of integers with the first five terms as following:</p>\n<pre>1.     1\n2.     11\n3.     21\n4.     1211\n5.     111221\n</pre>\n\n<p>\n<code>1</code> is read off as <code>"one 1"</code> or <code>11</code>.<br>\n<code>11</code> is read off as <code>"two 1s"</code> or <code>21</code>.<br>\n<code>21</code> is read off as <code>"one 2</code>, then <code>one 1"</code> or <code>1211</code>.<br>\n</p>\n\n<p>\nGiven an integer <i>n</i>, generate the <i>n</i><sup>th</sup> term of the count-and-say sequence.\n</p>\n\n<p>\nNote: Each term of the sequence of integers will be represented as a string.\n</p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> 1\n<b>Output:</b> "1"\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b> 4\n<b>Output:</b> "1211"\n</pre>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '39',
    name: 'Combination Sum',
    acceptance: '40.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a <b>set</b> of candidate numbers (<b><i>C</i></b>) <b>(without duplicates)</b> and a target number (<b><i>T</i></b>), find all unique combinations in <b><i>C</i></b> where the candidate numbers sums to <b><i>T</i></b>. \n</p>\n\n<p>The <b>same</b> repeated number may be chosen from <b><i>C</i></b> unlimited number of times.\n</p>\n\n<p><b>Note:</b><br>\n</p><ul>\n<li>All numbers (including target) will be positive integers.</li>\n<li>The solution set must not contain duplicate combinations.</li>\n</ul>\n<p></p>\n\n<p>\nFor example, given candidate set <code>[2, 3, 6, 7]</code> and target <code>7</code>, <br>\nA solution set is: <br>\n</p><pre>[\n  [7],\n  [2, 2, 3]\n]\n</pre>\n<p></p>\n          ',
    tags: ['Uber', 'Snapchat'],
  },
  {
    id: '40',
    name: 'Combination Sum II',
    acceptance: '35.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a collection of candidate numbers (<b><i>C</i></b>) and a target number (<b><i>T</i></b>), find all unique combinations in <b><i>C</i></b> where the candidate numbers sums to <b><i>T</i></b>.\n</p>\n\n<p>Each number in <b><i>C</i></b> may only be used <b>once</b> in the combination.\n</p>\n<p><b>Note:</b><br>\n</p><ul>\n<li>All numbers (including target) will be positive integers.</li>\n<li>The solution set must not contain duplicate combinations.</li>\n</ul>\n<p></p>\n\n<p>\nFor example, given candidate set <code>[10, 1, 2, 7, 6, 1, 5]</code> and target <code>8</code>, <br>\nA solution set is: <br>\n</p><pre>[\n  [1, 7],\n  [1, 2, 5],\n  [2, 6],\n  [1, 1, 6]\n]\n</pre>\n<p></p>\n          ',
    tags: ['Snapchat'],
  },
  {
    id: '41',
    name: 'First Missing Positive',
    acceptance: '25.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an unsorted integer array, find the first missing positive integer.\n</p>\n\n<p>\nFor example,<br>\nGiven <code>[1,2,0]</code> return <code>3</code>,<br>\nand <code>[3,4,-1,1]</code> return <code>2</code>.\n</p>\n\n<p>\nYour algorithm should run in <i>O</i>(<i>n</i>) time and uses constant space.\n</p>\n          ',
    tags: [],
  },
  {
    id: '42',
    name: 'Trapping Rain Water',
    acceptance: '37.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven <i>n</i> non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining. \n</p>\n\n<p>\nFor example, <br>\nGiven <code>[0,1,0,2,1,0,1,3,2,1,2,1]</code>, return <code>6</code>.\n</p>\n\n<p>\n<img src="http://www.leetcode.com/static/images/problemset/rainwatertrap.png"><br>\n</p><p style="font-size: 11px">The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. <b>Thanks Marcos</b> for contributing this image!</p>\n          ',
    tags: ['Google', 'Amazon', 'Bloomberg', 'Twitter', 'Apple', 'Zenefits'],
  },
  {
    id: '43',
    name: 'Multiply Strings',
    acceptance: '27.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given two non-negative integers <code>num1</code> and <code>num2</code> represented as strings, return the product of <code>num1</code> and <code>num2</code>.</p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>The length of both <code>num1</code> and <code>num2</code> is &lt; 110.</li>\n<li>Both <code>num1</code> and <code>num2</code> contains only digits <code>0-9</code>.</li>\n<li>Both <code>num1</code> and <code>num2</code> does not contain any leading zero.</li>\n<li>You <b>must not use any built-in BigInteger library</b> or <b>convert the inputs to integer</b> directly.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook', 'Twitter'],
  },
  {
    id: '44',
    name: 'Wildcard Matching',
    acceptance: '20.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Implement wildcard pattern matching with support for <code>\'?\'</code> and <code>\'*\'</code>.</p>\n\n<pre>\'?\' Matches any single character.\n\'*\' Matches any sequence of characters (including the empty sequence).\n\nThe matching should cover the <b>entire</b> input string (not partial).\n\nThe function prototype should be:\nbool isMatch(const char *s, const char *p)\n\nSome examples:\nisMatch("aa","a") → false\nisMatch("aa","aa") → true\nisMatch("aaa","aa") → false\nisMatch("aa", "*") → true\nisMatch("aa", "a*") → true\nisMatch("ab", "?*") → true\nisMatch("aab", "c*a*b") → false\n</pre>\n          ',
    tags: ['Google', 'Facebook', 'Twitter', 'Snapchat', 'Two Sigma'],
  },
  {
    id: '45',
    name: 'Jump Game II',
    acceptance: '26.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of non-negative integers, you are initially positioned at the first index of the array.\n</p>\n<p>\nEach element in the array represents your maximum jump length at that position. \n</p>\n<p>\nYour goal is to reach the last index in the minimum number of jumps.\n</p>\n\n<p>\nFor example:<br>\nGiven array A = <code>[2,3,1,1,4]</code>\n</p>\n<p>\nThe minimum number of jumps to reach the last index is <code>2</code>. (Jump <code>1</code> step from index 0 to 1, then <code>3</code> steps to the last index.)\n</p>\n\n<p>\n<b>Note:</b><br>\nYou can assume that you can always reach the last index.</p>\n          ',
    tags: [],
  },
  {
    id: '46',
    name: 'Permutations',
    acceptance: '45.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a collection of <b>distinct</b> numbers, return all possible permutations.\n</p>\n\n<p>\nFor example,<br>\n<code>[1,2,3]</code> have the following permutations:<br>\n</p><pre>[\n  [1,2,3],\n  [1,3,2],\n  [2,1,3],\n  [2,3,1],\n  [3,1,2],\n  [3,2,1]\n]\n</pre>\n<p></p>\n          ',
    tags: ['Microsoft', 'LinkedIn'],
  },
  {
    id: '47',
    name: 'Permutations II',
    acceptance: '34.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a collection of numbers that might contain duplicates, return all possible unique permutations.\n</p>\n\n<p>\nFor example,<br>\n<code>[1,1,2]</code> have the following unique permutations:<br>\n</p><pre>[\n  [1,1,2],\n  [1,2,1],\n  [2,1,1]\n]\n</pre>\n<p></p>\n          ',
    tags: ['Microsoft', 'LinkedIn'],
  },
  {
    id: '48',
    name: 'Rotate Image',
    acceptance: '40.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>You are given an <i>n</i> x <i>n</i> 2D matrix representing an image.</p>\n\n<p>Rotate the image by 90 degrees (clockwise).</p>\n\n<p><b>Note:</b><br>\nYou have to rotate the image <b>in-place</b>, which means you have to modify the input 2D matrix directly. <b>DO NOT</b> allocate another 2D matrix and do the rotation.\n</p>\n\n<p><b>Example 1:</b>\n</p><pre>Given <b>input matrix</b> = \n[\n  [1,2,3],\n  [4,5,6],\n  [7,8,9]\n],\n\nrotate the input matrix <b>in-place</b> such that it becomes:\n[\n  [7,4,1],\n  [8,5,2],\n  [9,6,3]\n]\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>Given <b>input matrix</b> =\n[\n  [ 5, 1, 9,11],\n  [ 2, 4, 8,10],\n  [13, 3, 6, 7],\n  [15,14,12,16]\n], \n\nrotate the input matrix <b>in-place</b> such that it becomes:\n[\n  [15,13, 2, 5],\n  [14, 3, 4, 1],\n  [12, 6, 8, 9],\n  [16, 7,10,11]\n]\n</pre>\n<p></p>\n          ',
    tags: ['Microsoft', 'Amazon', 'Apple'],
  },
  {
    id: '49',
    name: 'Group Anagrams',
    acceptance: '36.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array of strings, group anagrams together.\n</p>\n\n<p>For example, given: <code>["eat", "tea", "tan", "ate", "nat", "bat"]</code>, <br>\nReturn:\n</p><pre>[\n  ["ate", "eat","tea"],\n  ["nat","tan"],\n  ["bat"]\n]</pre><p></p>\n\n<p><b>Note:</b> All inputs will be in lower-case.</p>\n          ',
    tags: ['Facebook', 'Amazon', 'Bloomberg', 'Uber', 'Yelp'],
  },
  {
    id: '50',
    name: 'Pow(x, n)',
    acceptance: '26.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Implement <a href="http://www.cplusplus.com/reference/valarray/pow/" target="_blank">pow(<i>x</i>, <i>n</i>)</a>.\n</p>\n\n<br>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> 2.00000, 10\n<b>Output:</b> 1024.00000\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b> 2.10000, 3\n<b>Output:</b> 9.26100\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Facebook', 'Bloomberg', 'LinkedIn'],
  },
  {
    id: '51',
    name: 'N-Queens',
    acceptance: '32.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>The <i>n</i>-queens puzzle is the problem of placing <i>n</i> queens on an <i>n</i>×<i>n</i> chessboard such that no two queens attack each other.</p>\n\n<p><img src="https://leetcode.com/static/images/problemset/8-queens.png"></p>\n\n<p>Given an integer <i>n</i>, return all distinct solutions to the <i>n</i>-queens puzzle.</p>\n\n<p>Each solution contains a distinct board configuration of the <i>n</i>-queens\' placement, where <code>\'Q\'</code> and <code>\'.\'</code> both indicate a queen and an empty space respectively.</p>\n\n<p>For example,<br>\nThere exist two distinct solutions to the 4-queens puzzle:</p>\n<pre>[\n [".Q..",  // Solution 1\n  "...Q",\n  "Q...",\n  "..Q."],\n\n ["..Q.",  // Solution 2\n  "Q...",\n  "...Q",\n  ".Q.."]\n]\n</pre>\n          ',
    tags: [],
  },
  {
    id: '52',
    name: 'N-Queens II',
    acceptance: '46.0%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Follow up for N-Queens problem.</p>\n\n<p>Now, instead outputting board configurations, return the total number of distinct solutions.</p>\n\n<p><img src="https://leetcode.com/static/images/problemset/8-queens.png"></p>\n          ',
    tags: ['Zenefits'],
  },
  {
    id: '53',
    name: 'Maximum Subarray',
    acceptance: '40.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nFind the contiguous subarray within an array (containing at least one number) which has the largest sum.\n</p>\n<p>\nFor example, given the array <code>[-2,1,-3,4,-1,2,1,-5,4]</code>,<br>\nthe contiguous subarray <code>[4,-1,2,1]</code> has the largest sum = <code>6</code>.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show more practice.</a></p>\n\n<div class="spoilers"><b>More practice:</b>\n\n<p>If you have figured out the O(<i>n</i>) solution, try coding another solution using the divide and conquer approach, which is more subtle.</p>\n</div>\n          ',
    tags: ['Microsoft', 'Bloomberg', 'LinkedIn'],
  },
  {
    id: '54',
    name: 'Spiral Matrix',
    acceptance: '26.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a matrix of <i>m</i> x <i>n</i> elements (<i>m</i> rows, <i>n</i> columns), return all elements of the matrix in spiral order.\n</p>\n\n<p>\nFor example,<br>\nGiven the following matrix:\n</p>\n<pre>[\n [ 1, 2, 3 ],\n [ 4, 5, 6 ],\n [ 7, 8, 9 ]\n]\n</pre>\n<p>\nYou should return <code>[1,2,3,6,9,8,7,4,5]</code>.\n</p>\n          ',
    tags: ['Google', 'Microsoft', 'Uber'],
  },
  {
    id: '55',
    name: 'Jump Game',
    acceptance: '29.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of non-negative integers, you are initially positioned at the first index of the array.\n</p>\n<p>\nEach element in the array represents your maximum jump length at that position. \n</p>\n<p>\nDetermine if you are able to reach the last index.\n</p>\n\n<p>\nFor example:<br>\nA = <code>[2,3,1,1,4]</code>, return <code>true</code>.\n</p>\n<p>\nA = <code>[3,2,1,0,4]</code>, return <code>false</code>.\n</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '56',
    name: 'Merge Intervals',
    acceptance: '31.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a collection of intervals, merge all overlapping intervals.</p>\n\n<p>\nFor example,<br>\nGiven <code>[1,3],[2,6],[8,10],[15,18]</code>,<br>\nreturn <code>[1,6],[8,10],[15,18]</code>.\n</p>\n          ',
    tags: ['Google', 'Facebook', 'Microsoft', 'Bloomberg', 'LinkedIn', 'Twitter', 'Yelp'],
  },
  {
    id: '57',
    name: 'Insert Interval',
    acceptance: '28.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a set of <i>non-overlapping</i> intervals, insert a new interval into the intervals (merge if necessary).</p>\n\n<p>You may assume that the intervals were initially sorted according to their start times.</p>\n\n<p>\n<b>Example 1:</b><br>\nGiven intervals <code>[1,3],[6,9]</code>, insert and merge <code>[2,5]</code> in as <code>[1,5],[6,9]</code>.\n</p>\n\n<p>\n<b>Example 2:</b><br>\nGiven <code>[1,2],[3,5],[6,7],[8,10],[12,16]</code>, insert and merge <code>[4,9]</code> in as <code>[1,2],[3,10],[12,16]</code>.\n</p>\n\n<p>\nThis is because the new interval <code>[4,9]</code> overlaps with <code>[3,5],[6,7],[8,10]</code>.\n</p>\n          ',
    tags: ['Google', 'Facebook', 'LinkedIn'],
  },
  {
    id: '58',
    name: 'Length of Last Word',
    acceptance: '32.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a string <i>s</i> consists of upper/lower-case alphabets and empty space characters <code>\' \'</code>, return the length of last word in the string.</p>\n\n<p>If the last word does not exist, return 0.</p>\n\n<p><b>Note:</b> A word is defined as a character sequence consists of non-space characters only.</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b> "Hello World"\n<b>Output:</b> 5\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '59',
    name: 'Spiral Matrix II',
    acceptance: '40.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an integer <i>n</i>, generate a square matrix filled with elements from 1 to <i>n</i><sup>2</sup> in spiral order.</p>\n\n<p>\nFor example,<br>\nGiven <i>n</i> = <code>3</code>,\n</p>\nYou should return the following matrix:\n<pre>[\n [ 1, 2, 3 ],\n [ 8, 9, 4 ],\n [ 7, 6, 5 ]\n]\n</pre>\n          ',
    tags: [],
  },
  {
    id: '60',
    name: 'Permutation Sequence',
    acceptance: '29.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>The set <code>[1,2,3,…,<i>n</i>]</code> contains a total of <i>n</i>! unique permutations.</p>\n\n<p>By listing and labeling all of the permutations in order,<br>\nWe get the following sequence (ie, for <i>n</i> = 3):\n</p><ol>\n<li><code>"123"</code></li>\n<li><code>"132"</code></li>\n<li><code>"213"</code></li>\n<li><code>"231"</code></li>\n<li><code>"312"</code></li>\n<li><code>"321"</code></li>\n</ol>\n<p></p>\n\n<p>Given <i>n</i> and <i>k</i>, return the <i>k</i><sup>th</sup> permutation sequence.</p>\n\n<p><b>Note:</b> Given <i>n</i> will be between 1 and 9 inclusive.</p>\n          ',
    tags: ['Twitter'],
  },
  {
    id: '61',
    name: 'Rotate List',
    acceptance: '24.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a list, rotate the list to the right by <i>k</i> places, where <i>k</i> is non-negative.</p>\n\n<br>\n\n<p><b>Example:</b>\n</p><pre>Given <b>1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL</b> and <i>k</i> = <b>2</b>,\n\nreturn <b>4-&gt;5-&gt;1-&gt;2-&gt;3-&gt;NULL</b>.\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '62',
    name: 'Unique Paths',
    acceptance: '42.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>A robot is located at the top-left corner of a <i>m</i> x <i>n</i> grid (marked \'Start\' in the diagram below).</p>\n\n<p>The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked \'Finish\' in the diagram below).</p>\n\n<p>How many possible unique paths are there?</p>\n\n<p>\n<img src="https://leetcode.com/static/images/problemset/robot_maze.png"><br>\n</p><p style="font-size: 11px">Above is a 3 x 7 grid. How many possible unique paths are there?\n</p>\n\n<p><b>Note:</b> <i>m</i> and <i>n</i> will be at most 100.</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '63',
    name: 'Unique Paths II',
    acceptance: '32.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Follow up for "Unique Paths":</p>\n\n<p>Now consider if some obstacles are added to the grids. How many unique paths would there be?</p>\n\n<p>An obstacle and empty space is marked as <code>1</code> and <code>0</code> respectively in the grid.</p>\n\n<p>For example,<br>\n</p><p>There is one obstacle in the middle of a 3x3 grid as illustrated below.</p>\n<pre>[\n  [0,0,0],\n  [0,1,0],\n  [0,0,0]\n]\n</pre>\n<p>The total number of unique paths is <code>2</code>.</p>\n\n<p><b>Note:</b> <i>m</i> and <i>n</i> will be at most 100.</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '64',
    name: 'Minimum Path Sum',
    acceptance: '39.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a <i>m</i> x <i>n</i> grid filled with non-negative numbers, find a path from top left to bottom right which <i>minimizes</i> the sum of all numbers along its path.</p>\n\n<p><b>Note:</b> You can only move either down or right at any point in time.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>[[1,3,1],\n [1,5,1],\n [4,2,1]]\n</pre>\nGiven the above grid map, return <code>7</code>. Because the path 1→3→1→1→1 minimizes the sum.\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '65',
    name: 'Valid Number',
    acceptance: '12.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Validate if a given string is numeric.</p>\n\n<p>\nSome examples:<br>\n<code>"0"</code> =&gt; <code>true</code><br>\n<code>"   0.1  "</code> =&gt; <code>true</code><br>\n<code>"abc"</code> =&gt; <code>false</code><br>\n<code>"1 a"</code> =&gt; <code>false</code><br>\n<code>"2e10"</code> =&gt; <code>true</code><br>\n</p>\n\n<p><b>Note:</b> It is intended for the problem statement to be ambiguous. You should gather all requirements up front before implementing one.\n</p>\n\n<p>\n<b><font color="red">Update (2015-02-10):</font></b><br>\nThe signature of the <code>C++</code> function had been updated. If you still see your function signature accepts a <code>const char *</code> argument, please click the reload button <span class="glyphicon glyphicon-refresh"></span> to reset your code definition.\n</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '66',
    name: 'Plus One',
    acceptance: '39.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a non-negative integer represented as a <b>non-empty</b> array of digits, plus one to the integer.</p>\n\n<p>You may assume the integer do not contain any leading zero, except the number 0 itself.</p>\n\n<p>The digits are stored such that the most significant digit is at the head of the list.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '67',
    name: 'Add Binary',
    acceptance: '33.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two binary strings, return their sum (also a binary string).\n</p>\n\n<p>\nFor example,<br>\na = <code>"11"</code><br>\nb = <code>"1"</code><br>\nReturn <code>"100"</code>.\n</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '68',
    name: 'Text Justification',
    acceptance: '19.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of words and a length <i>L</i>, format the text such that each line has exactly <i>L</i> characters and is fully (left and right) justified.\n</p> \n\n<p>\nYou should pack your words in a greedy approach; that is, pack as many words as you can in each line. Pad extra spaces <code>\' \'</code> when necessary so that each line has exactly <i>L</i> characters.\n</p>\n\n<p>\nExtra spaces between words should be distributed as evenly as possible. If the number of spaces on a line do not divide evenly between words, the empty slots on the left will be assigned more spaces than the slots on the right.\n</p>\n\n<p>\nFor the last line of text, it should be left justified and no extra space is inserted between words.\n</p>\n\n<p>\nFor example,<br>\n<b>words</b>: <code>["This", "is", "an", "example", "of", "text", "justification."]</code><br>\n<b>L</b>: <code>16</code>.\n</p>\n\n<p>\nReturn the formatted lines as:<br>\n</p><pre>[\n   "This    is    an",\n   "example  of text",\n   "justification.  "\n]\n</pre>\n<p></p>\n\n<p>\n<b>Note:</b> Each word is guaranteed not to exceed <i>L</i> in length.\n</p>\n\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show corner cases.</a></p>\n\n<div class="spoilers"><b>Corner Cases:</b>\n<p>\n</p><ul>\n<li>A line other than the last line might contain only one word. What should you do in this case?<br>\nIn this case, that line should be left-justified.</li>\n<p></p>\n</ul></div>\n          ',
    tags: ['Facebook', 'LinkedIn', 'Airbnb'],
  },
  {
    id: '69',
    name: 'Sqrt(x)',
    acceptance: '28.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Implement <code>int sqrt(int x)</code>.</p>\n\n<p>Compute and return the square root of <i>x</i>.</p>\n\n<p><b>x</b> is guaranteed to be a non-negative integer.</p>\n\n<br>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> 4\n<b>Output:</b> 2\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b> 8\n<b>Output:</b> 2\n<b>Explanation:</b> The square root of 8 is 2.82842..., and since we want to return an integer, the decimal part will be truncated.\n</pre>\n<p></p>\n          ',
    tags: ['Facebook', 'Bloomberg', 'Apple'],
  },
  {
    id: '70',
    name: 'Climbing Stairs',
    acceptance: '40.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>You are climbing a stair case. It takes <i>n</i> steps to reach to the top.</p>\n\n<p>Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?\n</p>\n\n<p><b>Note:</b> Given <i>n</i> will be a positive integer.\n</p>\n\n<br>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> 2\n<b>Output:</b>  2\n<b>Explanation:</b>  There are two ways to climb to the top.\n\n1. 1 step + 1 step\n2. 2 steps\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b> 3\n<b>Output:</b>  3\n<b>Explanation:</b>  There are three ways to climb to the top.\n\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step\n</pre>\n<p></p>\n          ',
    tags: ['Apple', 'Adobe'],
  },
  {
    id: '71',
    name: 'Simplify Path',
    acceptance: '25.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an absolute path for a file (Unix-style), simplify it.</p>\n\n<p>For example,<br>\n<b>path</b> = <code>"/home/"</code>, =&gt; <code>"/home"</code><br>\n<b>path</b> = <code>"/a/./b/../../c/"</code>, =&gt; <code>"/c"</code><br>\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show corner cases.</a></p>\n\n<div class="spoilers"><b>Corner Cases:</b>\n\n<p>\n</p><ul>\n<li>Did you consider the case where <b>path</b> = <code>"/../"</code>?<br>\nIn this case, you should return <code>"/"</code>.</li>\n<li>Another corner case is the path might contain multiple slashes <code>\'/\'</code> together, such as <code>"/home//foo/"</code>.<br>\nIn this case, you should ignore redundant slashes and return <code>"/home/foo"</code>.</li>\n<p></p>\n</ul></div>\n          ',
    tags: ['Facebook', 'Microsoft'],
  },
  {
    id: '72',
    name: 'Edit Distance',
    acceptance: '32.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two words <i>word1</i> and <i>word2</i>, find the minimum number of steps required to convert <i>word1</i> to <i>word2</i>. (each operation is counted as 1 step.)\n</p>\n\n<p>\nYou have the following 3 operations permitted on a word:\n</p>\n\n<p>\na) Insert a character<br>\nb) Delete a character<br>\nc) Replace a character<br>\n</p>\n          ',
    tags: [],
  },
  {
    id: '73',
    name: 'Set Matrix Zeroes',
    acceptance: '36.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a <i>m</i> x <i>n</i> matrix, if an element is 0, set its entire row and column to 0. Do it in place.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show follow up.</a></p>\n\n<div class="spoilers"><b>Follow up:</b>\n\n<p>\nDid you use extra space?<br>\nA straight forward solution using O(<i>m</i><i>n</i>) space is probably a bad idea.<br>\nA simple improvement uses O(<i>m</i> + <i>n</i>) space, but still not the best solution.<br>\nCould you devise a constant space solution?\n</p>\n</div>\n          ',
    tags: ['Microsoft', 'Amazon'],
  },
  {
    id: '74',
    name: 'Search a 2D Matrix',
    acceptance: '34.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Write an efficient algorithm that searches for a value in an <i>m</i> x <i>n</i> matrix. This matrix has the following properties:</p>\n\n<p>\n</p><ul>\n<li>Integers in each row are sorted from left to right.</li>\n<li>The first integer of each row is greater than the last integer of the previous row.</li>\n</ul>\n<p></p>\n\n<p>\nFor example,</p>\n<p>\nConsider the following matrix:\n</p>\n<pre>[\n  [1,   3,  5,  7],\n  [10, 11, 16, 20],\n  [23, 30, 34, 50]\n]\n</pre>\n\n<p>Given <b>target</b> = <code>3</code>, return <code>true</code>.</p>\n          ',
    tags: [],
  },
  {
    id: '75',
    name: 'Sort Colors',
    acceptance: '38.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array with <i>n</i> objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.\n</p>\n\n<p>\nHere, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.\n</p>\n\n<p>\n<b>Note:</b><br>\nYou are not suppose to use the library\'s sort function for this problem.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show follow up.</a></p>\n\n<div class="spoilers">\n<p><b>Follow up:</b><br>\nA rather straight forward solution is a two-pass algorithm using counting sort.<br>\nFirst, iterate the array counting number of 0\'s, 1\'s, and 2\'s, then overwrite array with total number of 0\'s, then 1\'s and followed by 2\'s.</p>\n<p>Could you come up with an one-pass algorithm using only constant space?<br>\n</p>\n</div>\n          ',
    tags: ['Facebook', 'Microsoft', 'Pocket Gems'],
  },
  {
    id: '76',
    name: 'Minimum Window Substring',
    acceptance: '26.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).\n</p>\n\n<p>\nFor example,<br>\n<b>S</b> = <code>"ADOBECODEBANC"</code><br>\n<b>T</b> = <code>"ABC"</code><br>\n</p>\n<p>\nMinimum window is <code>"BANC"</code>.\n</p>\n\n<p>\n<b>Note:</b><br>\nIf there is no such window in S that covers all characters in T, return the empty string <code>""</code>.\n</p>\n<p>\nIf there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.\n</p>\n          ',
    tags: ['Facebook', 'Uber', 'LinkedIn', 'Snapchat'],
  },
  {
    id: '77',
    name: 'Combinations',
    acceptance: '40.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two integers <i>n</i> and <i>k</i>, return all possible combinations of <i>k</i> numbers out of 1 ... <i>n</i>.\n</p>\n<p>\nFor example,<br>\nIf <i>n</i> = 4 and <i>k</i> = 2, a solution is:\n</p>\n\n<pre>[\n  [2,4],\n  [3,4],\n  [2,3],\n  [1,2],\n  [1,3],\n  [1,4],\n]\n</pre>\n          ',
    tags: [],
  },
  {
    id: '78',
    name: 'Subsets',
    acceptance: '42.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a set of <b>distinct</b> integers, <i>nums</i>, return all possible subsets (the power set).\n</p>\n<p><b>Note:</b> The solution set must not contain duplicate subsets.\n</p>\n<p>\nFor example,<br>\nIf <b><i>nums</i></b> = <code>[1,2,3]</code>, a solution is:\n</p>\n\n<pre>[\n  [3],\n  [1],\n  [2],\n  [1,2,3],\n  [1,3],\n  [2,3],\n  [1,2],\n  []\n]\n</pre>\n          ',
    tags: ['Facebook', 'Amazon', 'Bloomberg', 'Uber', 'Coupang'],
  },
  {
    id: '79',
    name: 'Word Search',
    acceptance: '27.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a 2D board and a word, find if the word exists in the grid.\n</p>\n<p>\nThe word can be constructed from letters of sequentially adjacent cell, where \"adjacent\" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.\n</p>\n\n<p>\nFor example,<br>\nGiven <b>board</b> = \n</p><pre>[\n  ['A','B','C','E'],\n  ['S','F','C','S'],\n  ['A','D','E','E']\n]\n</pre>\n\n<b>word</b> = <code>\"ABCCED\"</code>, -&gt; returns <code>true</code>,<br>\n<b>word</b> = <code>\"SEE\"</code>, -&gt; returns <code>true</code>,<br>\n<b>word</b> = <code>\"ABCB\"</code>, -&gt; returns <code>false</code>.<br>\n<p></p>\n          ",
    tags: ['Facebook', 'Microsoft', 'Bloomberg'],
  },
  {
    id: '80',
    name: 'Remove Duplicates from Sorted Array II',
    acceptance: '36.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nFollow up for "Remove Duplicates":<br>\nWhat if duplicates are allowed at most <i>twice</i>?</p>\n\n<p>\nFor example,<br>\nGiven sorted array <i>nums</i> = <code>[1,1,1,2,2,3]</code>,\n</p>\n<p>\nYour function should return length = <code>5</code>, with the first five elements of <i>nums</i> being <code>1</code>, <code>1</code>, <code>2</code>, <code>2</code> and <code>3</code>. It doesn\'t matter what you leave beyond the new length.\n</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '81',
    name: 'Search in Rotated Sorted Array II',
    acceptance: '32.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <blockquote>\n<p><i>Follow up</i> for "Search in Rotated Sorted Array":<br>\nWhat if <i>duplicates</i> are allowed?</p>\n\n<p>Would this affect the run-time complexity? How and why?</p>\n</blockquote>\n\n<p>Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.</p>\n\n<p>(i.e., <code>0 1 2 4 5 6 7</code> might become <code>4 5 6 7 0 1 2</code>).</p>\n\n<p>Write a function to determine if a given target is in the array.</p>\n\n<p>The array may contain duplicates.</p>\n          ',
    tags: [],
  },
  {
    id: '82',
    name: 'Remove Duplicates from Sorted List II',
    acceptance: '29.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a sorted linked list, delete all nodes that have duplicate numbers, leaving only <i>distinct</i> numbers from the original list.\n</p>\n<p>\nFor example,<br>\nGiven <code>1-&gt;2-&gt;3-&gt;3-&gt;4-&gt;4-&gt;5</code>, return <code>1-&gt;2-&gt;5</code>.<br>\nGiven <code>1-&gt;1-&gt;1-&gt;2-&gt;3</code>, return <code>2-&gt;3</code>.\n</p>\n          ',
    tags: [],
  },
  {
    id: '83',
    name: 'Remove Duplicates from Sorted List',
    acceptance: '40.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a sorted linked list, delete all duplicates such that each element appear only <i>once</i>.\n</p>\n<p>\nFor example,<br>\nGiven <code>1-&gt;1-&gt;2</code>, return <code>1-&gt;2</code>.<br>\nGiven <code>1-&gt;1-&gt;2-&gt;3-&gt;3</code>, return <code>1-&gt;2-&gt;3</code>.\n</p>\n          ',
    tags: [],
  },
  {
    id: '84',
    name: 'Largest Rectangle in Histogram',
    acceptance: '27.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven <i>n</i> non-negative integers representing the histogram\'s bar height where the width of each bar is 1, find the area of largest rectangle in the histogram.\n</p>\n\n<p>\n<img src="https://leetcode.com/static/images/problemset/histogram.png"><br>\n</p><p style="font-size: 11px">Above is a histogram where width of each bar is 1, given height = <code>[2,1,5,6,2,3]</code>.</p>\n<p></p>\n\n<p>\n<img src="https://leetcode.com/static/images/problemset/histogram_area.png"><br>\n</p><p style="font-size: 11px">The largest rectangle is shown in the shaded area, which has area = <code>10</code> unit.</p>\n<p></p>\n\n<p>\nFor example,<br>\nGiven heights = <code>[2,1,5,6,2,3]</code>,<br>\nreturn <code>10</code>.\n</p>\n          ',
    tags: [],
  },
  {
    id: '85',
    name: 'Maximal Rectangle',
    acceptance: '29.0%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a 2D binary matrix filled with 0\'s and 1\'s, find the largest rectangle containing only 1\'s and return its area.\n</p>\n\n<p>For example, given the following matrix:\n</p><pre>1 0 1 0 0\n1 0 <font color="red">1</font> <font color="red">1</font> <font color="red">1</font>\n1 1 <font color="red">1</font> <font color="red">1</font> <font color="red">1</font>\n1 0 0 1 0\n</pre>\nReturn 6.\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '86',
    name: 'Partition List',
    acceptance: '33.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a linked list and a value <i>x</i>, partition it such that all nodes less than <i>x</i> come before nodes greater than or equal to <i>x</i>.\n</p>\n<p>\nYou should preserve the original relative order of the nodes in each of the two partitions.\n</p>\n<p>\nFor example,<br>\nGiven <code>1-&gt;4-&gt;3-&gt;2-&gt;5-&gt;2</code> and <i>x</i> = 3,<br>\nreturn <code>1-&gt;2-&gt;2-&gt;4-&gt;3-&gt;5</code>.\n</p>\n          ',
    tags: [],
  },
  {
    id: '87',
    name: 'Scramble String',
    acceptance: '29.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string <i>s1</i>, we may represent it as a binary tree by partitioning it to two non-empty substrings recursively.\n</p>\n<p>\nBelow is one possible representation of <i>s1</i> = <code>"great"</code>:\n</p>\n<pre>    great\n   /    \\\n  gr    eat\n / \\    /  \\\ng   r  e   at\n           / \\\n          a   t\n</pre>\n<p>\nTo scramble the string, we may choose any non-leaf node and swap its two children.\n</p>\n<p>\nFor example, if we choose the node <code>"gr"</code> and swap its two children, it produces a scrambled string <code>"rgeat"</code>.\n</p>\n<pre>    rgeat\n   /    \\\n  rg    eat\n / \\    /  \\\nr   g  e   at\n           / \\\n          a   t\n</pre>\n<p>\nWe say that <code>"rgeat"</code> is a scrambled string of <code>"great"</code>.\n</p>\n<p>\nSimilarly, if we continue to swap the children of nodes <code>"eat"</code> and <code>"at"</code>, it produces a scrambled string <code>"rgtae"</code>.\n</p>\n<pre>    rgtae\n   /    \\\n  rg    tae\n / \\    /  \\\nr   g  ta  e\n       / \\\n      t   a\n</pre>\n<p>\nWe say that <code>"rgtae"</code> is a scrambled string of <code>"great"</code>.\n</p>\n<p>\nGiven two strings <i>s1</i> and <i>s2</i> of the same length, determine if <i>s2</i> is a scrambled string of <i>s1</i>.\n</p>\n          ',
    tags: [],
  },
  {
    id: '88',
    name: 'Merge Sorted Array',
    acceptance: '32.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given two sorted integer arrays <i>nums1</i> and <i>nums2</i>, merge <i>nums2</i> into <i>nums1</i> as one sorted array.</p>\n\n<p>\n<b>Note:</b><br>\nYou may assume that <i>nums1</i> has enough space (size that is greater or equal to <i>m</i> + <i>n</i>) to hold additional elements from <i>nums2</i>. The number of elements initialized in <i>nums1</i> and <i>nums2</i> are <i>m</i> and <i>n</i> respectively.</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Bloomberg'],
  },
  {
    id: '89',
    name: 'Gray Code',
    acceptance: '41.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>The gray code is a binary numeral system where two successive values differ in only one bit.</p>\n\n<p>Given a non-negative integer <i>n</i> representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.</p>\n\n<p>For example, given <i>n</i> = 2, return <code>[0,1,3,2]</code>. Its gray code sequence is:</p>\n<pre>00 - 0\n01 - 1\n11 - 3\n10 - 2\n</pre>\n\n<p><b>Note:</b><br>\nFor a given <i>n</i>, a gray code sequence is not uniquely defined.\n</p>\n<p>For example, <code>[0,2,3,1]</code> is also a valid gray code sequence according to the above definition.</p>\n\n<p>For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.</p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '90',
    name: 'Subsets II',
    acceptance: '37.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a collection of integers that might contain duplicates, <b><i>nums</i></b>, return all possible subsets (the power set).\n</p>\n<p><b>Note:</b> The solution set must not contain duplicate subsets.\n</p>\n<p>\nFor example,<br>\nIf <b><i>nums</i></b> = <code>[1,2,2]</code>, a solution is:\n</p>\n\n<pre>[\n  [2],\n  [1],\n  [1,2,2],\n  [2,2],\n  [1,2],\n  []\n]\n</pre>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '91',
    name: 'Decode Ways',
    acceptance: '20.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nA message containing letters from <code>A-Z</code> is being encoded to numbers using the following mapping:\n</p>\n\n<pre>\'A\' -&gt; 1\n\'B\' -&gt; 2\n...\n\'Z\' -&gt; 26\n</pre>\n\n<p>\nGiven an encoded message containing digits, determine the total number of ways to decode it.\n</p>\n\n<p>\nFor example,<br>\nGiven encoded message <code>"12"</code>,\nit could be decoded as <code>"AB"</code> (1 2) or <code>"L"</code> (12).\n</p>\n\n<p>\nThe number of ways decoding <code>"12"</code> is 2.\n</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Uber'],
  },
  {
    id: '92',
    name: 'Reverse Linked List II',
    acceptance: '31.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nReverse a linked list from position <i>m</i> to <i>n</i>. Do it in-place and in one-pass.\n</p>\n\n<p>\nFor example:<br>\nGiven <code>1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL</code>, <i>m</i> = 2 and <i>n</i> = 4,\n</p>\n<p>\nreturn <code>1-&gt;4-&gt;3-&gt;2-&gt;5-&gt;NULL</code>.\n</p>\n<p>\n<b>Note:</b><br>\nGiven <i>m</i>, <i>n</i> satisfy the following condition:<br>\n1 ≤ <i>m</i> ≤ <i>n</i> ≤ length of list.\n</p>\n          ',
    tags: [],
  },
  {
    id: '93',
    name: 'Restore IP Addresses',
    acceptance: '28.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a string containing only digits, restore it by returning all possible valid IP address combinations.</p>\n\n<p>\nFor example:<br>\nGiven <code>"25525511135"</code>,\n</p>\n<p>\nreturn <code>["255.255.11.135", "255.255.111.35"]</code>. (Order does not matter)\n</p>\n          ',
    tags: [],
  },
  {
    id: '94',
    name: 'Binary Tree Inorder Traversal',
    acceptance: '48.1%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a binary tree, return the <i>inorder</i> traversal of its nodes' values.</p>\n\n<p>\nFor example:<br>\nGiven binary tree <code>[1,null,2,3]</code>,<br>\n</p><pre>   1\n    \\\n     2\n    /\n   3\n</pre>\n<p></p>\n<p>\nreturn <code>[1,3,2]</code>.\n</p>\n\n<p><b>Note:</b> Recursive solution is trivial, could you do it iteratively?</p>\n          ",
    tags: ['Microsoft'],
  },
  {
    id: '95',
    name: 'Unique Binary Search Trees II',
    acceptance: '31.8%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given an integer <i>n</i>, generate all structurally unique <b>BST's</b> (binary search trees) that store values 1...<i>n</i>.</p>\n\n<p>\nFor example,<br>\nGiven <i>n</i> = 3, your program should return all 5 unique BST's shown below.\n\n</p><pre>   1         3     3      2      1\n    \\       /     /      / \\      \\\n     3     2     1      1   3      2\n    /     /       \\                 \\\n   2     1         2                 3\n</pre>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '96',
    name: 'Unique Binary Search Trees',
    acceptance: '41.5%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given <i>n</i>, how many structurally unique <b>BST's</b> (binary search trees) that store values 1...<i>n</i>?</p>\n\n<p>\nFor example,<br>\nGiven <i>n</i> = 3, there are a total of 5 unique BST's.\n\n</p><pre>   1         3     3      2      1\n    \\       /     /      / \\      \\\n     3     2     1      1   3      2\n    /     /       \\                 \\\n   2     1         2                 3\n</pre>\n<p></p>\n          ",
    tags: ['Snapchat'],
  },
  {
    id: '97',
    name: 'Interleaving String',
    acceptance: '24.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven <i>s1</i>, <i>s2</i>, <i>s3</i>, find whether <i>s3</i> is formed by the interleaving of <i>s1</i> and <i>s2</i>.\n</p>\n\n<p>\nFor example,<br>\nGiven:<br>\n<i>s1</i> = <code>"aabcc"</code>,<br>\n<i>s2</i> = <code>"dbbca"</code>,\n</p>\n<p>\nWhen <i>s3</i> = <code>"aadbbcbcac"</code>, return true.<br>\nWhen <i>s3</i> = <code>"aadbbbaccc"</code>, return false.\n</p>\n          ',
    tags: [],
  },
  {
    id: '98',
    name: 'Validate Binary Search Tree',
    acceptance: '23.8%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a binary tree, determine if it is a valid binary search tree (BST).\n</p>\n\n<p>\nAssume a BST is defined as follows:\n</p><ul>\n<li>The left subtree of a node contains only nodes with keys <b>less than</b> the node's key.</li>\n<li>The right subtree of a node contains only nodes with keys <b>greater than</b> the node's key.</li>\n<li>Both the left and right subtrees must also be binary search trees.</li>\n</ul>\n<p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre>    2\n   / \\\n  1   3\n</pre>\nBinary tree <code>[2,1,3]</code>, return true.\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>    1\n   / \\\n  2   3\n</pre>\nBinary tree <code>[1,2,3]</code>, return false.\n<p></p>\n          ",
    tags: ['Facebook', 'Microsoft', 'Amazon', 'Bloomberg'],
  },
  {
    id: '99',
    name: 'Recover Binary Search Tree',
    acceptance: '30.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nTwo elements of a binary search tree (BST) are swapped by mistake.</p>\n\n<p>Recover the tree without changing its structure.\n</p>\n\n<b>Note:</b><br>\nA solution using O(<i>n</i>) space is pretty straight forward. Could you devise a constant space solution?\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '100',
    name: 'Same Tree',
    acceptance: '47.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two binary trees, write a function to check if they are the same or not.\n</p>\n\n<p>Two binary trees are considered the same if they are structurally identical and the nodes have the same value.\n</p>\n\n<br>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b>     1         1\n          / \\       / \\\n         2   3     2   3\n\n        [1,2,3],   [1,2,3]\n\n<b>Output:</b> true\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b>     1         1\n          /           \\\n         2             2\n\n        [1,2],     [1,null,2]\n\n<b>Output:</b> false\n</pre>\n<p></p>\n\n<p><b>Example 3:</b>\n</p><pre><b>Input:</b>     1         1\n          / \\       / \\\n         2   1     1   2\n\n        [1,2,1],   [1,1,2]\n\n<b>Output:</b> false\n</pre>\n<p></p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '101',
    name: 'Symmetric Tree',
    acceptance: '39.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).</p>\n\n<p>\nFor example, this binary tree <code>[1,2,2,3,4,4,3]</code> is symmetric:\n</p><pre>    1\n   / \\\n  2   2\n / \\ / \\\n3  4 4  3\n</pre>\n<p></p>\n<p>\nBut the following <code>[1,2,2,null,3,null,3]</code>  is not:<br>\n</p><pre>    1\n   / \\\n  2   2\n   \\   \\\n   3    3\n</pre>\n<p></p>\n\n<p>\n<b>Note:</b><br>\nBonus points if you could solve it both recursively and iteratively.\n</p>\n          ',
    tags: ['Microsoft', 'Bloomberg', 'LinkedIn'],
  },
  {
    id: '102',
    name: 'Binary Tree Level Order Traversal',
    acceptance: '41.3%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a binary tree, return the <i>level order</i> traversal of its nodes' values. (ie, from left to right, level by level).</p>\n\n<p>\nFor example:<br>\nGiven binary tree <code>[3,9,20,null,null,15,7]</code>,<br>\n</p><pre>    3\n   / \\\n  9  20\n    /  \\\n   15   7\n</pre>\n<p></p>\n<p>\nreturn its level order traversal as:<br>\n</p><pre>[\n  [3],\n  [9,20],\n  [15,7]\n]\n</pre>\n<p></p>\n          ",
    tags: ['Facebook', 'Microsoft', 'Amazon', 'Bloomberg', 'LinkedIn', 'Apple'],
  },
  {
    id: '103',
    name: 'Binary Tree Zigzag Level Order Traversal',
    acceptance: '35.8%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a binary tree, return the <i>zigzag level order</i> traversal of its nodes' values. (ie, from left to right, then right to left for the next level and alternate between).</p>\n\n<p>\nFor example:<br>\nGiven binary tree <code>[3,9,20,null,null,15,7]</code>,<br>\n</p><pre>    3\n   / \\\n  9  20\n    /  \\\n   15   7\n</pre>\n<p></p>\n<p>\nreturn its zigzag level order traversal as:<br>\n</p><pre>[\n  [3],\n  [20,9],\n  [15,7]\n]\n</pre>\n<p></p>\n          ",
    tags: ['Microsoft', 'Bloomberg', 'LinkedIn'],
  },
  {
    id: '104',
    name: 'Maximum Depth of Binary Tree',
    acceptance: '53.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, find its maximum depth.</p>\n\n<p>The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.</p>\n          ',
    tags: ['Uber', 'LinkedIn', 'Apple', 'Yahoo'],
  },
  {
    id: '105',
    name: 'Construct Binary Tree from Preorder and Inorder Traversal',
    acceptance: '32.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given preorder and inorder traversal of a tree, construct the binary tree.</p>\n\n<p><b>Note:</b><br>\nYou may assume that duplicates do not exist in the tree.\n</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '106',
    name: 'Construct Binary Tree from Inorder and Postorder Traversal',
    acceptance: '32.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given inorder and postorder traversal of a tree, construct the binary tree.</p>\n\n<p><b>Note:</b><br>\nYou may assume that duplicates do not exist in the tree.\n</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '107',
    name: 'Binary Tree Level Order Traversal II',
    acceptance: '41.2%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given a binary tree, return the <i>bottom-up level order</i> traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).</p>\n\n<p>\nFor example:<br>\nGiven binary tree <code>[3,9,20,null,null,15,7]</code>,<br>\n</p><pre>    3\n   / \\\n  9  20\n    /  \\\n   15   7\n</pre>\n<p></p>\n<p>\nreturn its bottom-up level order traversal as:<br>\n</p><pre>[\n  [15,7],\n  [9,20],\n  [3]\n]\n</pre>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '108',
    name: 'Convert Sorted Array to Binary Search Tree',
    acceptance: '43.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array where elements are sorted in ascending order, convert it to a height balanced BST.</p>\n\n<p>For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of <i>every</i> node never differ by more than 1.</p>\n\n<br>\n\n<p>\n<b>Example:</b>\n</p><pre>Given the sorted array: [-10,-3,0,5,9],\n\nOne possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:\n\n      0\n     / \\\n   -3   9\n   /   /\n -10  5\n</pre>\n<p></p>\n          ',
    tags: ['Airbnb'],
  },
  {
    id: '109',
    name: 'Convert Sorted List to Binary Search Tree',
    acceptance: '34.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a singly linked list where elements are sorted in ascending order, convert it to a height balanced BST.</p>\n\n<p>For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of <i>every</i> node never differ by more than 1.</p>\n\n<br>\n\n<p>\n<b>Example:</b>\n</p><pre>Given the sorted linked list: [-10,-3,0,5,9],\n\nOne possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:\n\n      0\n     / \\\n   -3   9\n   /   /\n -10  5\n</pre>\n<p></p>\n          ',
    tags: ['Zenefits'],
  },
  {
    id: '110',
    name: 'Balanced Binary Tree',
    acceptance: '38.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, determine if it is height-balanced.\n</p>\n\n<p>\nFor this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of <i>every</i> node never differ by more than 1.\n</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '111',
    name: 'Minimum Depth of Binary Tree',
    acceptance: '33.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, find its minimum depth.</p>\n\n<p>The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.</p>\n          ',
    tags: [],
  },
  {
    id: '112',
    name: 'Path Sum',
    acceptance: '34.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.\n</p>\n\nFor example:<br>\nGiven the below binary tree and <code>sum = 22</code>,\n<pre>              5\n             / \\\n            4   8\n           /   / \\\n          11  13  4\n         /  \\      \\\n        7    2      1\n</pre>\n\n<p>\nreturn true, as there exist a root-to-leaf path <code>5-&gt;4-&gt;11-&gt;2</code> which sum is 22.</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '113',
    name: 'Path Sum II',
    acceptance: '34.8%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a binary tree and a sum, find all root-to-leaf paths where each path's sum equals the given sum.\n</p>\n\nFor example:<br>\nGiven the below binary tree and <code>sum = 22</code>,\n<pre>              5\n             / \\\n            4   8\n           /   / \\\n          11  13  4\n         /  \\    / \\\n        7    2  5   1\n</pre>\n\n<p>\nreturn<br>\n</p><pre>[\n   [5,4,11,2],\n   [5,8,4,5]\n]\n</pre>\n<p></p>\n          ",
    tags: ['Bloomberg'],
  },
  {
    id: '114',
    name: 'Flatten Binary Tree to Linked List',
    acceptance: '35.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree, flatten it to a linked list in-place.\n</p>\n\n<p>\nFor example,<br>\nGiven\n</p><pre>         1\n        / \\\n       2   5\n      / \\   \\\n     3   4   6\n</pre>\n<p></p>\n\nThe flattened tree should look like:<br>\n<pre>   1\n    \\\n     2\n      \\\n       3\n        \\\n         4\n          \\\n           5\n            \\\n             6\n</pre>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show hints.</a></p>\n\n<div class="spoilers"><b>Hints:</b>\n<p>If you notice carefully in the flattened tree, each node\'s right child points to the next node of a pre-order traversal.</p>\n</div>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '115',
    name: 'Distinct Subsequences',
    acceptance: '31.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string <b>S</b> and a string <b>T</b>, count the number of distinct subsequences of <b>S</b> which equals <b>T</b>.\n</p>\n\n<p>\nA subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, <code>"ACE"</code> is a subsequence of <code>"ABCDE"</code> while <code>"AEC"</code> is not).\n</p>\n\n<p>\nHere is an example:<br>\n<b>S</b> = <code>"rabbbit"</code>, <b>T</b> = <code>"rabbit"</code>\n</p>\n<p>\nReturn <code>3</code>.\n</p>\n          ',
    tags: [],
  },
  {
    id: '116',
    name: 'Populating Next Right Pointers in Each Node',
    acceptance: '36.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree\n</p><pre>    struct TreeLinkNode {\n      TreeLinkNode *left;\n      TreeLinkNode *right;\n      TreeLinkNode *next;\n    }\n</pre>\n<p></p>\n\n<p>Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to <code>NULL</code>.</p>\n\n<p>Initially, all next pointers are set to <code>NULL</code>.</p>\n\n<p>\n<b>Note:</b>\n</p><ul>\n<li>You may only use constant extra space.</li>\n<li>You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).</li>\n</ul>\n<p></p>\n\n<p>\nFor example,<br>\nGiven the following perfect binary tree,<br>\n</p><pre>         1\n       /  \\\n      2    3\n     / \\  / \\\n    4  5  6  7\n</pre>\n<p></p>\n<p>\nAfter calling your function, the tree should look like:<br>\n</p><pre>         1 -&gt; NULL\n       /  \\\n      2 -&gt; 3 -&gt; NULL\n     / \\  / \\\n    4-&gt;5-&gt;6-&gt;7 -&gt; NULL\n</pre>\n<p></p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '117',
    name: 'Populating Next Right Pointers in Each Node II',
    acceptance: '33.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Follow up for problem "<i>Populating Next Right Pointers in Each Node</i>".</p>\n<p>What if the given tree could be any binary tree? Would your previous solution still work?</p>\n<p>\n<b>Note:</b>\n</p><ul><li>You may only use constant extra space.</li></ul>\n<p></p>\n<p>\nFor example,<br>\nGiven the following binary tree,<br>\n</p><pre>         1\n       /  \\\n      2    3\n     / \\    \\\n    4   5    7\n</pre>\n<p></p>\n<p>\nAfter calling your function, the tree should look like:<br>\n</p><pre>         1 -&gt; NULL\n       /  \\\n      2 -&gt; 3 -&gt; NULL\n     / \\    \\\n    4-&gt; 5 -&gt; 7 -&gt; NULL\n</pre>\n<p></p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Bloomberg'],
  },
  {
    id: '118',
    name: "Pascal's Triangle",
    acceptance: '39.4%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given <i>numRows</i>, generate the first <i>numRows</i> of Pascal's triangle.</p>\n\n<p>\nFor example, given <i>numRows</i> = 5,<br>\nReturn\n</p><pre>[\n     [1],\n    [1,1],\n   [1,2,1],\n  [1,3,3,1],\n [1,4,6,4,1]\n]\n</pre>\n<p></p>\n          ",
    tags: ['Twitter', 'Apple'],
  },
  {
    id: '119',
    name: "Pascal's Triangle II",
    acceptance: '37.6%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given an index <i>k</i>, return the <i>k</i><sup>th</sup> row of the Pascal's triangle.</p>\n\n<p>\nFor example, given <i>k</i> = 3,<br>\nReturn <code>[1,3,3,1]</code>.\n</p>\n\n<p>\n<b>Note:</b><br>\nCould you optimize your algorithm to use only <i>O</i>(<i>k</i>) extra space?\n</p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '120',
    name: 'Triangle',
    acceptance: '34.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.</p>\n\n<p>\nFor example, given the following triangle<br>\n</p><pre>[\n     [<font color="red">2</font>],\n    [<font color="red">3</font>,4],\n   [6,<font color="red">5</font>,7],\n  [4,<font color="red">1</font>,8,3]\n]\n</pre>\n<p></p>\n<p>\nThe minimum path sum from top to bottom is <code>11</code> (i.e., <font color="red">2</font> + <font color="red">3</font> + <font color="red">5</font> + <font color="red">1</font> = 11).\n</p>\n\n<p>\n<b>Note:</b><br>\nBonus point if you are able to do this using only <i>O</i>(<i>n</i>) extra space, where <i>n</i> is the total number of rows in the triangle.\n</p>\n          ',
    tags: [],
  },
  {
    id: '121',
    name: 'Best Time to Buy and Sell Stock',
    acceptance: '42.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Say you have an array for which the <i>i</i><sup>th</sup> element is the price of a given stock on day <i>i</i>.</p>\n\n<p>If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>Input: [7, 1, 5, 3, 6, 4]\nOutput: 5\n\nmax. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger than buying price)\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>Input: [7, 6, 4, 3, 1]\nOutput: 0\n\nIn this case, no transaction is done, i.e. max profit = 0.\n</pre>\n<p></p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Amazon', 'Bloomberg', 'Uber'],
  },
  {
    id: '122',
    name: 'Best Time to Buy and Sell Stock II',
    acceptance: '47.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Say you have an array for which the <i>i</i><sup>th</sup> element is the price of a given stock on day <i>i</i>.</p>\n\n<p>Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '123',
    name: 'Best Time to Buy and Sell Stock III',
    acceptance: '29.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Say you have an array for which the <i>i</i><sup>th</sup> element is the price of a given stock on day <i>i</i>.</p>\n\n<p>Design an algorithm to find the maximum profit. You may complete at most <i>two</i> transactions.</p>\n\n<p><b>Note:</b><br>\nYou may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).</p>\n          ',
    tags: [],
  },
  {
    id: '124',
    name: 'Binary Tree Maximum Path Sum',
    acceptance: '26.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree, find the maximum path sum.\n</p>\n\n<p>For this problem, a path is defined as any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The path must contain <b>at least one node</b> and does not need to go through the root.</p>\n\n<p>\nFor example:<br>\nGiven the below binary tree,\n</p><pre>       1\n      / \\\n     2   3\n</pre>\n<p></p>\n<p>\nReturn <code>6</code>.\n</p>\n          ',
    tags: ['Microsoft', 'Baidu'],
  },
  {
    id: '125',
    name: 'Valid Palindrome',
    acceptance: '26.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.\n</p>\n\n<p>\nFor example,<br>\n<code>"A man, a plan, a canal: Panama"</code> is a palindrome.<br>\n<code>"race a car"</code> is <i>not</i> a palindrome.\n</p>\n\n<p>\n<b>Note:</b><br>\nHave you consider that the string might be empty? This is a good question to ask during an interview.</p>\n<p>\nFor the purpose of this problem, we define empty string as valid palindrome.\n</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Uber', 'Zenefits'],
  },
  {
    id: '126',
    name: 'Word Ladder II',
    acceptance: '14.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two words (<i>beginWord</i> and <i>endWord</i>), and a dictionary\'s word list, find all shortest transformation sequence(s) from <i>beginWord</i> to <i>endWord</i>, such that:\n</p>\n<ol>\n<li>Only one letter can be changed at a time</li>\n<li>Each transformed word must exist in the word list. Note that <i>beginWord</i> is <i>not</i> a transformed word.</li>\n</ol>\n\n<p>\nFor example,\n</p>\n<p>\nGiven:<br>\n<i>beginWord</i> = <code>"hit"</code><br>\n<i>endWord</i> = <code>"cog"</code><br>\n<i>wordList</i> = <code>["hot","dot","dog","lot","log","cog"]</code><br>\n</p>\n<p>\nReturn<br>\n</p><pre>  [\n    ["hit","hot","dot","dog","cog"],\n    ["hit","hot","lot","log","cog"]\n  ]\n</pre>\n<p></p>\n\n<p>\n<b>Note:</b><br>\n</p><ul>\n<li>Return an empty list if there is no such transformation sequence.</li>\n<li>All words have the same length.</li>\n<li>All words contain only lowercase alphabetic characters.</li>\n<li>You may assume no duplicates in the word list.</li>\n<li>You may assume <i>beginWord</i> and <i>endWord</i> are non-empty and are not the same.</li>\n</ul>\n<p></p>\n\n<p>\n<b><font color="red">UPDATE (2017/1/20):</font></b><br>\nThe <i>wordList</i> parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.\n</p>\n          ',
    tags: ['Amazon', 'Yelp'],
  },
  {
    id: '127',
    name: 'Word Ladder',
    acceptance: '19.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two words (<i>beginWord</i> and <i>endWord</i>), and a dictionary\'s word list, find the length of shortest transformation sequence from <i>beginWord</i> to <i>endWord</i>, such that:\n</p>\n<ol>\n<li>Only one letter can be changed at a time.</li>\n<li>Each transformed word must exist in the word list. Note that <i>beginWord</i> is <i>not</i> a transformed word.</li>\n</ol>\n\n<p>\nFor example,\n</p>\n<p>\nGiven:<br>\n<i>beginWord</i> = <code>"hit"</code><br>\n<i>endWord</i> = <code>"cog"</code><br>\n<i>wordList</i> = <code>["hot","dot","dog","lot","log","cog"]</code><br>\n</p>\n<p>\nAs one shortest transformation is <code>"hit" -&gt; "hot" -&gt; "dot" -&gt; "dog" -&gt; "cog"</code>,<br>\nreturn its length <code>5</code>.\n</p>\n\n<p>\n<b>Note:</b><br>\n</p><ul>\n<li>Return 0 if there is no such transformation sequence.</li>\n<li>All words have the same length.</li>\n<li>All words contain only lowercase alphabetic characters.</li>\n<li>You may assume no duplicates in the word list.</li>\n<li>You may assume <i>beginWord</i> and <i>endWord</i> are non-empty and are not the same.</li>\n</ul>\n<p></p>\n\n<p>\n<b><font color="red">UPDATE (2017/1/20):</font></b><br>\nThe <i>wordList</i> parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.\n</p>\n          ',
    tags: ['Facebook', 'Amazon', 'LinkedIn', 'Snapchat', 'Yelp'],
  },
  {
    id: '128',
    name: 'Longest Consecutive Sequence',
    acceptance: '37.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an unsorted array of integers, find the length of the longest consecutive elements sequence.\n</p>\n<p>\nFor example,<br>\nGiven <code>[100, 4, 200, 1, 3, 2]</code>,<br>\nThe longest consecutive elements sequence is <code>[1, 2, 3, 4]</code>. Return its length: <code>4</code>.\n</p>\n<p>\nYour algorithm should run in O(<i>n</i>) complexity.\n</p>\n          ',
    tags: ['Google', 'Facebook'],
  },
  {
    id: '129',
    name: 'Sum Root to Leaf Numbers',
    acceptance: '37.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree containing digits from <code>0-9</code> only, each root-to-leaf path could represent a number.</p>\n<p>An example is the root-to-leaf path <code>1-&gt;2-&gt;3</code> which represents the number <code>123</code>.</p>\n\n<p>Find the total sum of all root-to-leaf numbers.</p>\n\n<p>For example,\n</p><pre>    1\n   / \\\n  2   3\n</pre>\n<p></p>\n<p>\nThe root-to-leaf path <code>1-&gt;2</code> represents the number <code>12</code>.<br>\nThe root-to-leaf path <code>1-&gt;3</code> represents the number <code>13</code>.\n</p>\n<p>\nReturn the sum = 12 + 13 = <code>25</code>.\n</p>\n          ',
    tags: [],
  },
  {
    id: '130',
    name: 'Surrounded Regions',
    acceptance: '19.1%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a 2D board containing <code>'X'</code> and <code>'O'</code> (the <b>letter</b> O), capture all regions surrounded by <code>'X'</code>.</p>\n\n<p>A region is captured by flipping all <code>'O'</code>s into <code>'X'</code>s in that surrounded region.\n</p>\n\n<p>\nFor example,<br>\n</p><pre>X X X X\nX O O X\nX X O X\nX O X X\n</pre>\n<p></p>\n\n<p>\nAfter running your function, the board should be:\n</p><pre>X X X X\nX X X X\nX X X X\nX O X X\n</pre>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '131',
    name: 'Palindrome Partitioning',
    acceptance: '34.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string <i>s</i>, partition <i>s</i> such that every substring of the partition is a palindrome.\n</p>\n<p>\nReturn all possible palindrome partitioning of <i>s</i>.\n</p>\n<p>\nFor example, given <i>s</i> = <code>"aab"</code>,<br>\n\nReturn\n</p><pre>[\n  ["aa","b"],\n  ["a","a","b"]\n]\n</pre>\n<p></p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '132',
    name: 'Palindrome Partitioning II',
    acceptance: '24.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string <i>s</i>, partition <i>s</i> such that every substring of the partition is a palindrome.\n</p>\n<p>\nReturn the minimum cuts needed for a palindrome partitioning of <i>s</i>.\n</p>\n<p>\nFor example, given <i>s</i> = <code>"aab"</code>,<br>\nReturn <code>1</code> since the palindrome partitioning <code>["aa","b"]</code> could be produced using 1 cut.\n</p>\n          ',
    tags: [],
  },
  {
    id: '133',
    name: 'Clone Graph',
    acceptance: '25.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nClone an undirected graph. Each node in the graph contains a <code>label</code> and a list of its <code>neighbors</code>.\n</p>\n\n<div>\n<br>\n<b>OJ\'s undirected graph serialization:</b>\n\n<p>\nNodes are labeled uniquely.\n</p>\n\nWe use <code>#</code> as a separator for each node, and <code>,</code> as a separator for node label and each neighbor of the node.\n<p></p>\n\n\n<p>\nAs an example, consider the serialized graph <code><font color="red">{<font color="black">0</font>,1,2#</font><font color="blue"><font color="black">1</font>,2#</font><font color="green"><font color="black">2</font>,2}</font></code>.\n</p>\n\n<p>\nThe graph has a total of three nodes, and therefore contains three parts as separated by <code>#</code>.\n</p><ol>\n<li>First node is labeled as <code><font color="black">0</font></code>. Connect node <code><font color="black">0</font></code> to both nodes <code><font color="red">1</font></code> and <code><font color="red">2</font></code>.</li>\n<li>Second node is labeled as <code><font color="black">1</font></code>. Connect node <code><font color="black">1</font></code> to node <code><font color="blue">2</font></code>.</li>\n<li>Third node is labeled as <code><font color="black">2</font></code>. Connect node <code><font color="black">2</font></code> to node <code><font color="green">2</font></code> (itself), thus forming a self-cycle.</li>\n</ol>\n<p></p>\n\n<p>\nVisually, the graph looks like the following:\n</p><pre>       1\n      / \\\n     /   \\\n    0 --- 2\n         / \\\n         \\_/\n</pre>\n<p></p>\n\n</div>\n          ',
    tags: ['Google', 'Facebook', 'Uber', 'Pocket Gems'],
  },
  {
    id: '134',
    name: 'Gas Station',
    acceptance: '29.7%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nThere are <i>N</i> gas stations along a circular route, where the amount of gas at station <i>i</i> is <code>gas[i]</code>.\n</p>\n\n<p>\nYou have a car with an unlimited gas tank and it costs <code>cost[i]</code> of gas to travel from station <i>i</i> to its next station (<i>i</i>+1). You begin the journey with an empty tank at one of the gas stations.\n</p>\n\n<p>\nReturn the starting gas station's index if you can travel around the circuit once, otherwise return -1.\n</p>\n\n<p>\n<b>Note:</b><br>\nThe solution is guaranteed to be unique.\n</p>\n          ",
    tags: [],
  },
  {
    id: '135',
    name: 'Candy',
    acceptance: '25.0%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThere are <i>N</i> children standing in a line. Each child is assigned a rating value. \n</p>\n<p>\nYou are giving candies to these children subjected to the following requirements:\n</p>\n<ul>\n<li>Each child must have at least one candy.</li>\n<li>Children with a higher rating get more candies than their neighbors.</li>\n</ul>\n<p>\nWhat is the minimum candies you must give?\n</p>\n          ',
    tags: [],
  },
  {
    id: '136',
    name: 'Single Number',
    acceptance: '55.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array of integers, every element appears <i>twice</i> except for one. Find that single one.</p>\n\n<p>\n<b>Note:</b><br>\nYour algorithm should have a linear runtime complexity. Could you implement it without using extra memory?\n</p>\n          ',
    tags: ['Airbnb', 'Palantir'],
  },
  {
    id: '137',
    name: 'Single Number II',
    acceptance: '42.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of integers, every element appears <i>three</i> times except for one, which appears exactly once. Find that single one.\n</p>\n\n<p>\n<b>Note:</b><br>\nYour algorithm should have a linear runtime complexity. Could you implement it without using extra memory?\n</p>\n          ',
    tags: [],
  },
  {
    id: '138',
    name: 'Copy List with Random Pointer',
    acceptance: '26.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nA linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.\n</p>\n\n<p>\nReturn a deep copy of the list.\n</p>\n          ',
    tags: ['Microsoft', 'Amazon', 'Bloomberg', 'Uber'],
  },
  {
    id: '139',
    name: 'Word Break',
    acceptance: '30.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a <b>non-empty</b> string <i>s</i> and a dictionary <i>wordDict</i> containing a list of <b>non-empty</b> words, determine if <i>s</i> can be segmented into a space-separated sequence of one or more dictionary words. You may assume the dictionary does not contain duplicate words.\n</p>\n\n<p>For example, given<br>\n<i>s</i> = <code>"leetcode"</code>,<br>\n<i>dict</i> = <code>["leet", "code"]</code>.\n</p>\n\n<p>\nReturn true because <code>"leetcode"</code> can be segmented as <code>"leet code"</code>.\n</p>\n\n<p>\n<b><font color="red">UPDATE (2017/1/4):</font></b><br>\nThe <i>wordDict</i> parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.\n</p>\n          ',
    tags: ['Google', 'Facebook', 'Amazon', 'Bloomberg', 'Uber', 'Yahoo', 'Pocket Gems', 'Square', 'Coupang'],
  },
  {
    id: '140',
    name: 'Word Break II',
    acceptance: '24.0%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a <b>non-empty</b> string <i>s</i> and a dictionary <i>wordDict</i> containing a list of <b>non-empty</b> words, add spaces in <i>s</i> to construct a sentence where each word is a valid dictionary word. You may assume the dictionary does not contain duplicate words.\n</p>\n\n<p>\nReturn all such possible sentences.\n</p>\n\n<p>\nFor example, given<br>\n<i>s</i> = <code>"catsanddog"</code>,<br>\n<i>dict</i> = <code>["cat", "cats", "and", "sand", "dog"]</code>.\n</p>\n\n<p>\nA solution is <code>["cats and dog", "cat sand dog"]</code>.\n</p>\n\n<p>\n<b><font color="red">UPDATE (2017/1/4):</font></b><br>\nThe <i>wordDict</i> parameter had been changed to a list of strings (instead of a set of strings). Please reload the code definition to get the latest changes.\n</p>\n          ',
    tags: ['Google', 'Uber', 'Twitter', 'Snapchat', 'Dropbox'],
  },
  {
    id: '141',
    name: 'Linked List Cycle',
    acceptance: '35.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a linked list, determine if it has a cycle in it.\n</p>\n\n<p>\nFollow up:<br>\nCan you solve it without using extra space?\n</p>\n          ',
    tags: ['Microsoft', 'Amazon', 'Bloomberg', 'Yahoo'],
  },
  {
    id: '142',
    name: 'Linked List Cycle II',
    acceptance: '30.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a linked list, return the node where the cycle begins. If there is no cycle, return <code>null</code>.\n</p>\n\n<p>\n<b>Note:</b> Do not modify the linked list.</p>\n\n<p>\n<b>Follow up</b>:<br>\nCan you solve it without using extra space?\n</p>\n          ',
    tags: [],
  },
  {
    id: '143',
    name: 'Reorder List',
    acceptance: '26.2%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a singly linked list <i>L</i>: <i>L</i><sub>0</sub>→<i>L</i><sub>1</sub>→…→<i>L</i><sub><i>n</i>-1</sub>→<i>L</i><sub>n</sub>,<br>\nreorder it to: <i>L</i><sub>0</sub>→<i>L</i><sub><i>n</i></sub>→<i>L</i><sub>1</sub>→<i>L</i><sub><i>n</i>-1</sub>→<i>L</i><sub>2</sub>→<i>L</i><sub><i>n</i>-2</sub>→…\n</p>\n\n<p>You must do this in-place without altering the nodes' values.</p>\n\n<p>\nFor example,<br>\nGiven <code>{1,2,3,4}</code>, reorder it to <code>{1,4,2,3}</code>.\n</p>\n          ",
    tags: [],
  },
  {
    id: '144',
    name: 'Binary Tree Preorder Traversal',
    acceptance: '45.9%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a binary tree, return the <i>preorder</i> traversal of its nodes' values.</p>\n\n<p>\nFor example:<br>\nGiven binary tree <code>[1,null,2,3]</code>,<br>\n</p><pre>   1\n    \\\n     2\n    /\n   3\n</pre>\n<p></p>\n<p>\nreturn <code>[1,2,3]</code>.\n</p>\n\n<p><b>Note:</b> Recursive solution is trivial, could you do it iteratively?</p>\n          ",
    tags: [],
  },
  {
    id: '145',
    name: 'Binary Tree Postorder Traversal',
    acceptance: '41.0%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>Given a binary tree, return the <i>postorder</i> traversal of its nodes' values.</p>\n\n<p>\nFor example:<br>\nGiven binary tree <code>{1,#,2,3}</code>,<br>\n</p><pre>   1\n    \\\n     2\n    /\n   3\n</pre>\n<p></p>\n<p>\nreturn <code>[3,2,1]</code>.\n</p>\n\n<p><b>Note:</b> Recursive solution is trivial, could you do it iteratively?</p>\n          ",
    tags: [],
  },
  {
    id: '146',
    name: 'LRU Cache',
    acceptance: '18.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nDesign and implement a data structure for <a href="https://en.wikipedia.org/wiki/Cache_replacement_policies#LRU" target="_blank">Least Recently Used (LRU) cache</a>. It should support the following operations: <code>get</code> and <code>put</code>.\n</p>\n\n<p>\n<code>get(key)</code> - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.<br>\n<code>put(key, value)</code> - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.\n</p>\n\n<p><b>Follow up:</b><br>\nCould you do both operations in <b>O(1)</b> time complexity?</p>\n\n<p><b>Example:</b>\n</p><pre>LRUCache cache = new LRUCache( 2 /* capacity */ );\n\ncache.put(1, 1);\ncache.put(2, 2);\ncache.get(1);       // returns 1\ncache.put(3, 3);    // evicts key 2\ncache.get(2);       // returns -1 (not found)\ncache.put(4, 4);    // evicts key 1\ncache.get(1);       // returns -1 (not found)\ncache.get(3);       // returns 3\ncache.get(4);       // returns 4\n</pre>\n<p></p>\n          ',
    tags: [
      'Google',
      'Facebook',
      'Microsoft',
      'Amazon',
      'Bloomberg',
      'Uber',
      'Twitter',
      'Snapchat',
      'Zenefits',
      'Yahoo',
      'Palantir',
    ],
  },
  {
    id: '147',
    name: 'Insertion Sort List',
    acceptance: '33.5%',
    difficulty: 'Medium',
    questionHtml: '\n            <br>\n            <p>Sort a linked list using insertion sort.</p>\n          ',
    tags: [],
  },
  {
    id: '148',
    name: 'Sort List',
    acceptance: '29.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Sort a linked list in <i>O</i>(<i>n</i> log <i>n</i>) time using constant space complexity.</p>\n          ',
    tags: [],
  },
  {
    id: '149',
    name: 'Max Points on a Line',
    acceptance: '15.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given <i>n</i> points on a 2D plane, find the maximum number of points that lie on the same straight line.</p>\n          ',
    tags: ['LinkedIn', 'Twitter', 'Apple'],
  },
  {
    id: '150',
    name: 'Evaluate Reverse Polish Notation',
    acceptance: '27.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nEvaluate the value of an arithmetic expression in <a href="http://en.wikipedia.org/wiki/Reverse_Polish_notation">Reverse Polish Notation</a>.\n</p>\n\n<p>\nValid operators are <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>. Each operand may be an integer or another expression.\n</p>\n\n<p>\nSome examples:<br>\n</p><pre>  ["2", "1", "+", "3", "*"] -&gt; ((2 + 1) * 3) -&gt; 9\n  ["4", "13", "5", "/", "+"] -&gt; (4 + (13 / 5)) -&gt; 6\n</pre>\n<p></p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '151',
    name: 'Reverse Words in a String',
    acceptance: '15.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an input string, reverse the string word by word.\n</p>\n\n<p>\nFor example,<br>\nGiven s = "<code>the sky is blue</code>",<br>\nreturn "<code>blue is sky the</code>".\n</p>\n\n<p>\n<b><font color="red">Update (2015-02-12):</font></b><br>\nFor C programmers: Try to solve it <i>in-place</i> in <i>O</i>(1) space.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show clarification.</a></p>\n\n<div class="spoilers"><b>Clarification:</b>\n\n<p>\n</p><ul>\n<li>What constitutes a word?<br>\nA sequence of non-space characters constitutes a word.</li>\n<li>Could the input string contain leading or trailing spaces?<br>\nYes. However, your reversed string should not contain leading or trailing spaces.</li>\n<li>How about multiple spaces between two words?<br>\nReduce them to a single space in the reversed string.</li>\n</ul>\n<p></p>\n</div>\n          ',
    tags: ['Microsoft', 'Bloomberg', 'Apple', 'Snapchat', 'Yelp'],
  },
  {
    id: '152',
    name: 'Maximum Product Subarray',
    acceptance: '26.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nFind the contiguous subarray within an array (containing at least one number) which has the largest product.\n</p>\n\n<p>\nFor example, given the array <code>[2,3,-2,4]</code>,<br>\nthe contiguous subarray <code>[2,3]</code> has the largest product = <code>6</code>.\n</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '153',
    name: 'Find Minimum in Rotated Sorted Array',
    acceptance: '40.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.</p>\n\n<p>(i.e., <code>0 1 2 4 5 6 7</code> might become <code>4 5 6 7 0 1 2</code>).</p>\n\n<p>Find the minimum element.</p>\n\n<p>You may assume no duplicate exists in the array.</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '154',
    name: 'Find Minimum in Rotated Sorted Array II',
    acceptance: '37.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <blockquote>\n<p><i>Follow up</i> for "Find Minimum in Rotated Sorted Array":<br>\nWhat if <i>duplicates</i> are allowed?</p>\n\n<p>Would this affect the run-time complexity? How and why?</p>\n</blockquote>\n\n<p>Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.</p>\n\n<p>(i.e., <code>0 1 2 4 5 6 7</code> might become <code>4 5 6 7 0 1 2</code>).</p>\n\n<p>Find the minimum element.</p>\n\n<p>The array may contain duplicates.</p>\n          ',
    tags: [],
  },
  {
    id: '155',
    name: 'Min Stack',
    acceptance: '30.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nDesign a stack that supports push, pop, top, and retrieving the minimum element in constant time.\n</p><ul>\n<li>\npush(x) -- Push element x onto stack.\n</li>\n<li>\npop() -- Removes the element on top of the stack.\n</li>\n<li>\ntop() -- Get the top element.\n</li>\n<li>\ngetMin() -- Retrieve the minimum element in the stack.\n</li>\n</ul>\n<p></p>\n\n<p><b>Example:</b><br>\n</p><pre>MinStack minStack = new MinStack();\nminStack.push(-2);\nminStack.push(0);\nminStack.push(-3);\nminStack.getMin();   --&gt; Returns -3.\nminStack.pop();\nminStack.top();      --&gt; Returns 0.\nminStack.getMin();   --&gt; Returns -2.\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Amazon', 'Bloomberg', 'Uber', 'Snapchat', 'Zenefits'],
  },
  {
    id: '156',
    name: 'Binary Tree Upside Down ',
    acceptance: '45.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree where all the right nodes are either leaf nodes with a sibling (a left node that shares the same parent node) or empty, flip it upside down and turn it into a tree where the original right nodes turned into left leaf nodes. Return the new root.\n</p>\n\nFor example:<br>\nGiven a binary tree <code>{1,2,3,4,5}</code>,<br>\n<pre>    1\n   / \\\n  2   3\n / \\\n4   5\n</pre>\n<p></p>\n<p>\nreturn the root of the binary tree <code>[4,5,2,#,#,3,1]</code>.<br>\n</p><pre>   4\n  / \\\n 5   2\n    / \\\n   3   1  \n</pre>\n<p></p>\n\n<p class="showspoilers">confused what <code>"{1,#,2,3}"</code> means? <a href="#" onclick="showSpoilers(this); return false;">&gt; read more on how binary tree is serialized on OJ.</a></p>\n\n<div class="spoilers"><br><b>OJ\'s Binary Tree Serialization:</b>\n<p>\nThe serialization of a binary tree follows a level order traversal, where \'#\' signifies a path terminator where no node exists below.\n</p>\n<p>\nHere\'s an example:<br>\n</p><pre>   1\n  / \\\n 2   3\n    /\n   4\n    \\\n     5\n</pre>\nThe above binary tree is serialized as <code>"{1,2,3,#,#,4,#,#,5}"</code>. \n<p></p>\n</div>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '157',
    name: 'Read N Characters Given Read4 ',
    acceptance: '29.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nThe API: <code>int read4(char *buf)</code> reads 4 characters at a time from a file.\n</p>\n\n<p>\nThe return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.\n</p>\n\n<p>\nBy using the <code>read4</code> API, implement the function <code>int read(char *buf, int n)</code> that reads <i>n</i> characters from the file.\n</p>\n\n<p>\n<b>Note:</b><br>\nThe <code>read</code> function will only be called once for each test case.\n</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '158',
    name: 'Read N Characters Given Read4 II - Call multiple times ',
    acceptance: '24.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThe API: <code>int read4(char *buf)</code> reads 4 characters at a time from a file.\n</p>\n\n<p>\nThe return value is the actual number of characters read. For example, it returns 3 if there is only 3 characters left in the file.\n</p>\n\n<p>\nBy using the <code>read4</code> API, implement the function <code>int read(char *buf, int n)</code> that reads <i>n</i> characters from the file.\n</p>\n\n<p>\n<b>Note:</b><br>\nThe <code>read</code> function may be called multiple times.\n</p>\n          ',
    tags: ['Google', 'Facebook', 'Bloomberg'],
  },
  {
    id: '159',
    name: 'Longest Substring with At Most Two Distinct Characters ',
    acceptance: '42.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string, find the length of the longest substring T that contains at most 2 distinct characters.\n</p>\n\n<p>\nFor example,\n\nGiven s = <code>“eceba”</code>,\n</p>\n\n<p>\nT is "ece" which its length is 3.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '160',
    name: 'Intersection of Two Linked Lists',
    acceptance: '30.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Write a program to find the node at which the intersection of two singly linked lists begins.</p>\n<br>\n<p>For example, the following two linked lists: </p>\n<pre>A:          a1 → a2\n                   ↘\n                     c1 → c2 → c3\n                   ↗            \nB:     b1 → b2 → b3\n</pre>\n<p>begin to intersect at node c1.</p>\n<br>\n<p><b>Notes:</b>\n</p><ul>\n<li>If the two linked lists have no intersection at all, return <code>null</code>.</li>\n<li>The linked lists must retain their original structure after the function returns. </li>\n<li>You may assume there are no cycles anywhere in the entire linked structure.</li>\n<li>Your code should preferably run in O(n) time and use only O(1) memory.</li>\n</ul>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/stellari">@stellari</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft', 'Amazon', 'Bloomberg', 'Airbnb'],
  },
  {
    id: '161',
    name: 'One Edit Distance ',
    acceptance: '31.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given two strings S and T, determine if they are both one edit distance apart.</p>\n          ',
    tags: ['Facebook', 'Uber', 'Twitter', 'Snapchat'],
  },
  {
    id: '162',
    name: 'Find Peak Element',
    acceptance: '38.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>A peak element is an element that is greater than its neighbors.</p>\n\n<p>Given an input array where <code>num[i] ≠ num[i+1]</code>, find a peak element and return its index.</p>\n\n<p>The array may contain multiple peaks, in that case return the index to any one of the peaks is fine.</p>\n\n<p>You may imagine that <code>num[-1] = num[n] = -∞</code>.</p>\n\n<p>For example, in array <code>[1, 2, 3, 1]</code>, 3 is a peak element and your function should return the index number 2.</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show spoilers.</a></p>\n\n<div class="spoilers"><b>Note:</b>\n<p>Your solution should be in logarithmic complexity.</p>\n</div>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Microsoft'],
  },
  {
    id: '163',
    name: 'Missing Ranges ',
    acceptance: '23.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a sorted integer array where <b>the range of elements are in the inclusive range [<i>lower</i>, <i>upper</i>]</b>, return its missing ranges.</p>\n\n<p>\nFor example, given <code>[0, 1, 3, 50, 75]</code>, <i>lower</i> = 0 and <i>upper</i> = 99, return <code>["2", "4-&gt;49", "51-&gt;74", "76-&gt;99"].</code>\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '164',
    name: 'Maximum Gap',
    acceptance: '29.8%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given an unsorted array, find the maximum difference between the successive elements in its sorted form.</p>\n\n<p>Try to solve it in linear time/space.</p>\n\n<p>Return 0 if the array contains less than 2 elements.</p>\n\n<p>You may assume all elements in the array are non-negative integers and fit in the 32-bit signed integer range.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/porker2008">@porker2008</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '165',
    name: 'Compare Version Numbers',
    acceptance: '20.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Compare two version numbers <i>version1</i> and <i>version2</i>.<br>\nIf <i>version1</i> &gt; <i>version2</i> return 1, if <i>version1</i> &lt; <i>version2</i> return -1, otherwise return 0.</p>\n\n<p>You may assume that the version strings are non-empty and contain only digits and the <code>.</code> character.<br>\nThe <code>.</code> character does not represent a decimal point and is used to separate number sequences.<br>\nFor instance, <code>2.5</code> is not "two and a half" or "half way to version three", it is the fifth second-level revision of the second first-level revision.</p>\n\n<p>Here is an example of version numbers ordering:</p>\n<pre>0.1 &lt; 1.1 &lt; 1.2 &lt; 13.37</pre>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft', 'Apple'],
  },
  {
    id: '166',
    name: 'Fraction to Recurring Decimal',
    acceptance: '17.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given two integers representing the numerator and denominator of a fraction, return the fraction in string format.</p>\n\n<p>If the fractional part is repeating, enclose the repeating part in parentheses.</p>\n<p>\nFor example,\n</p><ul>\n<li>Given numerator = 1, denominator = 2, return "0.5".</li>\n<li>Given numerator = 2, denominator = 1, return "2".</li>\n<li>Given numerator = 2, denominator = 3, return "0.(6)".</li>\n</ul>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/Shangrila">@Shangrila</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'IXL'],
  },
  {
    id: '167',
    name: 'Two Sum II - Input array is sorted',
    acceptance: '47.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array of integers that is already <b><i>sorted in ascending order</i></b>, find two numbers such that they add up to a specific target number.</p>\n\n<p>The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2. Please note that your returned answers (both index1 and index2) are not zero-based.</p>\n\n<p>You may assume that each input would have <i>exactly</i> one solution and you may not use the <i>same</i> element twice.</p>\n\n<p style="font-family:monospace">\n<b>Input:</b> numbers={2, 7, 11, 15}, target=9<br>\n<b>Output:</b> index1=1, index2=2\n</p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '168',
    name: 'Excel Sheet Column Title',
    acceptance: '26.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a positive integer, return its corresponding column title as appear in an Excel sheet.</p>\n\n<p>For example:</p>\n<pre>    1 -&gt; A\n    2 -&gt; B\n    3 -&gt; C\n    ...\n    26 -&gt; Z\n    27 -&gt; AA\n    28 -&gt; AB </pre>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/ifanchu">@ifanchu</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Zenefits'],
  },
  {
    id: '169',
    name: 'Majority Element',
    acceptance: '47.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array of size <i>n</i>, find the majority element. The majority element is the element that appears <b>more than</b> <code>⌊ n/2 ⌋</code> times.</p>\n\n<p>You may assume that the array is non-empty and the majority element always exist in the array.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Zenefits', 'Adobe'],
  },
  {
    id: '170',
    name: 'Two Sum III - Data structure design ',
    acceptance: '25.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Design and implement a TwoSum class. It should support the following operations: <code>add</code> and <code>find</code>.</p>\n\n<p>\n<code>add</code> - Add the number to an internal data structure.<br>\n<code>find</code> - Find if there exists any pair of numbers which sum is equal to the value.\n</p>\n\n<p>\nFor example,<br>\n</p><pre>add(1); add(3); add(5);\nfind(4) -&gt; true\nfind(7) -&gt; false\n</pre>\n<p></p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '171',
    name: 'Excel Sheet Column Number',
    acceptance: '47.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Related to question <a href="https://leetcode.com/problems/excel-sheet-column-title/">Excel Sheet Column Title</a></p>\n<p>Given a column title as appear in an Excel sheet, return its corresponding column number.</p>\n\n<p>For example:</p>\n<pre>    A -&gt; 1\n    B -&gt; 2\n    C -&gt; 3\n    ...\n    Z -&gt; 26\n    AA -&gt; 27\n    AB -&gt; 28 </pre>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft', 'Uber'],
  },
  {
    id: '172',
    name: 'Factorial Trailing Zeroes',
    acceptance: '36.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an integer <i>n</i>, return the number of trailing zeroes in <i>n</i>!.</p>\n\n<p><b>Note: </b>Your solution should be in logarithmic time complexity.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '173',
    name: 'Binary Search Tree Iterator',
    acceptance: '42.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Implement an iterator over a binary search tree (BST). Your iterator will be initialized with the root node of a BST.</p>\n\n<p>Calling <code>next()</code> will return the next smallest number in the BST.</p>\n\n<p><b>Note: </b><code>next()</code> and <code>hasNext()</code> should run in average O(1) time and uses O(<i>h</i>) memory, where <i>h</i> is the height of the tree. </p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Facebook', 'Microsoft', 'LinkedIn'],
  },
  {
    id: '174',
    name: 'Dungeon Game',
    acceptance: '23.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <style>\ntable.dungeon, .dungeon th, .dungeon td {\n  border:3px solid black;\n}\n\n .dungeon th, .dungeon td {\n    text-align: center;\n    height: 70px;\n    width: 70px;\n}\n</style>\n\n<p>The demons had captured the princess (<b>P</b>) and imprisoned her in the bottom-right corner of a dungeon. The dungeon consists of M x N rooms laid out in a 2D grid. Our valiant knight (<b>K</b>) was initially positioned in the top-left room and must fight his way through the dungeon to rescue the princess. </p>\n<p>The knight has an initial health point represented by a positive integer. If at any point his health point drops to 0 or below, he dies immediately. </p>\n<p>Some of the rooms are guarded by demons, so the knight loses health (<i>negative</i> integers) upon entering these rooms; \nother rooms are either empty (<i>0\'s</i>) or contain magic orbs that increase the knight\'s health (<i>positive</i> integers).</p>\n<p>In order to reach the princess as quickly as possible, the knight decides to move only rightward or downward in each step. </p>\n\n<br>\n<p><b>Write a function to determine the knight\'s minimum initial health so that he is able to rescue the princess.</b></p>\n<p>For example, given the dungeon below, the initial health of the knight must be at least <b>7</b> if he follows the optimal path <code>RIGHT-&gt; RIGHT -&gt; DOWN -&gt; DOWN</code>.</p>\n\n<table class="dungeon">\n<tbody><tr> \n<td>-2 (K)</td> \n<td>-3</td> \n<td>3</td> \n</tr> \n<tr> \n<td>-5</td> \n<td>-10</td> \n<td>1</td> \n</tr> \n<tr> \n<td>10</td> \n<td>30</td> \n<td>-5 (P)</td> \n</tr> \n</tbody></table>\n<!---2K   -3  3\n-5   -10   1\n10 30   5P-->\n\n<br>\n<p><b>Notes:</b>\n</p><ul>\n<li>The knight\'s health has no upper bound.</li>\n<li>Any room can contain threats or power-ups, even the first room the knight enters and the bottom-right room where the princess is imprisoned.  </li>\n</ul>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/stellari">@stellari</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '175',
    name: 'Combine Two Tables',
    acceptance: '40.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nTable: <code>Person</code></p>\n\n<pre>+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| PersonId    | int     |\n| FirstName   | varchar |\n| LastName    | varchar |\n+-------------+---------+\nPersonId is the primary key column for this table.\n</pre>\n\n<p>\nTable: <code>Address</code></p>\n<pre>+-------------+---------+\n| Column Name | Type    |\n+-------------+---------+\n| AddressId   | int     |\n| PersonId    | int     |\n| City        | varchar |\n| State       | varchar |\n+-------------+---------+\nAddressId is the primary key column for this table.\n</pre>\n\n<br>\n<p>\nWrite a SQL query for a report that provides the following information for \neach person in the Person table, regardless if there is an address for each \nof those people:\n</p>\n\n<pre>FirstName, LastName, City, State\n</pre>\n          ',
    tags: [],
  },
  {
    id: '176',
    name: 'Second Highest Salary',
    acceptance: '21.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a SQL query to get the second highest salary from the <code>Employee</code> table.\n</p>\n\n<pre>+----+--------+\n| Id | Salary |\n+----+--------+\n| 1  | 100    |\n| 2  | 200    |\n| 3  | 300    |\n+----+--------+\n</pre>\n\n<p>For example, given the above Employee table, the query should return <code>200</code> as the second highest salary. If there is no second highest salary, then the query should return <code>null</code>.</p>\n\n<pre>+---------------------+\n| SecondHighestSalary |\n+---------------------+\n| 200                 |\n+---------------------+\n</pre>\n          ',
    tags: [],
  },
  {
    id: '177',
    name: 'Nth Highest Salary',
    acceptance: '19.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a SQL query to get the <i>n</i><sup>th</sup> highest salary from the <code>Employee</code> table.\n</p>\n\n<pre>+----+--------+\n| Id | Salary |\n+----+--------+\n| 1  | 100    |\n| 2  | 200    |\n| 3  | 300    |\n+----+--------+\n</pre>\n\n<p>For example, given the above Employee table, the <i>n</i><sup>th</sup> highest salary where <i>n</i> = 2 is <code>200</code>. If there is no <i>n</i><sup>th</sup> highest salary, then the query should return <code>null</code>.</p>\n\n<pre>+------------------------+\n| getNthHighestSalary(2) |\n+------------------------+\n| 200                    |\n+------------------------+\n</pre>\n          ',
    tags: [],
  },
  {
    id: '178',
    name: 'Rank Scores',
    acceptance: '27.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a SQL query to rank scores. If there is a tie between two scores, both should have the same ranking. Note that after a tie, the next ranking number should be the next consecutive integer value. In other words, there should be no "holes" between ranks.\n</p>\n\n<pre>+----+-------+\n| Id | Score |\n+----+-------+\n| 1  | 3.50  |\n| 2  | 3.65  |\n| 3  | 4.00  |\n| 4  | 3.85  |\n| 5  | 4.00  |\n| 6  | 3.65  |\n+----+-------+\n</pre>\n\n<p>For example, given the above <code>Scores</code> table, your query should generate the following report (order by highest score):</p>\n\n<pre>+-------+------+\n| Score | Rank |\n+-------+------+\n| 4.00  | 1    |\n| 4.00  | 1    |\n| 3.85  | 2    |\n|&nbsp;3.65  | 3    |\n| 3.65  | 3    |\n| 3.50  | 4    |\n+-------+------+\n</pre>\n          ',
    tags: [],
  },
  {
    id: '179',
    name: 'Largest Number',
    acceptance: '23.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a list of non negative integers, arrange them such that they form the largest number.</p>\n\n<p>For example, given <code>[3, 30, 34, 5, 9]</code>, the largest formed number is <code>9534330</code>.</p>\n\n<p>Note: The result may be very large, so you need to return a string instead of an integer.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Works Applications'],
  },
  {
    id: '180',
    name: 'Consecutive Numbers',
    acceptance: '25.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a SQL query to find all numbers that appear at least three times consecutively.</p>\n\n<pre>+----+-----+\n| Id | Num |\n+----+-----+\n| 1  |  1  |\n| 2  |  1  |\n| 3  |  1  |\n| 4  |  2  |\n| 5  |  1  |\n| 6  |  2  |\n| 7  |  2  |\n+----+-----+\n</pre>\n\n<p>For example, given the above <code>Logs</code> table, <code>1</code> is the only number that appears consecutively for at least three times.</p>\n\n<pre>+-----------------+\n| ConsecutiveNums |\n+-----------------+\n| 1               |\n+-----------------+\n</pre>\n          ',
    tags: [],
  },
  {
    id: '181',
    name: 'Employees Earning More Than Their Managers',
    acceptance: '36.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nThe <code>Employee</code> table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.</p>\n\n<pre>+----+-------+--------+-----------+\n| Id | Name  | Salary | ManagerId |\n+----+-------+--------+-----------+\n| 1  | Joe   | 70000  | 3         |\n| 2  | Henry | 80000  | 4         |\n| 3  | Sam   | 60000  | NULL      |\n| 4  | Max   | 90000  | NULL      |\n+----+-------+--------+-----------+\n</pre>\n\n<p>Given the <code>Employee</code> table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.</p>\n\n<pre>+----------+\n| Employee |\n+----------+\n| Joe      |\n+----------+\n</pre>\n          ',
    tags: [],
  },
  {
    id: '182',
    name: 'Duplicate Emails',
    acceptance: '42.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a SQL query to find all duplicate emails in a table named <code>Person</code>.</p>\n\n<pre>+----+---------+\n| Id | Email   |\n+----+---------+\n| 1  | a@b.com |\n| 2  | c@d.com |\n| 3  | a@b.com |\n+----+---------+\n</pre>\n\n<p>For example, your query should return the following for the above table:</p>\n<pre>+---------+\n| Email   |\n+---------+\n| a@b.com |\n+---------+\n</pre>\n\n<p><b>Note</b>: All emails are in lowercase.</p>\n          ',
    tags: [],
  },
  {
    id: '183',
    name: 'Customers Who Never Order',
    acceptance: '34.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nSuppose that a website contains two tables, the <code>Customers</code> table and the <code>Orders</code> table. Write a SQL query to find all customers who never order anything.</p>\n\n<p>\nTable: <code>Customers</code>.</p>\n<pre>+----+-------+\n| Id | Name  |\n+----+-------+\n| 1  | Joe   |\n| 2  | Henry |\n| 3  | Sam   |\n| 4  | Max   |\n+----+-------+\n</pre>\n\n<p>\nTable: <code>Orders</code>.</p>\n<pre>+----+------------+\n| Id | CustomerId |\n+----+------------+\n| 1  | 3          |\n| 2  | 1          |\n+----+------------+\n</pre>\n\n<p>Using the above tables as example, return the following:</p>\n<pre>+-----------+\n| Customers |\n+-----------+\n| Henry     |\n| Max       |\n+-----------+\n</pre>\n          ',
    tags: [],
  },
  {
    id: '184',
    name: 'Department Highest Salary',
    acceptance: '21.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nThe <code>Employee</code> table holds all employees. Every employee has an Id, a salary, and there is also a column for the department Id.</p>\n\n<pre>+----+-------+--------+--------------+\n| Id | Name  | Salary | DepartmentId |\n+----+-------+--------+--------------+\n| 1  | Joe   | 70000  | 1            |\n| 2  | Henry | 80000  | 2            |\n| 3  | Sam   | 60000  | 2            |\n| 4  | Max   | 90000  | 1            |\n+----+-------+--------+--------------+\n</pre>\n\n<p>\nThe <code>Department</code> table holds all departments of the company.</p>\n<pre>+----+----------+\n| Id | Name     |\n+----+----------+\n| 1  | IT       |\n| 2  | Sales    |\n+----+----------+\n</pre>\n\n<p>Write a SQL query to find employees who have the highest salary in each of the departments. For the above tables, Max has the highest salary in the IT department and Henry has the highest salary in the Sales department.</p>\n\n<pre>+------------+----------+--------+\n| Department | Employee | Salary |\n+------------+----------+--------+\n| IT         | Max      | 90000  |\n| Sales      | Henry    | 80000  |\n+------------+----------+--------+\n</pre>\n          ',
    tags: [],
  },
  {
    id: '185',
    name: 'Department Top Three Salaries',
    acceptance: '18.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThe <code>Employee</code> table holds all employees. Every employee has an Id, and there is also a column for the department Id.</p>\n\n<pre>+----+-------+--------+--------------+\n| Id | Name  | Salary | DepartmentId |\n+----+-------+--------+--------------+\n| 1  | Joe   | 70000  | 1            |\n| 2  | Henry | 80000  | 2            |\n| 3  | Sam   | 60000  | 2            |\n| 4  | Max   | 90000  | 1            |\n| 5  | Janet | 69000  | 1            |\n| 6  | Randy | 85000  | 1            |\n+----+-------+--------+--------------+\n</pre>\n\n<p>\nThe <code>Department</code> table holds all departments of the company.</p>\n<pre>+----+----------+\n| Id | Name     |\n+----+----------+\n| 1  | IT       |\n| 2  | Sales    |\n+----+----------+\n</pre>\n\n<p>Write a SQL query to find employees who earn the top three salaries in each of the department. For the above tables, your SQL query should return the following rows.</p>\n\n<pre>+------------+----------+--------+\n| Department | Employee | Salary |\n+------------+----------+--------+\n| IT         | Max      | 90000  |\n| IT         | Randy    | 85000  |\n| IT         | Joe      | 70000  |\n| Sales      | Henry    | 80000  |\n| Sales      | Sam      | 60000  |\n+------------+----------+--------+\n</pre>\n          ',
    tags: [],
  },
  {
    id: '186',
    name: 'Reverse Words in a String II ',
    acceptance: '28.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.\n</p>\n\n<p>\nThe input string does not contain leading or trailing spaces and the words are always separated by a single space.\n</p>\n\n<p>\nFor example,<br>\nGiven s = "<code>the sky is blue</code>",<br>\nreturn "<code>blue is sky the</code>".\n</p>\n\n<p>\nCould you do it <i>in-place</i> without allocating extra space?\n</p>\n\n<p>Related problem: <a href="/problems/rotate-array/">Rotate Array</a></p>\n\n<p>\n<b><font color="red">Update (2017-10-16):</font></b><br>\nWe have updated the function signature to accept a <code>character array</code>, so please <b><u>reset to the default code definition</u></b> by clicking on the reload button above the code editor. Also, <b>Run Code</b> is now available!\n</p>\n          ',
    tags: ['Microsoft', 'Amazon', 'Uber'],
  },
  {
    id: '187',
    name: 'Repeated DNA Sequences',
    acceptance: '32.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nAll DNA is composed of a series of nucleotides abbreviated as A, C, G, and T, for example: "ACGAATTCCG". When studying DNA, it is sometimes useful to identify repeated sequences within the DNA.</p>\n\n<p>Write a function to find all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule.</p>\n\n<p>\nFor example,</p>\n<pre>Given s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT",\n\nReturn:\n["AAAAACCCCC", "CCCCCAAAAA"].\n</pre>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '188',
    name: 'Best Time to Buy and Sell Stock IV',
    acceptance: '24.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Say you have an array for which the <i>i</i><sup>th</sup> element is the price of a given stock on day <i>i</i>.</p>\n\n<p>Design an algorithm to find the maximum profit. You may complete at most <b>k</b> transactions.</p>\n\n<p><b>Note:</b><br>\nYou may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/Freezen">@Freezen</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '189',
    name: 'Rotate Array',
    acceptance: '25.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Rotate an array of <i>n</i> elements to the right by <i>k</i> steps.</p>\n<p>For example, with <i>n</i> = 7 and <i>k</i> = 3, the array <code>[1,2,3,4,5,6,7]</code> is rotated to <code>[5,6,7,1,2,3,4]</code>. </p>\n\n<p><b>Note:</b><br>\nTry to come up as many solutions as you can, there are at least 3 different ways to solve this problem.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">[show hint]</a></p>\n<div class="spoilers"><b>Hint:</b><br>\nCould you do it in-place with O(1) extra space?\n</div>\n\n<p>Related problem: <a href="/problems/reverse-words-in-a-string-ii/">Reverse Words in a String II</a></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/Freezen">@Freezen</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft', 'Amazon', 'Bloomberg'],
  },
  {
    id: '190',
    name: 'Reverse Bits',
    acceptance: '29.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Reverse bits of a given 32 bits unsigned integer.</p>\n\n<p>For example, given input 43261596 (represented in binary as <b>00000010100101000001111010011100</b>), return 964176192 (represented in binary as <b>00111001011110000010100101000000</b>).</p>\n\n<p>\n<b>Follow up</b>:<br>\nIf this function is called many times, how would you optimize it?\n</p>\n\n<p>Related problem: <a href="/problems/reverse-integer/">Reverse Integer</a></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Apple', 'Airbnb'],
  },
  {
    id: '191',
    name: 'Number of 1 Bits',
    acceptance: '40.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Write a function that takes an unsigned integer and returns the number of ’1\' bits it has (also known as the <a href="http://en.wikipedia.org/wiki/Hamming_weight">Hamming weight</a>).</p>\n\n<p>For example, the 32-bit integer ’11\' has binary representation <code>00000000000000000000000000001011</code>, so the function should return 3.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft', 'Apple'],
  },
  {
    id: '192',
    name: 'Word Frequency',
    acceptance: '25.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Write a bash script to calculate the frequency of each word in a text file <code>words.txt</code>.</p>\n\n<p>For simplicity sake, you may assume:</p>\n<ul>\n<li><code>words.txt</code> contains only lowercase characters and space <code>\' \'</code> characters.</li>\n<li>Each word must consist of lowercase characters only.</li>\n<li>Words are separated by one or more whitespace characters.</li>\n</ul>\n<p></p>\n\n<p>For example, assume that <code>words.txt</code> has the following content:</p>\n<pre>the day is sunny the the\nthe sunny is is\n</pre>\n\nYour script should output the following, sorted by descending frequency:\n<pre>the 4\nis 3\nsunny 2\nday 1\n</pre>\n\n<p>\n<b>Note:</b><br>\nDon\'t worry about handling ties, it is guaranteed that each word\'s frequency count is unique.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">[show hint]</a></p>\n<div class="spoilers"><b>Hint:</b><br>\nCould you write it in one-line using <a href="http://tldp.org/HOWTO/Bash-Prog-Intro-HOWTO-4.html">Unix pipes</a>?\n</div>\n          ',
    tags: [],
  },
  {
    id: '193',
    name: 'Valid Phone Numbers',
    acceptance: '24.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a text file <code>file.txt</code> that contains list of phone numbers (one per line), write a one liner bash script to print all valid phone numbers.</p>\n\n<p>You may assume that a valid phone number must appear in one of the following two formats: (xxx) xxx-xxxx or xxx-xxx-xxxx. (x means a digit)</p>\n\n<p>You may also assume each line in the text file must not contain leading or trailing white spaces.</p>\n\n<p>For example, assume that <code>file.txt</code> has the following content:</p>\n<pre>987-123-4567\n123 456 7890\n(123) 456-7890\n</pre>\n\nYour script should output the following valid phone numbers:\n<pre>987-123-4567\n(123) 456-7890\n</pre>\n          ',
    tags: [],
  },
  {
    id: '194',
    name: 'Transpose File',
    acceptance: '21.3%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a text file <code>file.txt</code>, transpose its content.</p>\n\n<p>You may assume that each row has the same number of columns and each field is separated by the <code>' '</code> character.</p>\n\n<p>\nFor example, if <code>file.txt</code> has the following content:\n</p><pre>name age\nalice 21\nryan 30\n</pre>\n<p></p>\n\n<p>\nOutput the following:\n</p><pre>name alice ryan\nage 21 30\n</pre>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '195',
    name: 'Tenth Line',
    acceptance: '33.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>How would you print just the 10th line of a file?</p>\n\n<p>For example, assume that <code>file.txt</code> has the following content:</p>\n<pre>Line 1\nLine 2\nLine 3\nLine 4\nLine 5\nLine 6\nLine 7\nLine 8\nLine 9\nLine 10\n</pre>\n\nYour script should output the tenth line, which is:\n<pre>Line 10\n</pre>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">[show hint]</a></p>\n<div class="spoilers"><b>Hint:</b><br>\n1. If the file contains less than 10 lines, what should you output?<br>\n2. There\'s at least three different solutions. Try to explore all possibilities.\n</div>\n          ',
    tags: ['Adobe'],
  },
  {
    id: '196',
    name: 'Delete Duplicate Emails',
    acceptance: '23.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a SQL query to delete all duplicate email entries in a table named <code>Person</code>, keeping only unique emails based on its <i>smallest</i> <b>Id</b>.</p>\n\n<pre>+----+------------------+\n| Id | Email            |\n+----+------------------+\n| 1  | john@example.com |\n| 2  | bob@example.com  |\n| 3  | john@example.com |\n+----+------------------+\nId is the primary key column for this table.\n</pre>\n\n<p>For example, after running your query, the above <code>Person</code> table should have the following rows:</p>\n<pre>+----+------------------+\n| Id | Email            |\n+----+------------------+\n| 1  | john@example.com |\n| 2  | bob@example.com  |\n+----+------------------+\n</pre>\n          ',
    tags: [],
  },
  {
    id: '197',
    name: 'Rising Temperature',
    acceptance: '29.8%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given a <code>Weather</code> table, write a SQL query to find all dates' Ids with higher temperature compared to its previous (yesterday's) dates.</p>\n\n<pre>+---------+------------+------------------+\n| Id(INT) | Date(DATE) | Temperature(INT) |\n+---------+------------+------------------+\n|       1 | 2015-01-01 |               10 |\n|       2 | 2015-01-02 |               25 |\n|       3 | 2015-01-03 |               20 |\n|       4 | 2015-01-04 |               30 |\n+---------+------------+------------------+\n</pre>\n\nFor example, return the following Ids for the above Weather table:\n<pre>+----+\n| Id |\n+----+\n|  2 |\n|  4 |\n+----+\n</pre>\n          ",
    tags: [],
  },
  {
    id: '198',
    name: 'House Robber',
    acceptance: '39.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and <b>it will automatically contact the police if two adjacent houses were broken into on the same night</b>.</p>\n\n<p>Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight <b>without alerting the police</b>.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/ifanchu">@ifanchu</a> for adding this problem and creating all test cases. Also thanks to <a href="https://oj.leetcode.com/discuss/user/ts">@ts</a> for adding additional test cases.</p>\n          ',
    tags: ['LinkedIn', 'Airbnb'],
  },
  {
    id: '199',
    name: 'Binary Tree Right Side View',
    acceptance: '41.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, imagine yourself standing on the <i>right</i> side of it, return the values of the nodes you can see ordered from top to bottom.</p>\n\n<p>\nFor example:<br>\nGiven the following binary tree,<br>\n</p><pre>   1            &lt;---\n /   \\\n2     3         &lt;---\n \\     \\\n  5     4       &lt;---\n</pre>\n<p></p>\n<p>\nYou should return <code>[1, 3, 4]</code>.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/amrsaqr">@amrsaqr</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '200',
    name: 'Number of Islands',
    acceptance: '35.8%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a 2d grid map of <code>'1'</code>s (land) and <code>'0'</code>s (water), count the number of islands. An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.</p>\n\n<p><i><b>Example 1:</b></i></p>\n<pre>11110<br>11010<br>11000<br>00000</pre>\n<p>Answer: 1</p>\n<p><i><b>Example 2:</b></i></p>\n<pre>11000<br>11000<br>00100<br>00011</pre>\n<p>Answer: 3</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href=\"https://leetcode.com/discuss/user/mithmatt\">@mithmatt</a> for adding this problem and creating all test cases.</p>\n          ",
    tags: ['Google', 'Facebook', 'Microsoft', 'Amazon', 'Zenefits'],
  },
  {
    id: '201',
    name: 'Bitwise AND of Numbers Range',
    acceptance: '34.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a range [m, n] where 0 &lt;= m &lt;= n &lt;= 2147483647, return the bitwise AND of all numbers in this range, inclusive.</p>\n\n<p>\nFor example, given the range [5, 7], you should return 4.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/amrsaqr">@amrsaqr</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '202',
    name: 'Happy Number',
    acceptance: '41.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Write an algorithm to determine if a number is "happy".</p>\n\n<p>A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.</p>\n\n<p><b>Example:&nbsp;</b>19 is a happy number</p>\n\n<ul style="list-style: none;">\n<li>1<sup>2</sup> + 9<sup>2</sup> = 82</li>\n<li>8<sup>2</sup> + 2<sup>2</sup> = 68</li>\n<li>6<sup>2</sup> + 8<sup>2</sup> = 100</li>\n<li>1<sup>2</sup> + 0<sup>2</sup> + 0<sup>2</sup> = 1</li>\n</ul>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/mithmatt">@mithmatt</a> and <a href="https://leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Uber', 'Twitter', 'Airbnb'],
  },
  {
    id: '203',
    name: 'Remove Linked List Elements',
    acceptance: '33.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Remove all elements from a linked list of integers that have value <b><i>val</i></b>.</p>\n<p>\n<b>Example</b><br>\n<i><b>Given:</b></i> 1 --&gt; 2 --&gt; 6 --&gt; 3 --&gt; 4 --&gt; 5 --&gt; 6,  <b><i>val</i></b> = 6<br>\n<i><b>Return:</b></i> 1 --&gt; 2 --&gt; 3 --&gt; 4 --&gt; 5\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/mithmatt">@mithmatt</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '204',
    name: 'Count Primes',
    acceptance: '26.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p><b>Description:</b></p>\n<p>Count the number of prime numbers less than a non-negative number, <b><i>n</i></b>.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/mithmatt">@mithmatt</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft', 'Amazon'],
  },
  {
    id: '205',
    name: 'Isomorphic Strings',
    acceptance: '34.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given two strings <b><i>s</i></b> and <b><i>t</i></b>, determine if they are isomorphic.</p>\n\n<p>Two strings are isomorphic if the characters in <b><i>s</i></b> can be replaced to get <b><i>t</i></b>.</p>\n\n<p>All occurrences of a character must be replaced with another character while preserving the order of characters. No two characters may map to the same character but a character may map to itself.</p>\n\n<p>For example,<br>\nGiven <code>"egg"</code>, <code>"add"</code>, return true.</p>\n\n<p>Given <code>"foo"</code>, <code>"bar"</code>, return false.</p>\n\n<p>Given <code>"paper"</code>, <code>"title"</code>, return true.</p>\n\n<p><b>Note:</b><br>\nYou may assume both <b><i>s</i></b> and <b><i>t</i></b> have the same length.</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '206',
    name: 'Reverse Linked List',
    acceptance: '46.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Reverse a singly linked list.</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show more hints.</a></p>\n\n<div class="spoilers"><b>Hint:</b>\n<p>A linked list can be reversed either iteratively or recursively. Could you implement both?</p>\n</div>\n          ',
    tags: [
      'Facebook',
      'Microsoft',
      'Amazon',
      'Bloomberg',
      'Uber',
      'Twitter',
      'Apple',
      'Snapchat',
      'Zenefits',
      'Yelp',
      'Yahoo',
      'Adobe',
    ],
  },
  {
    id: '207',
    name: 'Course Schedule',
    acceptance: '33.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nThere are a total of <i>n</i> courses you have to take, labeled from <code>0</code> to <code>n - 1</code>.</p>\n\n<p>Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: <code>[0,1]</code></p>\n\n<p>\nGiven the total number of courses and a list of prerequisite <b>pairs</b>, is it possible for you to finish all courses?\n</p>\n\n<p>For example:</p>\n<pre>2, [[1,0]]</pre>\n<p>There are a total of 2 courses to take. To take course 1 you should have finished course 0. So it is possible.</p>\n\n<pre>2, [[1,0],[0,1]]</pre>\n<p>There are a total of 2 courses to take. To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The input prerequisites is a graph represented by <b>a list of edges</b>, not adjacency matrices. Read more about <a href="https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs" target="_blank">how a graph is represented</a>.</li>\n<li>You may assume that there are no duplicate edges in the input prerequisites.</li>\n</ol>\n<p></p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show more hints.</a></p>\n\n<div class="spoilers"><b>Hints:</b>\n<ol>\n<li>This problem is equivalent to finding if a cycle exists in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.</li>\n<li><a href="https://class.coursera.org/algo-003/lecture/52" target="_blank">Topological Sort via DFS</a> - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.</li>\n<li>Topological sort could also be done via <a href="http://en.wikipedia.org/wiki/Topological_sorting#Algorithms" target="_blank">BFS</a>.</li>\n</ol>\n</div>\n          ',
    tags: ['Uber', 'Apple', 'Zenefits', 'Yelp'],
  },
  {
    id: '208',
    name: 'Implement Trie (Prefix Tree)',
    acceptance: '29.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nImplement a trie with <code>insert</code>, <code>search</code>, and <code>startsWith</code> methods.\n</p>\n\n<p>\n<b>Note:</b><br>\nYou may assume that all inputs are consist of lowercase letters <code>a-z</code>.\n</p>\n          ',
    tags: ['Google', 'Facebook', 'Microsoft', 'Bloomberg', 'Uber', 'Twitter'],
  },
  {
    id: '209',
    name: 'Minimum Size Subarray Sum',
    acceptance: '31.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of <strong>n</strong> positive integers and a positive integer <strong>s</strong>, find the minimal length of a <b>contiguous</b> subarray of which the sum ≥ <strong>s</strong>. If there isn\'t one, return 0 instead.\n</p>\n<p>\nFor example, given the array <code>[2,3,1,2,4,3]</code> and <code>s = 7</code>,<br>\nthe subarray <code>[4,3]</code> has the minimal length under the problem constraint.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show more practice.</a></p>\n\n<div class="spoilers"><b>More practice:</b>\n\n<p>If you have figured out the <i>O</i>(<i>n</i>) solution, try coding another solution of which the time complexity is <i>O</i>(<i>n</i> log <i>n</i>).</p>\n</div>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/Freezen">@Freezen</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '210',
    name: 'Course Schedule II',
    acceptance: '29.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nThere are a total of <i>n</i> courses you have to take, labeled from <code>0</code> to <code>n - 1</code>.</p>\n\n<p>Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: <code>[0,1]</code></p>\n\n<p>\nGiven the total number of courses and a list of prerequisite <b>pairs</b>, return the ordering of courses you should take to finish all courses.</p>\n\n<p>There may be multiple correct orders, you just need to return one of them. If it is impossible to finish all courses, return an empty array.\n</p>\n\n<p>For example:</p>\n<pre>2, [[1,0]]</pre>\n<p>There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is <code>[0,1]</code></p>\n\n<pre>4, [[1,0],[2,0],[3,1],[3,2]]</pre>\n<p>There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0. So one correct course order is <code>[0,1,2,3]</code>. Another correct ordering is<code>[0,2,1,3]</code>.</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The input prerequisites is a graph represented by <b>a list of edges</b>, not adjacency matrices. Read more about <a href="https://www.khanacademy.org/computing/computer-science/algorithms/graph-representation/a/representing-graphs" target="_blank">how a graph is represented</a>.</li>\n<li>You may assume that there are no duplicate edges in the input prerequisites.</li>\n</ol>\n<p></p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show more hints.</a></p>\n\n<div class="spoilers"><b>Hints:</b>\n<ol>\n<li>This problem is equivalent to finding the topological order in a directed graph. If a cycle exists, no topological ordering exists and therefore it will be impossible to take all courses.</li>\n<li><a href="https://class.coursera.org/algo-003/lecture/52" target="_blank">Topological Sort via DFS</a> - A great video tutorial (21 minutes) on Coursera explaining the basic concepts of Topological Sort.</li>\n<li>Topological sort could also be done via <a href="http://en.wikipedia.org/wiki/Topological_sorting#Algorithms" target="_blank">BFS</a>.</li>\n</ol>\n</div>\n          ',
    tags: ['Facebook', 'Zenefits'],
  },
  {
    id: '211',
    name: 'Add and Search Word - Data structure design',
    acceptance: '24.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nDesign a data structure that supports the following two operations:\n</p>\n<pre>void addWord(word)\nbool search(word)\n</pre>\n\n<p>\nsearch(word) can search a literal word or a regular expression string containing only letters <code>a-z</code> or <code>.</code>. A <code>.</code> means it can represent any one letter.</p>\n\n<p>\nFor example:</p>\n<pre>addWord("bad")\naddWord("dad")\naddWord("mad")\nsearch("pad") -&gt; false\nsearch("bad") -&gt; true\nsearch(".ad") -&gt; true\nsearch("b..") -&gt; true\n</pre>\n\n<p>\n<b>Note:</b><br>\nYou may assume that all words are consist of lowercase letters <code>a-z</code>.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show hint.</a></p>\n\n<div class="spoilers">You should be familiar with how a Trie works. If not, please work on this problem: <a href="https://leetcode.com/problems/implement-trie-prefix-tree/">Implement Trie (Prefix Tree)</a> first.\n</div>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '212',
    name: 'Word Search II',
    acceptance: '24.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a 2D board and a list of words from the dictionary, find all words in the board.\n</p>\n<p>\nEach word must be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.\n</p>\n\n<p>\nFor example,<br>\nGiven <b>words</b> = <code>["oath","pea","eat","rain"]</code> and <b>board</b> = \n</p><pre>[\n  [\'<span style="color:#d70">o</span>\',\'<span style="color:#d70">a</span>\',\'a\',\'n\'],\n  [\'e\',\'<span style="color:#d30">t</span>\',\'<span style="color:#d00">a</span>\',\'<span style="color:#d00">e</span>\'],\n  [\'i\',\'<span style="color:#d70">h</span>\',\'k\',\'r\'],\n  [\'i\',\'f\',\'l\',\'v\']\n]\n</pre>\n\nReturn <code>["eat","oath"]</code>.\n<p></p>\n\n<p>\n<b>Note:</b><br>\nYou may assume that all inputs are consist of lowercase letters <code>a-z</code>.\n</p>\n\n<p class="showspoilers"><a href="#" onclick="showSpoilers(this); return false;">click to show hint.</a></p>\n\n<div class="spoilers"><p>You would need to optimize your backtracking to pass the larger test. Could you stop backtracking earlier?</p>\n\n<p>If the current candidate does not exist in all words\' prefix, you could stop backtracking immediately. What kind of data structure could answer such query efficiently? Does a hash table work? Why or why not? How about a Trie? If you would like to learn how to implement a basic trie, please work on this problem: <a href="https://leetcode.com/problems/implement-trie-prefix-tree/">Implement Trie (Prefix Tree)</a> first.</p>\n</div>\n          ',
    tags: ['Google', 'Microsoft', 'Airbnb'],
  },
  {
    id: '213',
    name: 'House Robber II',
    acceptance: '34.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p><b>Note:</b> This is an extension of <a href="https://leetcode.com/problems/house-robber/">House Robber</a>.</p>\n\n<p>After robbing those houses on that street, the thief has found himself a new place for his thievery so that he will not get too much attention. This time, all houses at this place are <strong>arranged in a circle.</strong> That means the first house is the neighbor of the last one. Meanwhile, the security system for these houses remain the same as for those in the previous street. </p>\n\n<p>Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight <strong>without alerting the police</strong>.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/Freezen">@Freezen</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '214',
    name: 'Shortest Palindrome',
    acceptance: '24.8%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string S, you are allowed to convert it to a palindrome by adding characters in front of it. Find and return the shortest palindrome you can find by performing this transformation.\n</p>\n\n<p>For example: </p>\n<p>Given <code>"aacecaaa"</code>, return <code>"aaacecaaa"</code>.</p>\n<p>Given <code>"abcd"</code>, return <code>"dcbabcd"</code>.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/ifanchu">@ifanchu</a> for adding this problem and creating all test cases. Thanks to <a href="https://leetcode.com/discuss/user/Freezen">@Freezen</a> for additional test cases.</p>\n          ',
    tags: ['Google', 'Pocket Gems'],
  },
  {
    id: '215',
    name: 'Kth Largest Element in an Array',
    acceptance: '40.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            Find the <b>k</b>th largest element in an unsorted array. Note that it is the kth largest element in the sorted order, not the kth distinct element.\n\n<p>For example,<br>\nGiven <code>[3,2,1,5,6,4]</code> and k = 2, return 5.\n</p>\n\n<p><b>Note: </b><br>\nYou may assume k is always valid, 1 ≤ k ≤ array\'s length.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/mithmatt">@mithmatt</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Amazon', 'Bloomberg', 'Apple', 'Pocket Gems'],
  },
  {
    id: '216',
    name: 'Combination Sum III',
    acceptance: '46.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <div>\n<p>Find all possible combinations of <i><b>k</b></i> numbers that add up to a number <i><b>n</b></i>, given that only numbers from 1 to 9 can be used and each combination should be a unique set of numbers.</p>\n</div>\n<div>\n<br>\n<p> <i><b>Example 1:</b></i></p>\n<p>Input:  <i><b>k</b></i> = 3,  <i><b>n</b></i> = 7</p>\n<p>Output: </p>\n<p></p><pre>[[1,2,4]]\n</pre><p></p>\n<br>\n<p> <i><b>Example 2:</b></i></p>\n<p>Input:  <i><b>k</b></i> = 3,  <i><b>n</b></i> = 9</p>\n<p>Output: </p>\n<p></p><pre>[[1,2,6], [1,3,5], [2,3,4]]\n</pre><p></p>\n</div>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/mithmatt">@mithmatt</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '217',
    name: 'Contains Duplicate',
    acceptance: '46.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.\n</p>\n          ',
    tags: ['Airbnb', 'Yahoo', 'Palantir'],
  },
  {
    id: '218',
    name: 'The Skyline Problem',
    acceptance: '28.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>A city\'s skyline is the outer contour of the silhouette formed by all the buildings in that city when viewed from a distance. Now suppose you are <b>given the locations and height of all the buildings</b> as shown on a cityscape photo (Figure A), write a program to <b>output the skyline</b> formed by these buildings collectively (Figure B).</p>\n\n<!-- Cityscape -->\n<a href="/static/images/problemset/skyline1.jpg" target="_blank">\n    <img style=" max-width: 45%;" src="/static/images/problemset/skyline1.jpg" border="0" alt="Buildings">\n</a>\n\n<!-- Use this image for the \'turning point\' description of skyline -->\n<a href="/static/images/problemset/skyline2.jpg" target="_blank">\n    <img style="max-width: 45%;" src="/static/images/problemset/skyline2.jpg" border="0" alt="Skyline Contour">\n</a>\n\n<!-- Use the following image if we\'d like to define the output as \'horizontal lines\' rather than \'turning points\'-->\n<!--\n<a href="http://tinypic.com?ref=mij3wi" target="_blank">\n<img style="max-width: 45%;" src="http://i59.tinypic.com/mij3wi.jpg" border="0" alt="Skyline Contour">\n</a>\n-->\n\n<p>The geometric information of each building is represented by a triplet of integers <code>[Li, Ri, Hi]</code>, where <code>Li</code> and <code>Ri</code> are the x coordinates of the left and right edge of the ith building, respectively, and <code>Hi</code> is its height. It is guaranteed that <code>0 ≤ Li, Ri ≤ INT_MAX</code>, <code>0 &lt; Hi ≤ INT_MAX</code>, and <code>Ri - Li &gt; 0</code>. You may assume all buildings are perfect rectangles grounded on an absolutely flat surface at height 0.</p>\n\n<p>For instance, the dimensions of all buildings in Figure A are recorded as: <code>[ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ] </code>.</p>\n\n<p>The output is a list of "<b>key points</b>" (red dots in Figure B) in the format of <code>[ [x1,y1], [x2, y2], [x3, y3], ... ]</code> that uniquely defines a skyline. <b>A key point is the left endpoint of a horizontal line segment</b>. Note that the last key point, where the rightmost building ends, is merely used to mark the termination of the skyline, and always has zero height. Also, the ground in between any two adjacent buildings should be considered part of the skyline contour.\n\n</p><p>For instance, the skyline in Figure B should be represented as:<code>[ [2 10], [3 15], [7 12], [12 0], [15 10], [20 8], [24, 0] ]</code>.</p>\n\n<p><b>Notes:</b>\n</p><ul>\n<li> The number of buildings in any input list is guaranteed to be in the range <code>[0, 10000]</code>.</li>\n<li> The input list is already sorted in ascending order by the left x position <code>Li</code>. </li>\n<li> The output list must be sorted by the x position. </li>\n<li> There must be no consecutive horizontal lines of equal height in the output skyline. For instance, <code>[...[2 3], [4 5], [7 5], [11 5], [12 7]...]</code> is not acceptable; the three lines of height 5 should be merged into one in the final output as such: <code>[...[2 3], [4 5], [12 7], ...]</code></li>\n</ul>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/stellari">@stellari</a> for adding this problem, creating these two awesome images and all test cases.</p>\n          ',
    tags: ['Google', 'Facebook', 'Microsoft', 'Twitter', 'Yelp'],
  },
  {
    id: '219',
    name: 'Contains Duplicate II',
    acceptance: '32.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of integers and an integer <i>k</i>, find out whether there are two distinct indices <i>i</i> and <i>j</i> in the array such that <b>nums[i] = nums[j]</b> and the <b>absolute</b> difference between <i>i</i> and <i>j</i> is at most <i>k</i>.\n</p>\n          ',
    tags: ['Airbnb', 'Palantir'],
  },
  {
    id: '220',
    name: 'Contains Duplicate III',
    acceptance: '18.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of integers, find out whether there are two distinct indices <i>i</i> and <i>j</i> in the array such that the <b>absolute</b> difference between <b>nums[i]</b> and <b>nums[j]</b> is at most <i>t</i> and the <b>absolute</b> difference between <i>i</i> and <i>j</i> is at most <i>k</i>.\n</p>\n          ',
    tags: ['Airbnb', 'Palantir'],
  },
  {
    id: '221',
    name: 'Maximal Square',
    acceptance: '29.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a 2D binary matrix filled with 0\'s and 1\'s, find the largest square containing only 1\'s and return its area.\n</p>\n\n<p>For example, given the following matrix:\n</p><pre>1 0 1 0 0\n1 0 <font color="red">1</font> <font color="red">1</font> 1\n1 1 <font color="red">1</font> <font color="red">1</font> 1\n1 0 0 1 0\n</pre>\nReturn 4.\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://oj.leetcode.com/discuss/user/Freezen">@Freezen</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Facebook', 'Apple', 'Airbnb'],
  },
  {
    id: '222',
    name: 'Count Complete Tree Nodes',
    acceptance: '27.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a <b>complete</b> binary tree, count the number of nodes.</p>\n\n<p><b><u>Definition of a complete binary tree from <a href="http://en.wikipedia.org/wiki/Binary_tree#Types_of_binary_trees" target="_blank">Wikipedia</a>:</u></b><br>\nIn a complete binary tree every level, except possibly the last, is completely filled, and all nodes in the last level are as far left as possible. It can have between 1 and 2<sup>h</sup> nodes inclusive at the last level h.</p>\n          ',
    tags: [],
  },
  {
    id: '223',
    name: 'Rectangle Area',
    acceptance: '33.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Find the total area covered by two <b>rectilinear</b> rectangles in a <b>2D</b> plane.</p>\n<p>Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.</p>\n<div style="width:529px; height:300px; background-color:rgb(235, 235, 235);">\n<img src="/static/images/problemset/rectangle_area.png" border="0" alt="Rectangle Area">\n</div>\n<div style="padding-top:23px;">\n<p>Assume that the total area is never beyond the maximum possible value of <b>int</b>.</p>\n</div>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/mithmatt">@mithmatt</a> for adding this problem, creating the above image and all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '224',
    name: 'Basic Calculator',
    acceptance: '27.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Implement a basic calculator to evaluate a simple expression string.</p>\n\n<p>The expression string may contain open <code>(</code> and closing parentheses <code>)</code>, the plus <code>+</code> or minus sign <code>-</code>, <b>non-negative</b> integers and empty spaces <code> </code>.</p>\n\n<p>You may assume that the given expression is always valid.</p>\n\n<p>Some examples:<br>\n</p><pre>"1 + 1" = 2\n" 2-1 + 2 " = 3\n"(1+(4+5+2)-3)+(6+8)" = 23\n</pre>\n<p></p>\n\n<p>\n<b>Note:</b> <b>Do not</b> use the <code>eval</code> built-in library function.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '225',
    name: 'Implement Stack using Queues',
    acceptance: '33.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nImplement the following operations of a stack using queues.\n</p><ul>\n<li>\npush(x) -- Push element x onto stack.\n</li>\n<li>\npop() -- Removes the element on top of the stack.\n</li>\n<li>\ntop() -- Get the top element.\n</li>\n<li>\nempty() -- Return whether the stack is empty.\n</li>\n</ul>\n<b>Notes:</b><br>\n<ul>\n<li>You must use <i>only</i> standard operations of a queue -- which means only <code>push to back</code>, <code>peek/pop from front</code>, <code>size</code>, and <code>is empty</code> operations are valid.</li>\n<li>Depending on your language, queue may not be supported natively. You may simulate a queue by using a list or deque (double-ended queue), as long as you use only standard operations of a queue.</li>\n<li>You may assume that all operations are valid (for example, no pop or top operations will be called on an empty stack).</li>\n</ul>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and all test cases.</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '226',
    name: 'Invert Binary Tree',
    acceptance: '52.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            Invert a binary tree.\n<pre>     4\n   /   \\\n  2     7\n / \\   / \\\n1   3 6   9</pre>\n\nto\n<pre>     4\n   /   \\\n  7     2\n / \\   / \\\n9   6 3   1</pre>\n\n<b>Trivia:</b><br>\nThis problem was inspired by <a href="https://twitter.com/mxcl/status/608682016205344768" target="_blank">this original tweet</a> by <a href="https://twitter.com/mxcl" target="_blank">Max Howell</a>:\n<blockquote>Google: 90% of our engineers use the software you wrote (Homebrew), but you can’t invert a binary tree on a whiteboard so fuck off.</blockquote>\n          ',
    tags: [],
  },
  {
    id: '227',
    name: 'Basic Calculator II',
    acceptance: '29.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Implement a basic calculator to evaluate a simple expression string.</p>\n\n<p>The expression string contains only <b>non-negative</b> integers, <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code> operators and empty spaces <code> </code>. The integer division should truncate toward zero.</p>\n\n<p>You may assume that the given expression is always valid.</p>\n\n<p>Some examples:<br>\n</p><pre>"3+2*2" = 7\n" 3/2 " = 1\n" 3+5 / 2 " = 5\n</pre>\n<p></p>\n\n<p>\n<b>Note:</b> <b>Do not</b> use the <code>eval</code> built-in library function.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Airbnb'],
  },
  {
    id: '228',
    name: 'Summary Ranges',
    acceptance: '31.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a sorted integer array without duplicates, return the summary of its ranges.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [0,1,2,4,5,7]\n<b>Output:</b> ["0-&gt;2","4-&gt;5","7"]\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [0,2,3,4,6,8,9]\n<b>Output:</b> ["0","2-&gt;4","6","8-&gt;9"]\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '229',
    name: 'Majority Element II',
    acceptance: '28.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an integer array of size <i>n</i>, find all elements that appear more than <code>⌊ n/3 ⌋</code> times. The algorithm should run in linear time and in O(1) space.</p>\n          ',
    tags: ['Zenefits'],
  },
  {
    id: '230',
    name: 'Kth Smallest Element in a BST',
    acceptance: '44.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary search tree, write a function <code>kthSmallest</code> to find the <b>k</b>th smallest element in it.</p>\n\n<p><b>Note: </b><br>\nYou may assume k is always valid, 1 ≤ k ≤ BST\'s total elements.</p>\n\n<p><b>Follow up:</b><br>\nWhat if the BST is modified (insert/delete operations) often and you need to find the kth smallest frequently? How would you optimize the kthSmallest routine?</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/ts">@ts</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Bloomberg', 'Uber'],
  },
  {
    id: '231',
    name: 'Power of Two',
    acceptance: '40.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an integer, write a function to determine if it is a power of two.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '232',
    name: 'Implement Queue using Stacks',
    acceptance: '37.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nImplement the following operations of a queue using stacks.\n</p><ul>\n<li>\npush(x) -- Push element x to the back of queue.\n</li>\n<li>\npop() -- Removes the element from in front of queue.\n</li>\n<li>\npeek() -- Get the front element.\n</li>\n<li>\nempty() -- Return whether the queue is empty.\n</li>\n</ul>\n<b>Notes:</b><br>\n<ul>\n<li>You must use <i>only</i> standard operations of a stack -- which means only <code>push to top</code>, <code>peek/pop from top</code>, <code>size</code>, and <code>is empty</code> operations are valid.</li>\n<li>Depending on your language, stack may not be supported natively. You may simulate a stack by using a list or deque (double-ended queue), as long as you use only standard operations of a stack.</li>\n<li>You may assume that all operations are valid (for example, no pop or peek operations will be called on an empty queue).</li>\n</ul>\n<p></p>\n          ',
    tags: ['Microsoft', 'Bloomberg'],
  },
  {
    id: '233',
    name: 'Number of Digit One',
    acceptance: '28.8%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given an integer n, count the total number of digit 1 appearing in all non-negative integers less than or equal to n.</p>\n\n<p>\nFor example:<br> \nGiven n = 13,<br>\nReturn 6, because digit 1 occurred in the following numbers: 1, 10, 11, 12, 13.\n</p>\n          ',
    tags: [],
  },
  {
    id: '234',
    name: 'Palindrome Linked List',
    acceptance: '33.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a singly linked list, determine if it is a palindrome.</p>\n\n<p><b>Follow up:</b><br>\nCould you do it in O(n) time and O(1) space?</p>\n          ',
    tags: ['Facebook', 'Amazon', 'IXL'],
  },
  {
    id: '235',
    name: 'Lowest Common Ancestor of a Binary Search Tree',
    acceptance: '39.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.\n</p>\n\n<p>\nAccording to the <a href="https://en.wikipedia.org/wiki/Lowest_common_ancestor" target="_blank">definition of LCA on Wikipedia</a>: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow <b>a node to be a descendant of itself</b>).”\n</p>\n\n<pre>        _______6______\n       /              \\\n    ___2__          ___8__\n   /      \\        /      \\\n   0      _4       7       9\n         /  \\\n         3   5\n</pre>\n\n<p>\nFor example, the lowest common ancestor (LCA) of nodes <code>2</code> and <code>8</code> is <code>6</code>. Another example is LCA of nodes <code>2</code> and <code>4</code> is <code>2</code>, since a node can be a descendant of itself according to the LCA definition.</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Amazon', 'Twitter'],
  },
  {
    id: '236',
    name: 'Lowest Common Ancestor of a Binary Tree',
    acceptance: '30.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.\n</p>\n\n<p>\nAccording to the <a href="https://en.wikipedia.org/wiki/Lowest_common_ancestor" target="_blank">definition of LCA on Wikipedia</a>: “The lowest common ancestor is defined between two nodes v and w as the lowest node in T that has both v and w as descendants (where we allow <b>a node to be a descendant of itself</b>).”\n</p>\n\n<pre>        _______3______\n       /              \\\n    ___5__          ___1__\n   /      \\        /      \\\n   6      _2       0       8\n         /  \\\n         7   4\n</pre>\n\n<p>\nFor example, the lowest common ancestor (LCA) of nodes <code>5</code> and <code>1</code> is <code>3</code>. Another example is LCA of nodes <code>5</code> and <code>4</code> is <code>5</code>, since a node can be a descendant of itself according to the LCA definition.</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Amazon', 'LinkedIn', 'Apple'],
  },
  {
    id: '237',
    name: 'Delete Node in a Linked List',
    acceptance: '47.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a function to delete a node (except the tail) in a singly linked list, given only access to that node.\n</p>\n\n<p>\nSupposed the linked list is <code>1 -&gt; 2 -&gt; 3 -&gt; 4</code> and you are given the third node with value <code>3</code>, the linked list should become <code>1 -&gt; 2 -&gt; 4</code> after calling your function.\n</p>\n          ',
    tags: ['Microsoft', 'Apple', 'Adobe'],
  },
  {
    id: '238',
    name: 'Product of Array Except Self',
    acceptance: '49.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of <i>n</i> integers where <i>n</i> &gt; 1, <code>nums</code>, return an array <code>output</code> such that <code>output[i]</code> is equal to the product of all the elements of <code>nums</code> except <code>nums[i]</code>.</p>\n\n<p>Solve it <b>without division</b> and in O(<i>n</i>).</p>\n\n<p>For example, given <code>[1,2,3,4]</code>, return <code>[24,12,8,6]</code>.\n\n</p><p><b>Follow up:</b><br>\nCould you solve it with constant space complexity? (Note: The output array <b>does not</b> count as extra space for the purpose of space complexity analysis.)</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Amazon', 'LinkedIn', 'Apple'],
  },
  {
    id: '239',
    name: 'Sliding Window Maximum',
    acceptance: '33.7%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>Given an array <i>nums</i>, there is a sliding window of size <i>k</i> which is moving from the very left of the array to the very right. You can only see the <i>k</i> numbers in the window. Each time the sliding window moves right by one position.</p>\n\n<p>For example,<br>\nGiven <i>nums</i> = <code>[1,3,-1,-3,5,3,6,7]</code>, and <i>k</i> = 3.</p>\n\n<pre>Window position                Max\n---------------               -----\n[1  3  -1] -3  5  3  6  7       3\n 1 [3  -1  -3] 5  3  6  7       3\n 1  3 [-1  -3  5] 3  6  7       5\n 1  3  -1 [-3  5  3] 6  7       5\n 1  3  -1  -3 [5  3  6] 7       6\n 1  3  -1  -3  5 [3  6  7]      7\n</pre>\n\n<p>Therefore, return the max sliding window as <code>[3,3,5,5,6,7]</code>.</p>\n\n<p><b>Note: </b><br>\nYou may assume <i>k</i> is always valid, ie: 1 ≤ k ≤ input array's size for non-empty array.</p>\n\n<p><b>Follow up:</b><br>\nCould you solve it in linear time?</p>\n          ",
    tags: ['Google', 'Amazon', 'Zenefits'],
  },
  {
    id: '240',
    name: 'Search a 2D Matrix II',
    acceptance: '38.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Write an efficient algorithm that searches for a value in an <i>m</i> x <i>n</i> matrix. This matrix has the following properties:</p>\n\n<p>\n</p><ul>\n<li>Integers in each row are sorted in ascending from left to right.</li>\n<li>Integers in each column are sorted in ascending from top to bottom.</li>\n</ul>\n<p></p>\n\n<p>\nFor example,</p>\n<p>\nConsider the following matrix:\n</p>\n<pre>[\n  [1,   4,  7, 11, 15],\n  [2,   5,  8, 12, 19],\n  [3,   6,  9, 16, 22],\n  [10, 13, 14, 17, 24],\n  [18, 21, 23, 26, 30]\n]\n</pre>\n\n<p>Given <b>target</b> = <code>5</code>, return <code>true</code>.</p>\n<p>Given <b>target</b> = <code>20</code>, return <code>false</code>.</p>\n          ',
    tags: ['Google', 'Amazon', 'Apple'],
  },
  {
    id: '241',
    name: 'Different Ways to Add Parentheses',
    acceptance: '45.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a string of numbers and operators, return all possible results from computing all the different possible ways to group numbers and operators. The valid operators are <code>+</code>, <code>-</code> and <code>*</code>.</p>\n<br>\n<b>Example 1</b>\n<p>Input: <code>"2-1-1"</code>.</p> \n<pre>((2-1)-1) = 0\n(2-(1-1)) = 2</pre>\n<p>Output: <code>[0, 2]</code></p>\n<br>\n<b>Example 2</b>\n<p>Input: <code>"2*3-4*5"</code></p> \n<pre>(2*(3-(4*5))) = -34\n((2*3)-(4*5)) = -14\n((2*(3-4))*5) = -10\n(2*((3-4)*5)) = -10\n(((2*3)-4)*5) = 10</pre>\n<p>Output: <code>[-34, -14, -10, -10, 10]</code></p> \n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/mithmatt">@mithmatt</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '242',
    name: 'Valid Anagram',
    acceptance: '47.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given two strings <i>s</i> and <i>t</i>, write a function to determine if <i>t</i> is an anagram of <i>s</i>.</p> \n\n<p>For example,<br>\n<i>s</i> = "anagram", <i>t</i> = "nagaram", return true.<br>\n<i>s</i> = "rat", <i>t</i> = "car", return false.\n</p>\n\n<p><b>Note:</b><br>\nYou may assume the string contains only lowercase alphabets.</p>\n\n<p><b>Follow up:</b><br>\nWhat if the inputs contain unicode characters? How would you adapt your solution to such case?</p>\n          ',
    tags: ['Amazon', 'Uber', 'Yelp'],
  },
  {
    id: '243',
    name: 'Shortest Word Distance ',
    acceptance: '53.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a list of words and two words <i>word1</i> and <i>word2</i>, return the shortest distance between these two words in the list.</p>\n<p>For example,<br>\nAssume that words = <code>["practice", "makes", "perfect", "coding", "makes"]</code>.\n</p>\n<p>\nGiven <i>word1</i> = <code>“coding”</code>, <i>word2</i> = <code>“practice”</code>, return 3.<br>\nGiven <i>word1</i> = <code>"makes"</code>, <i>word2</i> = <code>"coding"</code>, return 1.\n</p>\n\n<p>\n<b>Note:</b><br>\nYou may assume that <i>word1</i> <b>does not equal to</b> <i>word2</i>, and <i>word1</i> and <i>word2</i> are both in the list.\n</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '244',
    name: 'Shortest Word Distance II ',
    acceptance: '40.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>This is a <b>follow up</b> of <a href="/problems/shortest-word-distance">Shortest Word Distance</a>. The only difference is now you are given the list of words and your method will be called <i>repeatedly</i> many times with different parameters. How would you optimize it?</p>\n\n<p>Design a class which receives a list of words in the constructor, and implements a method that takes two words <i>word1</i> and <i>word2</i> and return the shortest distance between these two words in the list.</p>\n\n<p>For example,<br>\nAssume that words = <code>["practice", "makes", "perfect", "coding", "makes"]</code>.\n</p>\n\n<p>\nGiven <i>word1</i> = <code>“coding”</code>, <i>word2</i> = <code>“practice”</code>, return 3.<br>\nGiven <i>word1</i> = <code>"makes"</code>, <i>word2</i> = <code>"coding"</code>, return 1.\n</p>\n\n<p>\n<b>Note:</b><br>\nYou may assume that <i>word1</i> <b>does not equal to</b> <i>word2</i>, and <i>word1</i> and <i>word2</i> are both in the list.\n</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '245',
    name: 'Shortest Word Distance III ',
    acceptance: '51.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>This is a <b>follow up</b> of <a href="/problems/shortest-word-distance">Shortest Word Distance</a>. The only difference is now <i>word1</i> could be the same as <i>word2</i>.</p>\n\n<p>Given a list of words and two words <i>word1</i> and <i>word2</i>, return the shortest distance between these two words in the list.</p>\n\n<p><i>word1</i> and <i>word2</i> may be the same and they represent two individual words in the list.</p>\n<p>For example,<br>\nAssume that words = <code>["practice", "makes", "perfect", "coding", "makes"]</code>.\n</p>\n<p>\nGiven <i>word1</i> = <code>“makes”</code>, <i>word2</i> = <code>“coding”</code>, return 1.<br>\nGiven <i>word1</i> = <code>"makes"</code>, <i>word2</i> = <code>"makes"</code>, return 3.\n</p>\n\n<p>\n<b>Note:</b><br>\nYou may assume <i>word1</i> and <i>word2</i> are both in the list.\n</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '246',
    name: 'Strobogrammatic Number ',
    acceptance: '40.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).</p>\n<p>Write a function to determine if a number is strobogrammatic. The number is represented as a string.</p>\n<p>For example, the numbers "69", "88", and "818" are all strobogrammatic.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '247',
    name: 'Strobogrammatic Number II ',
    acceptance: '40.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).</p>\n<p>Find all strobogrammatic numbers that are of length = n. </p>\n<p>For example,<br>\nGiven n = 2, return <code>["11","69","88","96"]</code>.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '248',
    name: 'Strobogrammatic Number III ',
    acceptance: '32.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>A strobogrammatic number is a number that looks the same when rotated 180 degrees (looked at upside down).</p>\n<p>Write a function to count the total strobogrammatic numbers that exist in the range of low &lt;= num &lt;= high.</p>\n<p>For example,<br>\nGiven low = "50", high = "100", return 3. Because 69, 88, and 96 are three strobogrammatic numbers.\n</p>\n\n<p><b>Note:</b><br>\nBecause the range might be a large number, the <i>low</i> and <i>high</i> numbers are represented as string.\n</p>\n          ',
    tags: [],
  },
  {
    id: '249',
    name: 'Group Shifted Strings ',
    acceptance: '43.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a string, we can "shift" each of its letter to its successive letter, for example: <code>"abc" -&gt; "bcd"</code>. We can keep "shifting" which forms the sequence:</p>\n<pre>"abc" -&gt; "bcd" -&gt; ... -&gt; "xyz"</pre>\n\n<p>Given a list of strings which contains only lowercase alphabets, group all strings that belong to the same shifting sequence.</p>\n\n<p>For example, given: <code>["abc", "bcd", "acef", "xyz", "az", "ba", "a", "z"]</code>, <br>\nA solution is:\n</p><pre>[\n  ["abc","bcd","xyz"],\n  ["az","ba"],\n  ["acef"],\n  ["a","z"]\n]</pre><p></p>\n          ',
    tags: ['Google', 'Uber'],
  },
  {
    id: '250',
    name: 'Count Univalue Subtrees ',
    acceptance: '43.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, count the number of uni-value subtrees.</p>\n<p>A Uni-value subtree means all nodes of the subtree have the same value.</p>\n\n<p>\nFor example:<br>\nGiven binary tree,<br>\n</p><pre>              5\n             / \\\n            1   5\n           / \\   \\\n          5   5   5\n</pre>\n<p></p>\n<p>\nreturn <code>4</code>.\n</p>\n          ',
    tags: [],
  },
  {
    id: '251',
    name: 'Flatten 2D Vector ',
    acceptance: '41.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nImplement an iterator to flatten a 2d vector.\n</p>\n\n<p>For example,<br>\nGiven 2d vector = \n</p><pre>[\n  [1,2],\n  [3],\n  [4,5,6]\n]\n</pre>\n<p></p>\n<p>\nBy calling <i>next</i> repeatedly until <i>hasNext</i> returns false, the order of elements returned by <i>next</i> should be: <code>[1,2,3,4,5,6]</code>.\n</p>\n\n<p>\n<b>Follow up:</b><br>\nAs an added challenge, try to code it using only <a href="http://www.cplusplus.com/reference/iterator/iterator/" target="_blank">iterators in C++</a> or <a href="http://docs.oracle.com/javase/7/docs/api/java/util/Iterator.html" target="_blank">iterators in Java</a>.\n</p>\n          ',
    tags: ['Google', 'Twitter', 'Airbnb', 'Zenefits'],
  },
  {
    id: '252',
    name: 'Meeting Rooms ',
    acceptance: '48.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array of meeting time intervals consisting of start and end times <code>[[s1,e1],[s2,e2],...]</code> (s<sub>i</sub> &lt; e<sub>i</sub>), determine if a person could attend all meetings.</p>\n\n<p>\nFor example,<br>\nGiven <code>[[0, 30],[5, 10],[15, 20]]</code>,<br>\nreturn <code>false</code>.\n</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '253',
    name: 'Meeting Rooms II ',
    acceptance: '39.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array of meeting time intervals consisting of start and end times <code>[[s1,e1],[s2,e2],...]</code> (s<sub>i</sub> &lt; e<sub>i</sub>), find the minimum number of conference rooms required.</p>\n\n<p>\nFor example,<br>\nGiven <code>[[0, 30],[5, 10],[15, 20]]</code>,<br>\nreturn <code>2</code>.\n</p>\n          ',
    tags: ['Google', 'Facebook', 'Snapchat'],
  },
  {
    id: '254',
    name: 'Factor Combinations ',
    acceptance: '43.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Numbers can be regarded as product of its factors. For example,  </p>\n<pre>8 = 2 x 2 x 2;\n  = 2 x 4.\n</pre>\n<p>Write a function that takes an integer <i>n</i> and return all possible combinations of its factors. \n</p>\n\n<p><b>Note:</b> <br>\n</p><ol>\n<li>You may assume that <i>n</i> is always positive. </li>\n<li>Factors should be greater than 1 and less than <i>n</i>.</li>\n</ol>\n<p></p>\n\n<p><b>Examples: </b><br>\n input: <code>1</code><br>\n output: <br>\n</p><pre>[]\n</pre>\ninput: <code>37</code><br>\n output: <br>\n<pre>[]\n</pre>\n input: <code>12</code><br>\n output:<br>\n<pre>[\n  [2, 6],\n  [2, 2, 3],\n  [3, 4]\n]\n</pre>\n input: <code>32</code><br>\n output:<br>\n<pre>[\n  [2, 16],\n  [2, 2, 8],\n  [2, 2, 2, 4],\n  [2, 2, 2, 2, 2],\n  [2, 4, 4],\n  [4, 8]\n]\n</pre>\n<p></p>\n          ',
    tags: ['Uber', 'LinkedIn'],
  },
  {
    id: '255',
    name: 'Verify Preorder Sequence in Binary Search Tree ',
    acceptance: '40.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array of numbers, verify whether it is the correct preorder traversal sequence of a binary search tree.</p>\n\n<p>You may assume each number in the sequence is unique.</p>\n\n<p><b>Follow up:</b><br>\nCould you do it using only constant space complexity?</p>\n          ',
    tags: ['Zenefits'],
  },
  {
    id: '256',
    name: 'Paint House ',
    acceptance: '46.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nThere are a row of <i>n</i> houses, each house can be painted with one of the three colors: red, blue or green. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.\n</p>\n<p>\nThe cost of painting each house with a certain color is represented by a <code><i>n</i> x <i>3</i></code> cost matrix. For example, <code>costs[0][0]</code> is the cost of painting house 0 with color red; <code>costs[1][2]</code> is the cost of painting house 1 with color green, and so on... Find the minimum cost to paint all houses.\n</p>\n\n<p><b>Note:</b><br>\nAll costs are positive integers.</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '257',
    name: 'Binary Tree Paths',
    acceptance: '40.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree, return all root-to-leaf paths.\n</p>\n<p>\nFor example, given the following binary tree:\n</p>\n<p>\n</p><pre>   1\n /   \\\n2     3\n \\\n  5\n</pre>\n<p></p>\n<p>\nAll root-to-leaf paths are:\n</p><pre>["1-&gt;2-&gt;5", "1-&gt;3"]</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Facebook', 'Apple'],
  },
  {
    id: '258',
    name: 'Add Digits',
    acceptance: '51.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a non-negative integer <code>num</code>, repeatedly add all its digits until the result has only one digit. \n</p>\n\n<p>\nFor example:\n</p>\n<p>\nGiven <code>num = 38</code>, the process is like: <code>3 + 8 = 11</code>, <code>1 + 1 = 2</code>. Since <code>2</code> has only one digit, return it.\n</p>\n\n<p><b>Follow up:</b><br>\nCould you do it without any loop/recursion in O(1) runtime?\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft', 'Adobe'],
  },
  {
    id: '259',
    name: '3Sum Smaller ',
    acceptance: '41.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array of <i>n</i> integers <i>nums</i> and a <i>target</i>, find the number of index triplets <code>i, j, k</code> with <code>0 &lt;= i &lt; j &lt; k &lt; n</code> that satisfy the condition <code>nums[i] + nums[j] + nums[k] &lt; target</code>.</p>\n\n<p>For example, given <i>nums</i> = <code>[-2, 0, 1, 3]</code>, and <i>target</i> = 2.</p>\n\n<p>Return 2. Because there are two triplets which sums are less than 2:</p>\n<pre>[-2, 0, 1]\n[-2, 0, 3]\n</pre>\n\n<p><b>Follow up:</b><br>\nCould you solve it in <i>O</i>(<i>n</i><sup>2</sup>) runtime?\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '260',
    name: 'Single Number III',
    acceptance: '52.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of numbers <code>nums</code>, in which exactly two elements appear only once and all the other elements appear exactly twice. Find the two elements that appear only once.\n</p>\n<p>\nFor example:\n</p>\n<p>\nGiven <code>nums = [1, 2, 1, 3, 2, 5]</code>, return <code>[3, 5]</code>.\n</p>\n<p>\n<b>Note</b>:<br>\n</p><ol>\n<li>The order of the result is not important. So in the above example, <code>[5, 3]</code> is also correct.</li>\n<li>Your algorithm should run in linear runtime complexity. Could you implement it using only constant space complexity?</li>\n</ol>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '261',
    name: 'Graph Valid Tree ',
    acceptance: '38.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code> and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.\n</p>\n\n<p>\nFor example:\n</p>\n<p>\nGiven <code>n = 5</code> and <code>edges = [[0, 1], [0, 2], [0, 3], [1, 4]]</code>, return <code>true</code>.\n</p>\n<p>\nGiven <code>n = 5</code> and <code>edges = [[0, 1], [1, 2], [2, 3], [1, 3], [1, 4]]</code>, return <code>false</code>.\n</p>\n\n<p>\n<b>Note</b>: you can assume that no duplicate edges will appear in <code>edges</code>. Since all edges are undirected, <code>[0, 1]</code> is the same as <code>[1, 0]</code> and thus will not appear together in <code>edges</code>.\n</p>\n          ',
    tags: ['Google', 'Facebook', 'Zenefits'],
  },
  {
    id: '262',
    name: 'Trips and Users',
    acceptance: '18.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThe <code>Trips</code> table holds all taxi trips. Each trip has a unique Id, while Client_Id and Driver_Id are both foreign keys to the Users_Id at the <code>Users</code> table. Status is an ENUM type of (‘completed’, ‘cancelled_by_driver’, ‘cancelled_by_client’).</p>\n\n<pre>+----+-----------+-----------+---------+--------------------+----------+\n| Id | Client_Id | Driver_Id | City_Id |        Status      |Request_at|\n+----+-----------+-----------+---------+--------------------+----------+\n| 1  |     1     |    10     |    1    |     completed      |2013-10-01|\n| 2  |     2     |    11     |    1    | cancelled_by_driver|2013-10-01|\n| 3  |     3     |    12     |    6    |     completed      |2013-10-01|\n| 4  |     4     |    13     |    6    | cancelled_by_client|2013-10-01|\n| 5  |     1     |    10     |    1    |     completed      |2013-10-02|\n| 6  |     2     |    11     |    6    |     completed      |2013-10-02|\n| 7  |     3     |    12     |    6    |     completed      |2013-10-02|\n| 8  |     2     |    12     |    12   |     completed      |2013-10-03|\n| 9  |     3     |    10     |    12   |     completed      |2013-10-03| \n| 10 |     4     |    13     |    12   | cancelled_by_driver|2013-10-03|\n+----+-----------+-----------+---------+--------------------+----------+\n</pre>\n\n<p>\nThe <code>Users</code> table holds all users. Each user has an unique Users_Id, and Role is an ENUM type of (‘client’, ‘driver’, ‘partner’).</p>\n<pre>+----------+--------+--------+\n| Users_Id | Banned |  Role  |\n+----------+--------+--------+\n|    1     |   No   | client |\n|    2     |   Yes  | client |\n|    3     |   No   | client |\n|    4     |   No   | client |\n|    10    |   No   | driver |\n|    11    |   No   | driver |\n|    12    |   No   | driver |\n|    13    |   No   | driver |\n+----------+--------+--------+\n</pre>\n\n<p>Write a SQL query to find the cancellation rate of requests made by unbanned clients between <b>Oct 1, 2013</b> and <b>Oct 3, 2013</b>. For the above tables, your SQL query should return the following rows with the cancellation rate being rounded to <i>two</i> decimal places.</p>\n<pre>+------------+-------------------+\n|     Day    | Cancellation Rate |\n+------------+-------------------+\n| 2013-10-01 |       0.33        |\n| 2013-10-02 |       0.00        |\n| 2013-10-03 |       0.50        |\n+------------+-------------------+\n</pre>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/cak1erlizhou">@cak1erlizhou</a> for contributing this question, writing the problem description and adding part of the test cases.</p>\n          ',
    tags: ['Uber'],
  },
  {
    id: '263',
    name: 'Ugly Number',
    acceptance: '39.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a program to check whether a given number is an ugly number.\n</p>\n\n<p>\nUgly numbers are positive numbers whose prime factors only include <code>2, 3, 5</code>. For example, <code>6, 8</code> are ugly while <code>14</code> is not ugly since it includes another prime factor <code>7</code>.\n</p>\n\n<p>\nNote that <code>1</code> is typically treated as an ugly number.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '264',
    name: 'Ugly Number II',
    acceptance: '33.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a program to find the <code>n</code>-th ugly number.\n</p>\n\n<p>\nUgly numbers are positive numbers whose prime factors only include <code>2, 3, 5</code>. For example, <code>1, 2, 3, 4, 5, 6, 8, 9, 10, 12</code> is the sequence of the first <code>10</code> ugly numbers.\n</p>\n\n<p>\nNote that <code>1</code> is typically treated as an ugly number, and <i>n</i> <b>does not exceed 1690</b>.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '265',
    name: 'Paint House II ',
    acceptance: '38.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThere are a row of <i>n</i> houses, each house can be painted with one of the <i>k</i> colors. The cost of painting each house with a certain color is different. You have to paint all the houses such that no two adjacent houses have the same color.\n</p>\n<p>\nThe cost of painting each house with a certain color is represented by a <code><i>n</i> x <i>k</i></code> cost matrix. For example, <code>costs[0][0]</code> is the cost of painting house 0 with color 0; <code>costs[1][2]</code> is the cost of painting house 1 with color 2, and so on... Find the minimum cost to paint all houses.\n</p>\n\n<p><b>Note:</b><br>\nAll costs are positive integers.</p>\n\n<p><b>Follow up:</b><br>\nCould you solve it in <i>O</i>(<i>nk</i>) runtime?</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '266',
    name: 'Palindrome Permutation ',
    acceptance: '57.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a string, determine if a permutation of the string could form a palindrome.</p>\n\n<p>For example,<br>\n<code>"code"</code> -&gt; False, <code>"aab"</code> -&gt; True, <code>"carerac"</code> -&gt; True.\n</p>\n          ',
    tags: ['Google', 'Bloomberg', 'Uber'],
  },
  {
    id: '267',
    name: 'Palindrome Permutation II ',
    acceptance: '32.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string <code>s</code>, return all the palindromic permutations (without duplicates) of it. Return an empty list if no palindromic permutation could be form.\n</p>\n<p>\nFor example:\n</p>\n<p>\nGiven <code>s = "aabb"</code>, return <code>["abba", "baab"]</code>.\n</p>\n<p>\nGiven <code>s = "abc"</code>, return <code>[]</code>.\n</p>\n          ',
    tags: [],
  },
  {
    id: '268',
    name: 'Missing Number',
    acceptance: '44.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array containing <i>n</i> distinct numbers taken from <code>0, 1, 2, ..., n</code>, find the one that is missing from the array.\n</p>\n\n<p><b>Example 1</b>\n</p><pre><b>Input:</b> [3,0,1]\n<b>Output:</b> 2\n</pre>\n<p></p>\n\n<p><b>Example 2</b>\n</p><pre><b>Input:</b> [9,6,4,2,3,5,7,0,1]\n<b>Output:</b> 8\n</pre>\n<p></p>\n\n<br>\n<p>\n<b>Note</b>:<br>\nYour algorithm should run in linear runtime complexity. Could you implement it using only constant extra space complexity?\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft', 'Bloomberg'],
  },
  {
    id: '269',
    name: 'Alien Dictionary ',
    acceptance: '25.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThere is a new alien language which uses the latin alphabet. \nHowever, the order among letters are unknown to you. \nYou receive a list of <b>non-empty</b> words from the dictionary, where <b>words are sorted lexicographically by the rules of this new language</b>.\nDerive the order of letters in this language.\n</p>\n\n<p>\n<b>Example 1:</b><br>\nGiven the following words in dictionary,\n</p><pre>[\n  "wrt",\n  "wrf",\n  "er",\n  "ett",\n  "rftt"\n]\n</pre>\n<p></p>\n<p>\nThe correct order is: <code>"wertf"</code>.</p>\n\n<p>\n<b>Example 2:</b><br>\nGiven the following words in dictionary,\n</p><pre>[\n  "z",\n  "x"\n]\n</pre>\n<p></p>\n<p>\nThe correct order is: <code>"zx"</code>.</p>\n\n<p>\n<b>Example 3:</b><br>\nGiven the following words in dictionary,\n</p><pre>[\n  "z",\n  "x",\n  "z"\n]\n</pre>\n<p></p>\n<p>\nThe order is invalid, so return <code>""</code>.</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume all letters are in lowercase.</li>\n<li>You may assume that if a is a prefix of b, then a must appear before b in the given dictionary.</li>\n<li>If the order is invalid, return an empty string.</li>\n<li>There may be multiple valid order of letters, return any one of them is fine.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google', 'Facebook', 'Twitter', 'Snapchat', 'Airbnb', 'Pocket Gems'],
  },
  {
    id: '270',
    name: 'Closest Binary Search Tree Value ',
    acceptance: '40.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a non-empty binary search tree and a target value, find the value in the BST that is closest to the target.\n</p>\n<p><b>Note:</b><br>\n</p><ul>\n<li>Given target value is a floating point.</li>\n<li>You are guaranteed to have only one unique value in the BST that is closest to the target.</li>\n</ul><p></p>\n          ',
    tags: ['Google', 'Microsoft', 'Snapchat'],
  },
  {
    id: '271',
    name: 'Encode and Decode Strings ',
    acceptance: '26.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nDesign an algorithm to encode <b>a list of strings</b> to <b>a string</b>. The encoded string is then sent over the network and is decoded back to the original list of strings.</p>\n\n<p>\nMachine 1 (sender) has the function:\n</p><pre>string encode(vector&lt;string&gt; strs) {\n  // ... your code\n  return encoded_string;\n}</pre>\n\nMachine 2 (receiver) has the function:\n<pre>vector&lt;string&gt; decode(string s) {\n  //... your code\n  return strs;\n}</pre>\n<p></p>\n\n<p>\nSo Machine 1 does:\n</p><pre>string encoded_string = encode(strs);</pre>\n<p></p>\n\n<p>\nand Machine 2 does:\n</p><pre>vector&lt;string&gt; strs2 = decode(encoded_string);</pre>\n<p></p>\n\n<p>\n<code>strs2</code> in Machine 2 should be the same as <code>strs</code> in Machine 1.\n</p>\n\n<p>Implement the <code>encode</code> and <code>decode</code> methods.\n</p>\n\n<p><b>Note:</b><br>\n</p><ul>\n<li>The string may contain any possible characters out of 256 valid ascii characters. Your algorithm should be generalized enough to work on any possible characters.</li>\n<li>Do not use class member/global/static variables to store states. Your encode and decode algorithms should be stateless.</li>\n<li>Do not rely on any library method such as <code>eval</code> or serialize methods. You should implement your own encode/decode algorithm.</li>\n</ul><p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '272',
    name: 'Closest Binary Search Tree Value II ',
    acceptance: '39.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a non-empty binary search tree and a target value, find <i>k</i> values in the BST that are closest to the target.\n</p>\n<p><b>Note:</b><br>\n</p><ul>\n<li>Given target value is a floating point.</li>\n<li>You may assume <i>k</i> is always valid, that is: <i>k</i> ≤ total nodes.</li>\n<li>You are guaranteed to have only one unique set of <i>k</i> values in the BST that are closest to the target.</li>\n</ul><p></p>\n<p><b>Follow up:</b><br>\nAssume that the BST is balanced, could you solve it in less than <i>O</i>(<i>n</i>) runtime (where <i>n</i> = total nodes)?\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '273',
    name: 'Integer to English Words',
    acceptance: '22.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nConvert a non-negative integer to its english words representation. Given input is guaranteed to be less than 2<sup>31</sup> - 1.\n</p>\n\n<p>For example,<br>\n</p><pre>123 -&gt; "One Hundred Twenty Three"\n12345 -&gt; "Twelve Thousand Three Hundred Forty Five"\n1234567 -&gt; "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"</pre><p></p>\n          ',
    tags: ['Facebook', 'Microsoft'],
  },
  {
    id: '274',
    name: 'H-Index',
    acceptance: '33.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of citations (each citation is a non-negative integer) of a researcher, write a function to compute the researcher\'s h-index.\n</p>\n\n<p>\nAccording to the <a href="https://en.wikipedia.org/wiki/H-index" target="_blank">definition of h-index on Wikipedia</a>: "A scientist has index <i>h</i> if <i>h</i> of his/her <i>N</i> papers have <b>at least</b> <i>h</i> citations each, and the other <i>N − h</i> papers have <b>no more than</b> <i>h</i> citations each."\n</p>\n\n<p>\nFor example, given <code>citations = [3, 0, 6, 1, 5]</code>, which means the researcher has <code>5</code> papers in total and each of them had received <code>3, 0, 6, 1, 5</code> citations respectively. Since the researcher has <code>3</code> papers with <b>at least</b> <code>3</code> citations each and the remaining two with <b>no more than</b> <code>3</code> citations each, his h-index is <code>3</code>.\n</p>\n\n<p>\n<b>Note</b>: If there are several possible values for <code>h</code>, the maximum one is taken as the h-index.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Facebook', 'Bloomberg'],
  },
  {
    id: '275',
    name: 'H-Index II',
    acceptance: '34.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\n<b>Follow up</b> for <a href="/problems/h-index/" target="_blank">H-Index</a>: What if the <code>citations</code> array is sorted in ascending order? Could you optimize your algorithm?\n</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '276',
    name: 'Paint Fence ',
    acceptance: '34.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nThere is a fence with n posts, each post can be painted with one of the k colors.</p>\n<p>You have to paint all the posts such that no more than two adjacent fence posts have the same color. </p>\n<p>Return the total number of ways you can paint the fence. </p>\n\n<p><b>Note:</b><br>\nn and k are non-negative integers. </p>\n          ',
    tags: ['Google'],
  },
  {
    id: '277',
    name: 'Find the Celebrity ',
    acceptance: '35.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nSuppose you are at a party with <code>n</code> people (labeled from <code>0</code> to <code>n - 1</code>) and among them, there may exist one celebrity. The definition of a celebrity is that all the other <code>n - 1</code> people know him/her but he/she does not know any of them.\n</p>\n\n<p>\nNow you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).\n</p>\n\n<p>\nYou are given a helper function <code>bool knows(a, b)</code> which tells you whether A knows B. Implement a function <code>int findCelebrity(n)</code>, your function should minimize the number of calls to <code>knows</code>.\n</p>\n\n<p>\n<b>Note</b>: There will be exactly one celebrity if he/she is in the party. Return the celebrity\'s label if there is a celebrity in the party. If there is no celebrity, return <code>-1</code>.\n</p>\n          ',
    tags: ['Facebook', 'LinkedIn'],
  },
  {
    id: '278',
    name: 'First Bad Version',
    acceptance: '25.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nYou are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad. \n</p>\n\n<p>\nSuppose you have <code>n</code> versions <code>[1, 2, ..., n]</code> and you want to find out the first bad one, which causes all the following ones to be bad.\n</p>\n\n<p>\nYou are given an API <code>bool isBadVersion(version)</code> which will return whether <code>version</code> is bad. Implement a function to find the first bad version. You should minimize the number of calls to the API.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '279',
    name: 'Perfect Squares',
    acceptance: '37.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a positive integer <i>n</i>, find the least number of perfect square numbers (for example, <code>1, 4, 9, 16, ...</code>) which sum to <i>n</i>.\n</p>\n\n<p>\nFor example, given <i>n</i> = <code>12</code>, return <code>3</code> because <code>12 = 4 + 4 + 4</code>; given <i>n</i> = <code>13</code>, return <code>2</code> because <code>13 = 4 + 9</code>.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '280',
    name: 'Wiggle Sort ',
    acceptance: '58.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an unsorted array <code>nums</code>, reorder it <b>in-place</b> such that <code>nums[0] &lt;= nums[1] &gt;= nums[2] &lt;= nums[3]...</code>.\n</p>\n<p>\nFor example, given <code>nums = [3, 5, 2, 1, 6, 4]</code>, one possible answer is <code>[1, 6, 2, 5, 3, 4]</code>.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '281',
    name: 'Zigzag Iterator ',
    acceptance: '51.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two 1d vectors, implement an iterator to return their elements alternately.\n</p>\n\n<p>For example, given two 1d vectors:\n</p><pre>v1 = [1, 2]\nv2 = [3, 4, 5, 6]\n</pre>\n<p></p>\n<p>\nBy calling <i>next</i> repeatedly until <i>hasNext</i> returns <code>false</code>, the order of elements returned by <i>next</i> should be: <code>[1, 3, 2, 4, 5, 6]</code>.\n</p>\n\n<p>\n<b>Follow up</b>: What if you are given <code>k</code> 1d vectors? How well can your code be extended to such cases?</p>\n\n<p>\n<b><u>Clarification for the follow up question - <font color="red">Update (2015-09-18):</font></u></b><br>\nThe "Zigzag" order is not clearly defined and is ambiguous for <code>k &gt; 2</code> cases. If "Zigzag" does not look right to you, replace "Zigzag" with "Cyclic". For example, given the following input:\n</p><pre>[1,2,3]\n[4,5,6,7]\n[8,9]\n</pre>\nIt should return <code>[1,4,8,2,5,9,3,6,7]</code>.\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '282',
    name: 'Expression Add Operators',
    acceptance: '30.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string that contains only digits <code>0-9</code> and a target value, return all possibilities to add <b>binary</b> operators (not unary) <code>+</code>, <code>-</code>, or <code>*</code> between the digits so they evaluate to the target value.\n</p>\n<p>\nExamples: <br>\n</p><pre>"123", 6 -&gt; ["1+2+3", "1*2*3"] \n"232", 8 -&gt; ["2*3+2", "2+3*2"]\n"105", 5 -&gt; ["1*0+5","10-5"]\n"00", 0 -&gt; ["0+0", "0-0", "0*0"]\n"3456237490", 9191 -&gt; []\n</pre>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/davidtan1890">@davidtan1890</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Facebook'],
  },
  {
    id: '283',
    name: 'Move Zeroes',
    acceptance: '50.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array <code>nums</code>, write a function to move all <code>0</code>\'s to the end of it while maintaining the relative order of the non-zero elements.\n</p>\n\n<p>\nFor example, given <code>nums  = [0, 1, 0, 3, 12]</code>, after calling your function, <code>nums</code> should be <code>[1, 3, 12, 0, 0]</code>.\n</p>\n\n<p>\n<b>Note</b>:<br>\n</p><ol>\n<li>You must do this <b>in-place</b> without making a copy of the array.</li>\n<li>Minimize the total number of operations.</li>\n</ol>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Facebook', 'Bloomberg'],
  },
  {
    id: '284',
    name: 'Peeking Iterator',
    acceptance: '35.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an Iterator class interface with methods: <code>next()</code> and <code>hasNext()</code>, design and implement a PeekingIterator that support the <code>peek()</code> operation -- it essentially peek() at the element that will be returned by the next call to next().</p>\n\n<hr>\n<p>Here is an example. Assume that the iterator is initialized to the beginning of the list: <code>[1, 2, 3]</code>.</p>\n\n<p>Call <code>next()</code> gets you 1, the first element in the list.</p>\n\n<p>Now you call <code>peek()</code> and it returns 2, the next element. Calling <code>next()</code> after that <i><b>still</b></i> return 2.</p>\n\n<p>You call <code>next()</code> the final time and it returns 3, the last element. Calling <code>hasNext()</code> after that should return false.</p>\n\n<p>\n<b>Follow up</b>: How would you extend your design to be generic and work with all types, not just integer?</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/porker2008">@porker2008</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Apple', 'Yahoo'],
  },
  {
    id: '285',
    name: 'Inorder Successor in BST ',
    acceptance: '36.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary search tree and a node in it, find the in-order successor of that node in the BST.\n</p>\n\n<p>\n<b>Note</b>: If the given node has no in-order successor in the tree, return <code>null</code>.\n</p>\n          ',
    tags: ['Facebook', 'Microsoft', 'Pocket Gems'],
  },
  {
    id: '286',
    name: 'Walls and Gates ',
    acceptance: '45.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYou are given a <i>m x n</i> 2D grid initialized with these three possible values.</p>\n\n<ol>\n<li><code>-1</code> - A wall or an obstacle.</li>\n<li><code>0</code> - A gate.</li>\n<li><code>INF</code> - Infinity means an empty room. We use the value <code>2<sup>31</sup> - 1 = 2147483647</code> to represent <code>INF</code> as you may assume that the distance to a gate is less than <code>2147483647</code>.</li>\n</ol>\n\n<p>\nFill each empty room with the distance to its <i>nearest</i> gate. If it is impossible to reach a gate, it should be filled with <code>INF</code>.</p>\n\n<p>\nFor example, given the 2D grid:<br>\n</p><pre>INF  -1  0  INF\nINF INF INF  -1\nINF  -1 INF  -1\n  0  -1 INF INF</pre>\n<p></p>\n\n<p>\nAfter running your function, the 2D grid should be:<br>\n</p><pre>  3  -1   0   1\n  2   2   1  -1\n  1  -1   2  -1\n  0  -1   3   4</pre>\n<p></p>\n          ',
    tags: ['Google', 'Facebook'],
  },
  {
    id: '287',
    name: 'Find the Duplicate Number',
    acceptance: '43.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array <i>nums</i> containing <i>n</i> + 1 integers where each integer is between 1 and <i>n</i> (inclusive), prove that at least one duplicate number must exist. Assume that there is only one duplicate number, find the duplicate one.\n</p>\n\n<p>\n<b>Note:</b><br>\n</p><ol>\n<li>You <b>must not</b> modify the array (assume the array is read only).</li>\n<li>You must use only constant, <i>O</i>(1) extra space.</li>\n<li>Your runtime complexity should be less than <code>O(n<sup>2</sup>)</code>.</li>\n<li>There is only one duplicate number in the array, but it could be repeated more than once.</li>\n</ol>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '288',
    name: 'Unique Word Abbreviation ',
    acceptance: '17.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>An abbreviation of a word follows the form &lt;first letter&gt;&lt;number&gt;&lt;last letter&gt;. Below are some examples of word abbreviations:\n</p><pre>a) it                      --&gt; it    (no abbreviation)\n\n     1\nb) d|o|g                   --&gt; d1g\n\n              1    1  1\n     1---5----0----5--8\nc) i|nternationalizatio|n  --&gt; i18n\n\n              1\n     1---5----0\nd) l|ocalizatio|n          --&gt; l10n\n</pre>\n\n<p>Assume you have a dictionary and given a word, find whether its abbreviation is unique in the dictionary. A word\'s abbreviation is unique if no <i>other</i> word from the dictionary has the same abbreviation.</p>\n\n<p>Example: <br>\n</p><pre>Given dictionary = [ "deer", "door", "cake", "card" ]\n\nisUnique("dear") -&gt; <code>false</code>\nisUnique("cart") -&gt; <code>true</code>\nisUnique("cane") -&gt; <code>false</code>\nisUnique("make") -&gt; <code>true</code>\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '289',
    name: 'Game of Life',
    acceptance: '37.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nAccording to the <a href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life" target="_blank">Wikipedia\'s article</a>: "The <b>Game of Life</b>, also known simply as <b>Life</b>, is a cellular automaton devised by the British mathematician John Horton Conway in 1970."\n</p>\n\n<p>\nGiven a <i>board</i> with <i>m</i> by <i>n</i> cells, each cell has an initial state <i>live</i> (1) or <i>dead</i> (0). Each cell interacts with its <a href="https://en.wikipedia.org/wiki/Moore_neighborhood" target="_blank">eight neighbors</a> (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):\n</p>\n\n<p>\n</p><ol>\n<li>Any live cell with fewer than two live neighbors dies, as if caused by under-population.</li>\n<li>Any live cell with two or three live neighbors lives on to the next generation.</li>\n<li>Any live cell with more than three live neighbors dies, as if by over-population..</li>\n<li>Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.</li>\n</ol>\n<p></p>\n\n<p>\nWrite a function to compute the next state (after one update) of the board given its current state.</p>\n\n<p>\n<b>Follow up</b>: <br>\n</p><ol>\n<li>Could you solve it in-place? Remember that the board needs to be updated at the same time: You cannot update some cells first and then use their updated values to update other cells.</li>\n<li>In this question, we represent the board using a 2D array. In principle, the board is infinite, which would cause problems when the active area encroaches the border of the array. How would you address these problems?</li>\n</ol>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Snapchat', 'Dropbox', 'Two Sigma'],
  },
  {
    id: '290',
    name: 'Word Pattern',
    acceptance: '33.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a <code>pattern</code> and a string <code>str</code>, find if <code>str</code> follows the same pattern.</p>\n<p> Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> word in <code>str</code>.</p>\n<p>\n<b>Examples:</b><br>\n</p><ol>\n<li>pattern = <code>"abba"</code>, str = <code>"dog cat cat dog"</code> should return true.</li>\n<li>pattern = <code>"abba"</code>, str = <code>"dog cat cat fish"</code> should return false.</li>\n<li>pattern = <code>"aaaa"</code>, str = <code>"dog cat cat dog"</code> should return false.</li>\n<li>pattern = <code>"abba"</code>, str = <code>"dog dog dog dog"</code> should return false.</li>\n</ol>\n<p></p>\n\n<p>\n<b>Notes:</b><br>\nYou may assume <code>pattern</code> contains only lowercase letters, and <code>str</code> contains lowercase letters separated by a single space.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/minglotus6">@minglotus6</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Uber', 'Dropbox'],
  },
  {
    id: '291',
    name: 'Word Pattern II ',
    acceptance: '38.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a <code>pattern</code> and a string <code>str</code>, find if <code>str</code> follows the same pattern.</p>\n<p> Here <b>follow</b> means a full match, such that there is a bijection between a letter in <code>pattern</code> and a <b>non-empty</b> substring in <code>str</code>.</p>\n<p>\n<b>Examples:</b><br>\n</p><ol>\n<li>pattern = <code>"abab"</code>, str = <code>"redblueredblue"</code> should return true.</li>\n<li>pattern = <code>"aaaa"</code>, str = <code>"asdasdasdasd"</code> should return true.</li>\n<li>pattern = <code>"aabb"</code>, str = <code>"xyzabcxzyabc"</code> should return false.</li>\n</ol>\n<p></p>\n\n<p>\n<b>Notes:</b><br>\nYou may assume both <code>pattern</code> and <code>str</code> contains only lowercase letters.\n</p>\n          ',
    tags: ['Uber', 'Dropbox'],
  },
  {
    id: '292',
    name: 'Nim Game',
    acceptance: '55.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nYou are playing the following Nim Game with your friend: There is a heap of stones on the table, each time one of you take turns to remove 1 to 3 stones. The one who removes the last stone will be the winner. You will take the first turn to remove the stones.\n</p>\n\n<p>\nBoth of you are very clever and have optimal strategies for the game. Write a function to determine whether you can win the game given the number of stones in the heap.\n</p>\n\n<p>\nFor example, if there are 4 stones in the heap, then you will never win the game: no matter 1, 2, or 3 stones you remove, the last stone will always be removed by your friend.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Adobe'],
  },
  {
    id: '293',
    name: 'Flip Game ',
    acceptance: '56.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nYou are playing the following Flip Game with your friend: Given a string that contains only these two characters: <code>+</code> and <code>-</code>, you and your friend take turns to flip two <b>consecutive</b> <code>"++"</code> into <code>"--"</code>. The game ends when a person can no longer make a move and therefore the other person will be the winner.\n</p>\n\n<p>\nWrite a function to compute all possible states of the string after one valid move.\n</p>\n\n<p>\nFor example, given <code>s = "++++"</code>, after one move, it may become one of the following states:\n</p><pre>[\n  "--++",\n  "+--+",\n  "++--"\n]\n</pre>\n<p></p>\n\n<p>\nIf there is no valid move, return an empty list <code>[]</code>.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '294',
    name: 'Flip Game II ',
    acceptance: '46.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYou are playing the following Flip Game with your friend: Given a string that contains only these two characters: <code>+</code> and <code>-</code>, you and your friend take turns to flip two <b>consecutive</b> <code>"++"</code> into <code>"--"</code>. The game ends when a person can no longer make a move and therefore the other person will be the winner.\n</p>\n\n<p>\nWrite a function to determine if the starting player can guarantee a win.\n</p>\n\n<p>\nFor example, given <code>s = "++++"</code>, return true. The starting player can guarantee a win by flipping the middle <code>"++"</code> to become <code>"+--+"</code>.\n</p>\n\n<p><b>Follow up:</b><br>\nDerive your algorithm\'s runtime complexity.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '295',
    name: 'Find Median from Data Stream',
    acceptance: '28.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.</p>\nExamples: <br>\n<p><code>[2,3,4]</code> , the median is <code>3</code></p>\n<p><code>[2,3]</code>, the median is <code>(2 + 3) / 2 = 2.5</code> </p>\n\n<p>\nDesign a data structure that supports the following two operations:\n</p>\n<ul>\n<li>void addNum(int num) - Add a integer number from the data stream to the data structure.</li>\n<li>double findMedian() - Return the median of all elements so far.</li>\n</ul>\n\n<p>\nFor example:</p>\n<pre>addNum(1)\naddNum(2)\nfindMedian() -&gt; 1.5\naddNum(3) \nfindMedian() -&gt; 2\n</pre>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/Louis1992">@Louis1992</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '296',
    name: 'Best Meeting Point ',
    acceptance: '52.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>A group of two or more people wants to meet and minimize the total travel distance. You are given a 2D grid of values 0 or 1, where each 1 marks the home of someone in the group. The distance is calculated using <a href="http://en.wikipedia.org/wiki/Taxicab_geometry" target="_blank">Manhattan Distance</a>, where distance(p1, p2) = <code>|p2.x - p1.x| + |p2.y - p1.y|</code>.</p>\n\n<p>For example, given three people living at <code>(0,0)</code>, <code>(0,4)</code>, and <code>(2,2)</code>:</p>\n\n<pre>1 - 0 - 0 - 0 - 1\n|   |   |   |   |\n0 - 0 - 0 - 0 - 0\n|   |   |   |   |\n0 - 0 - 1 - 0 - 0</pre>\n\n<p>The point <code>(0,2)</code> is an ideal meeting point, as the total travel distance of 2+2+2=6 is minimal. So return 6.</p>\n          ',
    tags: ['Twitter'],
  },
  {
    id: '297',
    name: 'Serialize and Deserialize Binary Tree',
    acceptance: '34.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. </p>\n\n<p>Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.</p>\n\n<p>\nFor example, you may serialize the following tree\n</p><pre>    1\n   / \\\n  2   3\n     / \\\n    4   5\n</pre>\nas <code>"[1,2,3,null,null,4,5]"</code>, just the same as <a href="https://leetcode.com/faq/#binary-tree">how LeetCode OJ serializes a binary tree</a>. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.\n<p></p>\n\n<p>\n<b>Note:</b> Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/Louis1992">@Louis1992</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Facebook', 'Microsoft', 'Amazon', 'Bloomberg', 'Uber', 'LinkedIn', 'Yahoo'],
  },
  {
    id: '298',
    name: 'Binary Tree Longest Consecutive Sequence ',
    acceptance: '41.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree, find the length of the longest consecutive sequence path.\n</p><p>\n</p><p>\nThe path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path need to be from parent to child (cannot be the reverse).\n</p>\n\n<p>\nFor example,<br>\n</p><pre>   1\n    \\\n     3\n    / \\\n   2   4\n        \\\n         5\n</pre>\nLongest consecutive sequence path is <code>3-4-5</code>, so return <code>3</code>. \n<pre>   2\n    \\\n     3\n    / \n   2    \n  / \n 1\n</pre>\nLongest consecutive sequence path is <code>2-3</code>,not<code>3-2-1</code>, so return <code>2</code>.\n\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '299',
    name: 'Bulls and Cows',
    acceptance: '35.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>You are playing the following <a href="https://en.wikipedia.org/wiki/Bulls_and_Cows" target="_blank">Bulls and Cows</a> game with your friend: You write down a number and ask your friend to guess what the number is. Each time your friend makes a guess, you provide a hint that indicates how many digits in said guess match your secret number exactly in both digit and position (called "bulls") and how many digits match the secret number but locate in the wrong position (called "cows"). Your friend will use successive guesses and hints to eventually derive the secret number.</p>\n\n<p>\nFor example:\n</p><pre>Secret number:  "1807"\nFriend\'s guess: "7810"\n</pre>\nHint: <code>1</code> bull and <code>3</code> cows. (The bull is <code>8</code>, the cows are <code>0</code>, <code>1</code> and <code>7</code>.)\n<p></p>\n\n<p>Write a function to return a hint according to the secret number and friend\'s guess, use <code>A</code> to indicate the bulls and <code>B</code> to indicate the cows. In the above example, your function should return <code>"1A3B"</code>. </p>\n\n<p>Please note that both secret number and friend\'s guess may contain duplicate digits, for example:\n</p><pre>Secret number:  "1123"\nFriend\'s guess: "0111"\n</pre>\nIn this case, the 1st <code>1</code> in friend\'s guess is a bull, the 2nd or 3rd <code>1</code> is a cow, and your function should return <code>"1A1B"</code>.\n<p></p>\n\n<p>You may assume that the secret number and your friend\'s guess only contain digits, and their lengths are always equal.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jeantimex">@jeantimex</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '300',
    name: 'Longest Increasing Subsequence',
    acceptance: '38.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an unsorted array of integers, find the length of longest increasing subsequence.\n</p>\n<p>\nFor example,<br>\nGiven <code>[10, 9, 2, 5, 3, 7, 101, 18]</code>,<br>\nThe longest increasing subsequence is <code>[2, 3, 7, 101]</code>, therefore the length is <code>4</code>. Note that there may be more than one LIS combination, it is only necessary for you to return the length.\n</p>\n<p>\nYour algorithm should run in O(<i>n<sup>2</sup></i>) complexity.\n</p>\n\n<p><b>Follow up:</b> Could you improve it to O(<i>n</i> log <i>n</i>) time complexity? </p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/pbrother">@pbrother</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '301',
    name: 'Remove Invalid Parentheses',
    acceptance: '35.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nRemove the minimum number of invalid parentheses in order to make the input string valid. Return all possible results.</p>\n\n<p>Note: The input string may contain letters other than the parentheses <code>(</code> and <code>)</code>. \n</p>\n\n<p>\n<b>Examples:</b><br>\n</p><pre>"()())()" -&gt; ["()()()", "(())()"]\n"(a)())()" -&gt; ["(a)()()", "(a())()"]\n")(" -&gt; [""]\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/hpplayer">@hpplayer</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '302',
    name: 'Smallest Rectangle Enclosing Black Pixels ',
    acceptance: '46.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>An image is represented by a binary matrix with <code>0</code> as a white pixel and <code>1</code> as a black pixel. The black pixels are connected, i.e., there is only one black region. Pixels are connected horizontally and vertically. Given the location <code>(x, y)</code> of one of the black pixels, return the area of the smallest (axis-aligned) rectangle that encloses all black pixels.</p>\n\n<p>\nFor example, given the following image:\n</p><pre>[\n  "0010",\n  "0110",\n  "0100"\n]\n</pre>\nand <code>x = 0</code>, <code>y = 2</code>,\n<p></p>\n\n<p>\nReturn <code>6</code>.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '303',
    name: 'Range Sum Query - Immutable',
    acceptance: '31.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an integer array <i>nums</i>, find the sum of the elements between indices <i>i</i> and <i>j</i> (<i>i</i> ≤ <i>j</i>), inclusive.</p>\n\n<p><b>Example:</b><br>\n</p><pre>Given nums = [-2, 0, 3, -5, 2, -1]\n\nsumRange(0, 2) -&gt; 1\nsumRange(2, 5) -&gt; -1\nsumRange(0, 5) -&gt; -3\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume that the array does not change.</li>\n<li>There are many calls to <i>sumRange</i> function.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Palantir'],
  },
  {
    id: '304',
    name: 'Range Sum Query 2D - Immutable',
    acceptance: '26.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a 2D matrix <i>matrix</i>, find the sum of the elements inside the rectangle defined by its upper left corner (<i>row</i>1, <i>col</i>1) and lower right corner (<i>row</i>2, <i>col</i>2).</p>\n\n<p>\n<img src="/static/images/courses/range_sum_query_2d.png" border="0" alt="Range Sum Query 2D"><br>\n<small>The above rectangle (with the red border) is defined by (row1, col1) = <b>(2, 1)</b> and (row2, col2) = <b>(4, 3)</b>, which contains sum = <b>8</b>.</small>\n</p>\n\n<p><b>Example:</b><br>\n</p><pre>Given matrix = [\n  [3, 0, 1, 4, 2],\n  [5, 6, 3, 2, 1],\n  [1, 2, 0, 1, 5],\n  [4, 1, 0, 1, 7],\n  [1, 0, 3, 0, 5]\n]\n\nsumRegion(2, 1, 4, 3) -&gt; 8\nsumRegion(1, 1, 2, 2) -&gt; 11\nsumRegion(1, 2, 2, 4) -&gt; 12\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume that the matrix does not change.</li>\n<li>There are many calls to <i>sumRegion</i> function.</li>\n<li>You may assume that <i>row</i>1 ≤ <i>row</i>2 and <i>col</i>1 ≤ <i>col</i>2.</li>\n</ol>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '305',
    name: 'Number of Islands II ',
    acceptance: '39.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>A 2d grid map of <code>m</code> rows and <code>n</code> columns is initially filled with water.\nWe may perform an <i>addLand</i> operation which turns the water at position (row, col) into a land.\nGiven a list of positions to operate, <b>count the number of islands after each <i>addLand</i> operation</b>.\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.\nYou may assume all four edges of the grid are all surrounded by water.</p>\n\n<p><b>Example:</b></p>\n<p>Given <code>m = 3, n = 3</code>, <code>positions = [[0,0], [0,1], [1,2], [2,1]]</code>.<br>\nInitially, the 2d grid <code>grid</code> is filled with water. (Assume 0 represents water and 1 represents land).</p>\n<pre>0 0 0\n0 0 0\n0 0 0\n</pre>\n<p>Operation #1: addLand(0, 0) turns the water at grid[0][0] into a land.</p>\n<pre>1 0 0\n0 0 0   Number of islands = 1\n0 0 0\n</pre>\n<p>Operation #2: addLand(0, 1) turns the water at grid[0][1] into a land.</p>\n<pre>1 1 0\n0 0 0   Number of islands = 1\n0 0 0\n</pre>\n<p>Operation #3: addLand(1, 2) turns the water at grid[1][2] into a land.</p>\n<pre>1 1 0\n0 0 1   Number of islands = 2\n0 0 0\n</pre>\n<p>Operation #4: addLand(2, 1) turns the water at grid[2][1] into a land.</p>\n<pre>1 1 0\n0 0 1   Number of islands = 3\n0 1 0\n</pre>\n<p>We return the result as an array: <code>[1, 1, 2, 3]</code></p>\n\n<p><b>Challenge:</b></p>\n<p>Can you do it in time complexity O(k log mn), where k is the length of the <code>positions</code>?</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '306',
    name: 'Additive Number',
    acceptance: '27.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Additive number is a string whose digits can form additive sequence.</p>\n\n<p>A valid additive sequence should contain <b>at least</b> three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.</p>\n\n<p>\nFor example:<br>\n<code>"112358"</code> is an additive number because the digits can form an additive sequence: <code>1, 1, 2, 3, 5, 8</code>.\n</p><pre>1 + 1 = 2, 1 + 2 = 3, 2 + 3 = 5, 3 + 5 = 8</pre>\n<code>"199100199"</code> is also an additive number, the additive sequence is: <code>1, 99, 100, 199</code>.\n<pre>1 + 99 = 100, 99 + 100 = 199</pre>\n<p></p>\n\n<p>\n<b>Note:</b> Numbers in the additive sequence <b>cannot</b> have leading zeros, so sequence <code>1, 2, 03</code> or <code>1, 02, 3</code> is invalid.\n</p>\n\n<p>Given a string containing only digits <code>\'0\'-\'9\'</code>, write a function to determine if it\'s an additive number.</p>\n\n<p>\n<b>Follow up:</b><br>\nHow would you handle overflow for very large input integers?\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jeantimex">@jeantimex</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Epic Systems'],
  },
  {
    id: '307',
    name: 'Range Sum Query - Mutable',
    acceptance: '21.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an integer array <i>nums</i>, find the sum of the elements between indices <i>i</i> and <i>j</i> (<i>i</i> ≤ <i>j</i>), inclusive.</p>\n\nThe <i>update(i, val)</i> function modifies <i>nums</i> by updating the element at index <i>i</i> to <i>val</i>.\n\n<p><b>Example:</b><br>\n</p><pre>Given nums = [1, 3, 5]\n\nsumRange(0, 2) -&gt; 9\nupdate(1, 2)\nsumRange(0, 2) -&gt; 8\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The array is only modifiable by the <i>update</i> function.</li>\n<li>You may assume the number of calls to <i>update</i> and <i>sumRange</i> function is distributed evenly.</li>\n</ol>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '308',
    name: 'Range Sum Query 2D - Mutable ',
    acceptance: '24.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a 2D matrix <i>matrix</i>, find the sum of the elements inside the rectangle defined by its upper left corner (<i>row</i>1, <i>col</i>1) and lower right corner (<i>row</i>2, <i>col</i>2).</p>\n\n<p>\n<img src="/static/images/courses/range_sum_query_2d.png" border="0" alt="Range Sum Query 2D"><br>\n<small>The above rectangle (with the red border) is defined by (row1, col1) = <b>(2, 1)</b> and (row2, col2) = <b>(4, 3)</b>, which contains sum = <b>8</b>.</small>\n</p>\n\n<p><b>Example:</b><br>\n</p><pre>Given matrix = [\n  [3, 0, 1, 4, 2],\n  [5, 6, 3, 2, 1],\n  [1, 2, 0, 1, 5],\n  [4, 1, 0, 1, 7],\n  [1, 0, 3, 0, 5]\n]\n\nsumRegion(2, 1, 4, 3) -&gt; 8\nupdate(3, 2, 2)\nsumRegion(2, 1, 4, 3) -&gt; 10\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The matrix is only modifiable by the <i>update</i> function.</li>\n<li>You may assume the number of calls to <i>update</i> and <i>sumRegion</i> function is distributed evenly.</li>\n<li>You may assume that <i>row</i>1 ≤ <i>row</i>2 and <i>col</i>1 ≤ <i>col</i>2.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '309',
    name: 'Best Time to Buy and Sell Stock with Cooldown',
    acceptance: '41.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Say you have an array for which the <i>i</i><sup>th</sup> element is the price of a given stock on day <i>i</i>.</p>\n\n<p>Design an algorithm to find the maximum profit. You may complete as many transactions as you like\n(ie, buy one and sell one share of the stock multiple times) with the following restrictions:</p>\n\n<ul>\n    <li>You may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).</li>\n    <li>After you sell your stock, you cannot buy stock on next day. (ie, cooldown 1 day)</li>\n</ul>\n\n<p><b>Example:</b><br></p>\n<pre>prices = [1, 2, 3, 0, 2]\nmaxProfit = 3\ntransactions = [buy, sell, cooldown, buy, sell]\n</pre>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '310',
    name: 'Minimum Height Trees',
    acceptance: '28.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\n    For a undirected graph with tree characteristics, we can choose any node as the root. The result graph is then a rooted tree. Among all possible rooted trees, those with minimum height are called minimum height trees (MHTs).\n    Given such a graph, write a function to find all the MHTs and return a list of their root labels.\n</p>\n\n<p>\n    <b>Format</b><br>\n    The graph contains <code>n</code> nodes which are labeled from <code>0</code> to <code>n - 1</code>.\n    You will be given the number <code>n</code> and a list of undirected <code>edges</code> (each edge is a pair of labels).\n</p>\n<p> \nYou can assume that no duplicate edges will appear in <code>edges</code>. Since all edges are\n    undirected, <code>[0, 1]</code> is the same as <code>[1, 0]</code> and thus will not appear together in\n    <code>edges</code>.\n</p>\n<p>\n    <b>Example 1:</b>\n</p>\n<p>\n    Given <code>n = 4</code>, <code>edges = [[1, 0], [1, 2], [1, 3]]</code>\n</p>\n\n<pre>        0\n        |\n        1\n       / \\\n      2   3\n</pre>\n<p>\n    return <code> [1]</code>\n</p>\n\n<p>\n    <b>Example 2:</b>\n</p>\n<p>\n    Given <code>n = 6</code>, <code>edges = [[0, 3], [1, 3], [2, 3], [4, 3], [5, 4]]</code>\n</p>\n<pre>     0  1  2\n      \\ | /\n        3\n        |\n        4\n        |\n        5\n</pre>\n<p>\n    return <code> [3, 4]</code>\n</p>\n\n<p>\n    <b>Note</b>:\n</p>\n<p>\n    (1) According to the <a href="https://en.wikipedia.org/wiki/Tree_(graph_theory)" target="_blank">definition\n    of tree on Wikipedia</a>: “a tree is an undirected graph in which any two vertices are connected by\n    <i>exactly</i> one path. In other words, any connected graph without simple cycles is a tree.”\n</p>\n<p>\n    (2) The height of a rooted tree is the number of edges on the longest downward path between the root and a\n    leaf.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '311',
    name: 'Sparse Matrix Multiplication ',
    acceptance: '52.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given two <a href="https://en.wikipedia.org/wiki/Sparse_matrix" target="_blank">sparse matrices</a> <b>A</b> and <b>B</b>, return the result of <b>AB</b>.</p>\n\n<p>You may assume that <b>A</b>\'s column number is equal to <b>B</b>\'s row number.</p>\n\n<p><b>Example:</b></p>\n\n<pre><b>A</b> = [\n  [ 1, 0, 0],\n  [-1, 0, 3]\n]\n\n<b>B</b> = [\n  [ 7, 0, 0 ],\n  [ 0, 0, 0 ],\n  [ 0, 0, 1 ]\n]\n\n\n     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |\n<b>AB</b> = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |\n                  | 0 0 1 |\n</pre>\n          ',
    tags: ['Facebook', 'LinkedIn'],
  },
  {
    id: '312',
    name: 'Burst Balloons',
    acceptance: '43.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\n    Given <code>n</code> balloons, indexed from <code>0</code> to <code>n-1</code>. Each balloon is painted with a\n    number on it represented by array <code>nums</code>.\n\n    You are asked to burst all the balloons. If the you burst\n    balloon <code>i</code> you will get <code>nums[left] * nums[i] * nums[right]</code> coins. Here <code>left</code>\n    and <code>right</code> are adjacent indices of <code>i</code>. After the burst, the <code>left</code> and <code>right</code>\n    then becomes adjacent.\n</p>\n<p>\n    Find the maximum coins you can collect by bursting the balloons wisely.\n</p>\n<p>\n    <b>Note:</b> <br>\n    (1) You may imagine <code>nums[-1] = nums[n] = 1</code>. They are not real therefore you can not burst them.<br>\n    (2) 0 ≤ <code>n</code> ≤ 500, 0 ≤ <code>nums[i]</code> ≤ 100\n</p>\n\n\n<p>\n    <b>Example:</b>\n</p>\n<p>\n    Given <code>[3, 1, 5, 8]</code>\n</p>\n<p>\n    Return <code>167</code>\n</p>\n<pre>    nums = [3,1,5,8] --&gt; [3,5,8] --&gt;   [3,8]   --&gt;  [8]  --&gt; []\n   coins =  3*1*5      +  3*5*8    +  1*3*8      + 1*8*1   = 167\n</pre>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Snapchat'],
  },
  {
    id: '313',
    name: 'Super Ugly Number',
    acceptance: '38.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\n    Write a program to find the n<sup>th</sup> super ugly number.\n</p>\n\n<p>\n    Super ugly numbers are positive numbers whose all prime factors are in the given prime list\n    <code>primes</code> of size <code>k</code>. For example, <code>[1, 2, 4, 7, 8, 13, 14, 16, 19, 26, 28, 32]\n</code> is the sequence of the first 12 super ugly numbers given <code>primes</code>\n    = <code>[2, 7, 13, 19]</code> of size 4.\n</p>\n\n<p>\n    <b>Note:</b><br>\n    (1) <code>1</code> is a super ugly number for any given <code>primes</code>.<br>\n    (2) The given numbers in <code>primes</code> are in ascending order.<br>\n    (3) 0 &lt; <code>k</code> ≤ 100, 0 &lt; <code>n</code> ≤ 10<sup>6</sup>, 0 &lt; <code>primes[i]</code> &lt; 1000.<br>\n    (4) The n<sup>th</sup> super ugly number is guaranteed to fit in a 32-bit signed integer.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '314',
    name: 'Binary Tree Vertical Order Traversal ',
    acceptance: '37.5%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a binary tree, return the <i>vertical order</i> traversal of its nodes' values. (ie, from top to bottom, column by column).</p>\n<p>If two nodes are in the same row and column, the order should be from <b>left to right</b>.</p>\n<p>\n<b>Examples:</b><br></p>\n<p>\n</p><ol>\n<li>Given binary tree <code>[3,9,20,null,null,15,7]</code>,<br>\n<pre>   3\n  /\\\n /  \\\n 9  20\n    /\\\n   /  \\\n  15   7\n</pre>\n<p></p>\n<p>\nreturn its vertical order traversal as:<br>\n</p><pre>[\n  [9],\n  [3,15],\n  [20],\n  [7]\n]\n</pre>\n</li>\n\n<li>Given binary tree <code>[3,9,8,4,0,1,7]</code>,<br>\n<pre>     3\n    /\\\n   /  \\\n   9   8\n  /\\  /\\\n /  \\/  \\\n 4  01   7\n</pre>\n<p></p>\n<p>\nreturn its vertical order traversal as:<br>\n</p><pre>[\n  [4],\n  [9],\n  [3,0,1],\n  [8],\n  [7]\n]\n</pre>\n</li>\n\n<li>Given binary tree <code>[3,9,8,4,0,1,7,null,null,null,2,5]</code> (0's right child is 2 and 1's left child is 5),<br>\n<pre>     3\n    /\\\n   /  \\\n   9   8\n  /\\  /\\\n /  \\/  \\\n 4  01   7\n    /\\\n   /  \\\n   5   2\n</pre>\n<p></p>\n<p>\nreturn its vertical order traversal as:<br>\n</p><pre>[\n  [4],\n  [9,5],\n  [3,0,1],\n  [8,2],\n  [7]\n]\n</pre>\n</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google', 'Facebook', 'Snapchat'],
  },
  {
    id: '315',
    name: 'Count of Smaller Numbers After Self',
    acceptance: '34.8%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nYou are given an integer array <i>nums</i> and you have to return a new <i>counts</i> array.\nThe <i>counts</i> array has the property where <code>counts[i]</code> is \nthe number of smaller elements to the right of <code>nums[i]</code>.\n</p>\n\n<p><b>Example:</b></p>\n\n<pre>Given <i>nums</i> = [5, 2, 6, 1]\n\nTo the right of 5 there are <b>2</b> smaller elements (2 and 1).\nTo the right of 2 there is only <b>1</b> smaller element (1).\nTo the right of 6 there is <b>1</b> smaller element (1).\nTo the right of 1 there is <b>0</b> smaller element.\n</pre>\n\n<p>\nReturn the array <code>[2, 1, 1, 0]</code>.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '316',
    name: 'Remove Duplicate Letters',
    acceptance: '30.0%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string which contains only lowercase letters, remove duplicate letters so that every letter appear once and only once. You must make sure your result is the smallest in lexicographical order among all possible results.\n</p>\n\n<p>\n<b>Example:</b><br>\n</p>\n<p>\nGiven <code>"bcabc"</code><br>\nReturn <code>"abc"</code>\n</p>\n<p>\nGiven <code>"cbacdcbc"</code><br>\nReturn <code>"acdb"</code>\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '317',
    name: 'Shortest Distance from All Buildings ',
    acceptance: '34.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>You want to build a house on an <i>empty</i> land which reaches all buildings in the shortest amount of distance. You can only move up, down, left and right. You are given a 2D grid of values <b>0</b>, <b>1</b> or <b>2</b>, where:</p>\n<ul>\n<li>Each <b>0</b> marks an empty land which you can pass by freely.</li>\n<li>Each <b>1</b> marks a building which you cannot pass through.</li>\n<li>Each <b>2</b> marks an obstacle which you cannot pass through.</li>\n</ul>\n\n<p>For example, given three buildings at <code>(0,0)</code>, <code>(0,4)</code>, <code>(2,2)</code>, and an obstacle at <code>(0,2)</code>:</p>\n\n<pre>1 - 0 - 2 - 0 - 1\n|   |   |   |   |\n0 - 0 - 0 - 0 - 0\n|   |   |   |   |\n0 - 0 - 1 - 0 - 0</pre>\n\n<p>The point <code>(1,2)</code> is an ideal empty land to build a house, as the total travel distance of 3+3+1=7 is minimal. So return 7.</p>\n\n<p><b>Note:</b><br>\nThere will be at least one building. If it is not possible to build such house according to the above rules, return -1.</p>\n          ',
    tags: ['Google', 'Zenefits'],
  },
  {
    id: '318',
    name: 'Maximum Product of Word Lengths',
    acceptance: '45.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\n    Given a string array <code>words</code>, find the maximum value of <code>length(word[i]) * length(word[j])</code> where the two words do not share common letters.\n    You may assume that each word will contain only lower case letters.\n    If no such two words exist, return 0.\n</p>\n\n<p>\n    <b>Example 1:</b><br>\n</p>\n<p>\n    Given <code>["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]</code><br>\n    Return <code>16</code><br>\n    The two words can be <code>"abcw", "xtfn"</code>.\n</p>\n<p>\n    <b>Example 2:</b><br>\n</p>\n<p>\n    Given <code>["a", "ab", "abc", "d", "cd", "bcd", "abcd"]</code><br>\n    Return <code>4</code><br>\n    The two words can be <code>"ab", "cd"</code>.\n</p>\n<p>\n    <b>Example 3:</b><br>\n</p>\n<p>\n    Given <code>["a", "aa", "aaa", "aaaa"]</code><br>\n    Return <code>0</code><br>\n    No such pair of words.    \n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '319',
    name: 'Bulb Switcher',
    acceptance: '42.7%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nThere are <i>n</i> bulbs that are initially off. You first turn on all the bulbs. Then, you turn off every second bulb. On the third round, you toggle every third bulb (turning on if it's off or turning off if it's on). For the <i>i</i>th round, you toggle every <i>i</i> bulb. For the <i>n</i>th round, you only toggle the last bulb.\n\nFind how many bulbs are on after <i>n</i> rounds.\n</p>\n\n<p>\n<b>Example:</b><br></p>\n<pre>Given <i>n</i> = 3. <br>\nAt first, the three bulbs are <b>[off, off, off]</b>.\nAfter first round, the three bulbs are <b>[on, on, on]</b>.\nAfter second round, the three bulbs are <b>[on, off, on]</b>.\nAfter third round, the three bulbs are <b>[on, off, off]</b>. <br>\nSo you should return 1, because there is only one bulb is on.\n</pre>\n          ",
    tags: [],
  },
  {
    id: '320',
    name: 'Generalized Abbreviation ',
    acceptance: '45.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Write a function to generate the generalized abbreviations of a word.</p>\n\n<p>\n    <b>Example:</b><br>\n</p>\n<p>Given word = <code>"word"</code>, return the following list (order does not matter):<br>\n</p><pre>["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '321',
    name: 'Create Maximum Number',
    acceptance: '24.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\n    Given two arrays of length <code>m</code> and <code>n</code> with digits <code>0-9</code> representing two numbers.\n    Create the maximum number of length <code>k &lt;= m + n</code> from digits of the two. The relative order of the digits\n    from the same array must be preserved. Return an array of the <code>k</code> digits. You should try to optimize your time and space complexity.\n</p>\n\n<p>\n    <b>Example 1:</b><br>\n</p>\n<p>\n    nums1 = <code>[3, 4, 6, 5]</code><br>\n    nums2 = <code>[9, 1, 2, 5, 8, 3]</code><br>\n    k = <code>5</code><br>\n    return <code>[9, 8, 6, 5, 3]</code>\n</p>\n<p>\n    <b>Example 2:</b><br>\n</p>\n<p>\n    nums1 = <code>[6, 7]</code><br>\n    nums2 = <code>[6, 0, 4]</code><br>\n    k = <code>5</code><br>\n    return <code>[6, 7, 6, 0, 4]</code>\n</p>\n<p>\n    <b>Example 3:</b><br>\n</p>\n<p>\n    nums1 = <code>[3, 9]</code><br>\n    nums2 = <code>[8, 9]</code><br>\n    k = <code>3</code><br>\n    return <code>[9, 8, 9]</code>\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '322',
    name: 'Coin Change',
    acceptance: '26.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYou are given coins of different denominations and a total amount of money <i>amount</i>. Write a function to compute the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return <code>-1</code>.\n</p>\n\n<p>\n<b>Example 1:</b><br>\ncoins = <code>[1, 2, 5]</code>, amount = <code>11</code><br>\nreturn <code>3</code> (11 = 5 + 5 + 1)\n</p>\n\n<p>\n<b>Example 2:</b><br>\ncoins = <code>[2]</code>, amount = <code>3</code><br>\nreturn <code>-1</code>.\n</p>\n\n<p>\n<b>Note</b>:<br>\nYou may assume that you have an infinite number of each kind of coin.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '323',
    name: 'Number of Connected Components in an Undirected Graph ',
    acceptance: '48.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven <code>n</code> nodes labeled from <code>0</code> to <code>n - 1</code> and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.\n</p>\n\n<p>\n    <b>Example 1:</b><br>\n</p>\n<pre>     0          3\n     |          |\n     1 --- 2    4\n</pre>\n<p>\n    Given <code>n = 5</code> and <code>edges = [[0, 1], [1, 2], [3, 4]]</code>, return <code>2</code>.\n</p>\n<p>\n    <b>Example 2:</b><br>\n</p>\n<pre>     0           4\n     |           |\n     1 --- 2 --- 3\n</pre>\n<p>\n    Given <code>n = 5</code> and <code>edges = [[0, 1], [1, 2], [2, 3], [3, 4]]</code>, return <code>1</code>.\n</p>\n\n<p>\n<b>Note:</b><br>\nYou can assume that no duplicate edges will appear in <code>edges</code>. Since all edges are undirected, <code>[0, 1]</code> is the same as <code>[1, 0]</code> and thus will not appear together in <code>edges</code>.\n</p>\n          ',
    tags: ['Google', 'Twitter'],
  },
  {
    id: '324',
    name: 'Wiggle Sort II',
    acceptance: '26.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\n    Given an unsorted array <code>nums</code>, reorder it such that\n    <code>nums[0] &lt; nums[1] &gt; nums[2] &lt; nums[3]...</code>.\n</p>\n\n<p>\n    <b>Example:</b><br>\n    (1) Given <code>nums = [1, 5, 1, 1, 6, 4]</code>, one possible answer is <code>[1, 4, 1, 5, 1, 6]</code>. <br>\n    (2) Given <code>nums = [1, 3, 2, 2, 3, 1]</code>, one possible answer is <code>[2, 3, 1, 3, 1, 2]</code>.\n</p>\n\n<p>\n    <b>Note:</b><br>\n    You may assume all input has valid answer.\n</p>\n\n<p>\n    <b>Follow Up:</b><br>\n    Can you do it in O(n) time and/or in-place with O(1) extra space?\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '325',
    name: 'Maximum Size Subarray Sum Equals k ',
    acceptance: '43.1%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven an array <i>nums</i> and a target value <i>k</i>, find the maximum length of a subarray that sums to <i>k</i>. If there isn't one, return 0 instead.\n</p>\n\n<p>\n    <b>Note:</b><br>\nThe sum of the entire <i>nums</i> array is guaranteed to fit within the 32-bit signed integer range.\n</p>\n\n<p>\n    <b>Example 1:</b><br>\n</p>\n<p>\nGiven <i>nums</i> = <code>[1, -1, 5, -2, 3]</code>, <i>k</i> = <code>3</code>,<br>\nreturn <code>4</code>. (because the subarray <code>[1, -1, 5, -2]</code> sums to 3 and is the longest)\n</p>\n\n<p>\n    <b>Example 2:</b><br>\n</p>\n<p>\nGiven <i>nums</i> = <code>[-2, -1, 2, 1]</code>, <i>k</i> = <code>1</code>,<br>\nreturn <code>2</code>. (because the subarray <code>[-1, 2]</code> sums to 1 and is the longest)\n</p>\n\n<p>\n    <b>Follow Up:</b><br>\n    Can you do it in O(<i>n</i>) time?\n</p>\n          ",
    tags: ['Facebook', 'Palantir'],
  },
  {
    id: '326',
    name: 'Power of Three',
    acceptance: '40.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\n    Given an integer, write a function to determine if it is a power of three.\n</p>\n<p>\n    <b>Follow up:</b><br>\n    Could you do it without using any loop / recursion?\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '327',
    name: 'Count of Range Sum',
    acceptance: '30.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\n    Given an integer array <code>nums</code>, return the number of range sums that lie in <code>[lower, upper]</code> inclusive.<br>\n\n    Range sum <code>S(i, j)</code> is defined as the sum of the elements in <code>nums</code> between indices <code>i</code> and \n    <code>j</code> (<code>i</code> ≤ <code>j</code>), inclusive.\n</p>\n\n<p>\n    <b>Note:</b><br>\n    A naive algorithm of <i>O</i>(<i>n</i><sup>2</sup>) is trivial. You MUST do better than that.\n</p>\n<p>\n    <b>Example:</b><br>\n    Given <i>nums</i> = <code>[-2, 5, -1]</code>, <i>lower</i> = <code>-2</code>, <i>upper</i> = <code>2</code>,<br>\n    Return <code>3</code>.<br>\n    The three ranges are : <code>[0, 0]</code>, <code>[2, 2]</code>, <code>[0, 2]</code> and their respective sums are: <code>-2, -1, 2</code>.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '328',
    name: 'Odd Even Linked List',
    acceptance: '44.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are talking about the node number and not the value in the nodes.</p>\n\n<p>You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.</p><p>\n\n</p><p>\n<b>Example:</b><br>\nGiven <code>1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;NULL</code>,<br>\nreturn <code>1-&gt;3-&gt;5-&gt;2-&gt;4-&gt;NULL</code>.\n</p>\n<p>\n<b>Note:</b><br>\nThe relative order inside both the even and odd groups should remain as it was in the input. <br>\nThe first node is considered odd, the second node even and so on ...\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/DjangoUnchained">@DjangoUnchained</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '329',
    name: 'Longest Increasing Path in a Matrix',
    acceptance: '36.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given an integer matrix, find the length of the longest increasing path.</p>\n\n<p>\nFrom each cell, you can either move to four directions: left, right, up or down. You may NOT move diagonally or move outside of the boundary (i.e. wrap-around is not allowed).</p>\n\n<p>\n<b>Example 1:</b>\n</p><pre>nums = [\n  [<font color="red">9</font>,9,4],\n  [<font color="red">6</font>,6,8],\n  [<font color="red">2</font>,<font color="red">1</font>,1]\n]\n</pre>\n<p></p>\n\n<p>\nReturn <code>4</code><br>\n\nThe longest increasing path is <code>[1, 2, 6, 9]</code>.</p>\n\n<p>\n<b>Example 2:</b>\n</p><pre>nums = [\n  [<font color="red">3</font>,<font color="red">4</font>,<font color="red">5</font>],\n  [3,2,<font color="red">6</font>],\n  [2,2,1]\n]\n</pre>\n<p></p>\n\n<p>\nReturn <code>4</code><br>\n\nThe longest increasing path is <code>[3, 4, 5, 6]</code>. Moving diagonally is not allowed.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '330',
    name: 'Patching Array',
    acceptance: '32.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a sorted positive integer array <i>nums</i> and an integer <i>n</i>, add/patch elements to the array such that any number in range <code>[1, n]</code> inclusive can be formed by the sum of some elements in the array. Return the minimum number of patches required.\n</p>\n\n<p><strong>Example 1:</strong><br>\n<i>nums</i> = <code>[1, 3]</code>, <i>n</i> = <code>6</code><br>\nReturn <code>1</code>.</p>\n\n<p>Combinations of <i>nums</i> are <code>[1], [3], [1,3]</code>, which form possible sums of: <code>1, 3, 4</code>.<br>\nNow if we add/patch <code>2</code> to <i>nums</i>, the combinations are: <code>[1], [2], [3], [1,3], [2,3], [1,2,3]</code>.<br>\nPossible sums are <code>1, 2, 3, 4, 5, 6</code>, which now covers the range <code>[1, 6]</code>.<br>\nSo we only need <code>1</code> patch.</p>\n\n<p><strong>Example 2:</strong><br>\n<i>nums</i> = <code>[1, 5, 10]</code>, <i>n</i> = <code>20</code><br>\nReturn <code>2</code>.<br>\nThe two patches can be <code>[2, 4]</code>.</p>\n\n<p><strong>Example 3:</strong><br>\n<i>nums</i> = <code>[1, 2, 2]</code>, <i>n</i> = <code>5</code><br>\nReturn <code>0</code>.<br>\n\n</p><p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '331',
    name: 'Verify Preorder Serialization of a Binary Tree',
    acceptance: '36.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>One way to serialize a binary tree is to use pre-order traversal. When we encounter a non-null node, we record the node\'s value. If it is a null node, we record using a sentinel value such as <code>#</code>.</p>\n\n<pre>     _9_\n    /   \\\n   3     2\n  / \\   / \\\n 4   1  #  6\n/ \\ / \\   / \\\n# # # #   # #\n</pre>\n\n<p>For example, the above binary tree can be serialized to the string <code>"9,3,4,#,#,1,#,#,2,#,6,#,#"</code>, where <code>#</code> represents a null node.\n</p>\n\n<p>Given a string of comma separated values, verify whether it is a correct preorder traversal serialization of a binary tree. Find an algorithm without reconstructing the tree.</p>\n\n<p>Each comma separated value in the string must be either an integer or a character <code>\'#\'</code> representing <code>null</code> pointer.</p>\n\n<p>You may assume that the input format is always valid, for example it could never contain two consecutive commas such as <code>"1,,3"</code>.</p>\n\n<p><strong>Example 1:</strong><br>\n<code>"9,3,4,#,#,1,#,#,2,#,6,#,#"</code><br>\nReturn <code>true</code></p>\n<p><strong>Example 2:</strong><br>\n<code>"1,#"</code><br>\nReturn <code>false</code></p>\n<p><strong>Example 3:</strong><br>\n<code>"9,#,#,1"</code><br>\nReturn <code>false</code></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '332',
    name: 'Reconstruct Itinerary',
    acceptance: '29.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a list of airline tickets represented by pairs of departure and arrival airports <code>[from, to]</code>, reconstruct the itinerary in order. All of the tickets belong to a man who departs from <code>JFK</code>. Thus, the itinerary must begin with <code>JFK</code>.\n</p>\n<p>\n<b>Note:</b><br>\n</p><ol>\n<li>If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical order when read as a single string. For example, the itinerary <code>["JFK", "LGA"]</code> has a smaller lexical order than <code>["JFK", "LGB"]</code>.</li>\n<li>All airports are represented by three capital letters (IATA code).</li>\n<li>You may assume all tickets form at least one valid itinerary.</li>\n</ol>\n<p></p>\n\n<p>\n    <b>Example 1:</b><br>\n    <code>tickets</code> = <code>[["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]</code><br>\n    Return <code>["JFK", "MUC", "LHR", "SFO", "SJC"]</code>.<br>\n</p>\n<p>\n    <b>Example 2:</b><br>\n    <code>tickets</code> = <code>[["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]</code><br>\n    Return <code>["JFK","ATL","JFK","SFO","ATL","SFO"]</code>.<br>\n    Another possible reconstruction is <code>["JFK","SFO","ATL","JFK","ATL","SFO"]</code>. But it is larger in lexical order.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '333',
    name: 'Largest BST Subtree ',
    acceptance: '30.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, find the largest subtree which is a Binary Search Tree (BST), where largest means subtree with largest number of nodes in it.</p>\n<p><b>Note:</b><br>\nA subtree must include all of its descendants.<br>\nHere\'s an example:<br>\n</p><pre>    10\n    / \\\n   <font color="red">5</font>  15\n  <font color="red">/ \\</font>   \\ \n <font color="red">1   8</font>   7\n</pre>\nThe Largest BST Subtree in this case is the highlighted one. <br>\nThe return value is the subtree\'s size, which is 3. \n<p></p>\n\n<p>\n<b>Follow up:</b><br>\nCan you figure out ways to solve it with O(n) time complexity?\n</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '334',
    name: 'Increasing Triplet Subsequence',
    acceptance: '39.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an unsorted array return whether an increasing subsequence of length 3 exists or not in the array.\n</p>\n<p>\nFormally the function should:<br>\n</p><blockquote>Return true if there exists <i>i, j, k </i> <br>\nsuch that <i>arr[i]</i> &lt; <i>arr[j]</i> &lt; <i>arr[k]</i> given 0 ≤ <i>i</i> &lt; <i>j</i> &lt; <i>k</i> ≤ <i>n</i>-1 \nelse return false.\n</blockquote>\n<p></p>\n<p>\nYour algorithm should run in O(<i>n</i>) time complexity and O(<i>1</i>) space complexity.\n</p>\n<p>\n<b>Examples:</b><br>\nGiven <code>[1, 2, 3, 4, 5]</code>,<br>\nreturn <code>true</code>.\n</p>\n<p>\nGiven <code>[5, 4, 3, 2, 1]</code>,<br>\nreturn <code>false</code>.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/DjangoUnchained">@DjangoUnchained</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '335',
    name: 'Self Crossing',
    acceptance: '25.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\n    You are given an array <i>x</i> of <code>n</code> positive numbers. You start at point <code>(0,0)</code> and moves <code>x[0]</code> metres to the north, then <code>x[1]</code> metres to the west,\n    <code>x[2]</code> metres to the south,\n    <code>x[3]</code> metres to the east and so on. In other words, after each move your direction changes\n    counter-clockwise.\n</p>\n<p>\n    Write a one-pass algorithm with <code>O(1)</code> extra space to determine, if your path crosses itself, or not.\n</p>\n\n<p>\n<b>Example 1:</b><br>\n</p><pre>Given <i>x</i> = <code>[2, 1, 1, 2]</code>,\n?????\n?   ?\n???????&gt;\n    ?\n\nReturn <b>true</b> (self crossing)\n</pre>\n<p></p>\n\n<p>\n<b>Example 2:</b><br>\n</p><pre>Given <i>x</i> = <code>[1, 2, 3, 4]</code>,\n????????\n?      ?\n?\n?\n?????????????&gt;\n\nReturn <b>false</b> (not self crossing)\n</pre>\n<p></p>\n\n<p>\n<b>Example 3:</b><br>\n</p><pre>Given <i>x</i> = <code>[1, 1, 1, 1]</code>,\n?????\n?   ?\n?????&gt;\n\nReturn <b>true</b> (self crossing)\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '336',
    name: 'Palindrome Pairs',
    acceptance: '26.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\n    Given a list of <b>unique</b> words, find all pairs of <b><i>distinct</i></b> indices <code>(i, j)</code> in the given list, so that the concatenation of the two words, i.e. <code>words[i] + words[j]</code> is a palindrome.\n</p>\n\n<p>\n    <b>Example 1:</b><br>\n    Given <code>words</code> = <code>["bat", "tab", "cat"]</code><br>\n    Return <code>[[0, 1], [1, 0]]</code><br>\n    The palindromes are <code>["battab", "tabbat"]</code><br>\n</p>\n<p>\n    <b>Example 2:</b><br>\n    Given <code>words</code> = <code>["abcd", "dcba", "lls", "s", "sssll"]</code><br>\n    Return <code>[[0, 1], [1, 0], [3, 2], [2, 4]]</code><br>\n    The palindromes are <code>["dcbaabcd", "abcddcba", "slls", "llssssll"]</code><br>\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Airbnb'],
  },
  {
    id: '337',
    name: 'House Robber III',
    acceptance: '44.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nThe thief has found himself a new place for his thievery again. There is only one entrance to this area, called the "root." Besides the root, each house has one and only one parent house. After a tour, the smart thief realized that "all houses in this place forms a binary tree". It will automatically contact the police if two directly-linked houses were broken into on the same night.\n</p>\n\n<p>\nDetermine the maximum amount of money the thief can rob tonight without alerting the police.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>     <font color="red">3</font>\n    / \\\n   2   3\n    \\   \\ \n     <font color="red">3   1</font>\n</pre>\nMaximum amount of money the thief can rob = <font color="red">3</font> + <font color="red">3</font> + <font color="red">1</font> = <b>7</b>.\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>     3\n    / \\\n   <font color="red">4</font>   <font color="red">5</font>\n  / \\   \\ \n 1   3   1\n</pre>\nMaximum amount of money the thief can rob = <font color="red">4</font> + <font color="red">5</font> = <b>9</b>.\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/dietpepsi">@dietpepsi</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Uber'],
  },
  {
    id: '338',
    name: 'Counting Bits',
    acceptance: '61.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a non negative integer number <b>num</b>. For every numbers <b>i</b> in the range <b>0 ≤ i ≤ num</b> calculate the number of 1\'s in their binary representation and return them as an array.\n</p>\n<p>\n<b>Example:</b><br>\nFor <code>num = 5</code> you should return <code>[0,1,1,2,1,2]</code>.\n</p>\n<p>\n<b>Follow up:</b>\n</p><ul>\n<li>It is very easy to come up with a solution with run time <b>O(n*sizeof(integer))</b>. But can you do it in linear time <b>O(n)</b> /possibly in a single pass?</li>\n<li>Space complexity should be <b>O(n)</b>.</li>\n<li>Can you do it like a boss? Do it without using any builtin function like <b>__builtin_popcount</b>  in c++ or in any other language.</li>\n</ul>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/syedee">@ syedee </a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '339',
    name: 'Nested List Weight Sum ',
    acceptance: '63.1%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given a nested list of integers, return the sum of all integers in the list weighted by their depth.</p>\n\n<p>Each element is either an integer, or a list -- whose elements may also be integers or other lists.</p>\n\n<p><b>Example 1:</b><br>\nGiven the list <code>[[1,1],2,[1,1]]</code>, return <b>10</b>. (four 1's at depth 2, one 2 at depth 1)</p>\n\n<p><b>Example 2:</b><br>\nGiven the list <code>[1,[4,[6]]]</code>, return <b>27</b>. (one 1 at depth 1, one 4 at depth 2, and one 6 at depth 3; 1 + 4*2 + 6*3 = 27)\n</p>\n          ",
    tags: ['LinkedIn'],
  },
  {
    id: '340',
    name: 'Longest Substring with At Most K Distinct Characters ',
    acceptance: '39.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string, find the length of the longest substring T that contains at most <i>k</i> distinct characters.\n</p>\n\n<p>\nFor example,\n\nGiven s = <code>“eceba”</code> and k = 2,\n</p>\n\n<p>\nT is "ece" which its length is 3.\n</p>\n          ',
    tags: ['Google', 'AppDynamics', 'Coupang'],
  },
  {
    id: '341',
    name: 'Flatten Nested List Iterator',
    acceptance: '42.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a nested list of integers, implement an iterator to flatten it.</p>\n\n<p>Each element is either an integer, or a list -- whose elements may also be integers or other lists.</p>\n\n<p><b>Example 1:</b><br>\nGiven the list <code>[[1,1],2,[1,1]]</code>,\n</p><p>\nBy calling <i>next</i> repeatedly until <i>hasNext</i> returns false, the order of elements returned by <i>next</i> should be: <code>[1,1,2,1,1]</code>.\n</p>\n<p></p>\n\n<p><b>Example 2:</b><br>\nGiven the list <code>[1,[4,[6]]]</code>,\n</p><p>\nBy calling <i>next</i> repeatedly until <i>hasNext</i> returns false, the order of elements returned by <i>next</i> should be: <code>[1,4,6]</code>.\n</p>\n<p></p>\n          ',
    tags: ['Google', 'Facebook', 'Twitter'],
  },
  {
    id: '342',
    name: 'Power of Four',
    acceptance: '38.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an integer (signed 32 bits), write a function to check whether it is a power of 4.\n</p>\n<p><b>Example:</b><br>\nGiven num = 16, return true.\nGiven num = 5, return false.\n</p>\n<p>\n<b>Follow up</b>: Could you solve it without loops/recursion?\n</p>\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/yukuairoy">@yukuairoy </a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Two Sigma'],
  },
  {
    id: '343',
    name: 'Integer Break',
    acceptance: '46.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a positive integer <i>n</i>, break it into the sum of <b>at least</b> two positive integers and maximize the product of those integers. Return the maximum product you can get.\n</p>\n\n<p>\nFor example, given <i>n</i> = 2, return 1 (2 = 1 + 1); given <i>n</i> = 10, return 36 (10 = 3 + 3 + 4).\n</p>\n\n<p>\n<b>Note</b>: You may assume that <i>n</i> is not less than 2 and not larger than 58.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/discuss/user/jianchao.li.fighter">@jianchao.li.fighter</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '344',
    name: 'Reverse String',
    acceptance: '59.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Write a function that takes a string as input and returns the string reversed.</p>\n\n<p>\n<b>Example:</b><br>\nGiven s = "hello", return "olleh".\n</p>\n          ',
    tags: [],
  },
  {
    id: '345',
    name: 'Reverse Vowels of a String',
    acceptance: '38.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Write a function that takes a string as input and reverse only the vowels of a string.</p>\n\n<p>\n<b>Example 1:</b><br>\nGiven s = "hello", return "holle".\n</p>\n\n<p>\n<b>Example 2:</b><br>\nGiven s = "leetcode", return "leotcede".\n</p>\n\n<p>\n<b>Note:</b><br>\nThe vowels does not include the letter "y".\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '346',
    name: 'Moving Average from Data Stream ',
    acceptance: '59.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a stream of integers and a window size, calculate the moving average of all integers in the sliding window.</p>\n\n<p>For example,<br>\n</p><pre>MovingAverage m = new MovingAverage(3);\nm.next(1) = 1\nm.next(10) = (1 + 10) / 2\nm.next(3) = (1 + 10 + 3) / 3\nm.next(5) = (10 + 3 + 5) / 3\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '347',
    name: 'Top K Frequent Elements',
    acceptance: '48.9%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a non-empty array of integers, return the <b><i>k</i></b> most frequent elements.</p>\n\n<p>For example,<br>\nGiven <code>[1,1,1,2,2,3]</code> and k = 2, return <code>[1,2]</code>.\n</p>\n\n<p><b>Note: </b><br>\n</p><ul>\n<li>You may assume <i>k</i> is always valid, 1 ≤ <i>k</i> ≤ number of unique elements.</li>\n<li>Your algorithm's time complexity <b>must be</b> better than O(<i>n</i> log <i>n</i>), where <i>n</i> is the array's size.</li>\n</ul><p></p>\n          ",
    tags: ['Yelp', 'Pocket Gems'],
  },
  {
    id: '348',
    name: 'Design Tic-Tac-Toe ',
    acceptance: '45.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Design a Tic-tac-toe game that is played between two players on a <i>n</i> x <i>n</i> grid.\n</p>\n\n<p>You may assume the following rules:\n</p><ol>\n<li>A move is guaranteed to be valid and is placed on an empty block.</li>\n<li>Once a winning condition is reached, no more moves is allowed.</li>\n<li>A player who succeeds in placing <i>n</i> of their marks in a horizontal, vertical, or diagonal row wins the game.</li>\n</ol>\n<p></p>\n\n<p><b>Example:</b><br>\n</p><pre>Given <i>n</i> = 3, assume that player 1 is "X" and player 2 is "O" in the board.\n\nTicTacToe toe = new TicTacToe(3);\n\ntoe.move(0, 0, 1); -&gt; Returns 0 (no one wins)\n|X| | |\n| | | |    // Player 1 makes a move at (0, 0).\n| | | |\n\ntoe.move(0, 2, 2); -&gt; Returns 0 (no one wins)\n|X| |O|\n| | | |    // Player 2 makes a move at (0, 2).\n| | | |\n\ntoe.move(2, 2, 1); -&gt; Returns 0 (no one wins)\n|X| |O|\n| | | |    // Player 1 makes a move at (2, 2).\n| | |X|\n\ntoe.move(1, 1, 2); -&gt; Returns 0 (no one wins)\n|X| |O|\n| |O| |    // Player 2 makes a move at (1, 1).\n| | |X|\n\ntoe.move(2, 0, 1); -&gt; Returns 0 (no one wins)\n|X| |O|\n| |O| |    // Player 1 makes a move at (2, 0).\n|X| |X|\n\ntoe.move(1, 0, 2); -&gt; Returns 0 (no one wins)\n|X| |O|\n|O|O| |    // Player 2 makes a move at (1, 0).\n|X| |X|\n\ntoe.move(2, 1, 1); -&gt; Returns 1 (player 1 wins)\n|X| |O|\n|O|O| |    // Player 1 makes a move at (2, 1).\n|X|X|X|\n</pre>\n<p></p>\n\n<p><b>Follow up:</b><br>\nCould you do better than O(<i>n</i><sup>2</sup>) per <code>move()</code> operation?\n</p>\n          ',
    tags: ['Google', 'Microsoft'],
  },
  {
    id: '349',
    name: 'Intersection of Two Arrays',
    acceptance: '47.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two arrays, write a function to compute their intersection.\n</p>\n\n<p><b>Example:</b><br>\nGiven <i>nums1</i> = <code>[1, 2, 2, 1]</code>, <i>nums2</i> = <code>[2, 2]</code>, return <code>[2]</code>.\n</p>\n\n<p><b>Note:</b><br>\n</p><ul>\n<li>Each element in the result must be unique.</li>\n<li>The result can be in any order.</li>\n</ul>\n<p></p>\n          ',
    tags: ['Two Sigma'],
  },
  {
    id: '350',
    name: 'Intersection of Two Arrays II',
    acceptance: '44.8%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nGiven two arrays, write a function to compute their intersection.\n</p>\n\n<p><b>Example:</b><br>\nGiven <i>nums1</i> = <code>[1, 2, 2, 1]</code>, <i>nums2</i> = <code>[2, 2]</code>, return <code>[2, 2]</code>.\n</p>\n\n<p><b>Note:</b><br>\n</p><ul>\n<li>Each element in the result should appear as many times as it shows in both arrays.</li>\n<li>The result can be in any order.</li>\n</ul>\n<p></p>\n\n<p><b>Follow up:</b><br>\n</p><ul>\n<li>What if the given array is already sorted? How would you optimize your algorithm?</li>\n<li>What if <i>nums1</i>'s size is small compared to <i>nums2</i>'s size? Which algorithm is better?</li>\n<li>What if elements of <i>nums2</i> are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?</li>\n</ul>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '351',
    name: 'Android Unlock Patterns ',
    acceptance: '44.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an Android <b>3x3</b> key lock screen and two integers <b>m</b> and <b>n</b>, where  1 ≤ m ≤ n ≤ 9, count the total number of unlock patterns of the Android lock screen, which consist of minimum of <b>m</b> keys and maximum <b>n</b> keys.</p>\n\n<p><b>Rules for a valid pattern:</b><br>\n</p><ol>\n<li>Each pattern must connect at least <b>m</b> keys and at most <b>n</b> keys.</li>\n<li>All the keys must be distinct.</li>\n<li>If the line connecting two consecutive keys in the pattern passes through any other keys, the other keys must have previously selected in the pattern. No jumps through non selected key is allowed.</li>\n<li>The order of keys used matters.</li>\n</ol>\n<p></p>\n\n<img src="https://leetcode.com/static/images/problemset/android-unlock.png">\n\n<p><b>Explanation:</b><br>\n\n</p><pre>| 1 | 2 | 3 |\n| 4 | 5 | 6 |\n| 7 | 8 | 9 |</pre>\n<p></p>\n\n<p>\n<b>Invalid move:</b> <code>4 - 1 - 3 - 6 </code><br>\n\nLine  1 - 3 passes through key 2 which had not been selected in the pattern.</p>\n\n<p><b>Invalid move:</b> <code>4 - 1 - 9 - 2</code><br>\n\nLine  1 - 9 passes through key 5 which had not been selected in the pattern.</p>\n\n<p><b>Valid move:</b> <code>2 - 4 - 1 - 3 - 6</code><br>\n\nLine 1 - 3 is valid because it passes through key 2, which had been selected in the pattern</p>\n\n<p><b>Valid move:</b> <code>6 - 5 - 4 - 1 - 9 - 2</code><br>\n\nLine 1 - 9 is valid because it passes through key 5, which had been selected in the pattern.</p>\n\n<p><b>Example:</b><br>\nGiven <b>m</b> = 1, <b>n</b> = 1, return 9.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/elmirap">@elmirap</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '352',
    name: 'Data Stream as Disjoint Intervals',
    acceptance: '40.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a data stream input of non-negative integers a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub>, ..., summarize the numbers seen so far as a list of disjoint intervals.</p>\n\n<p>For example, suppose the integers from the data stream are 1, 3, 7, 2, 6, ..., then the summary will be:</p>\n<pre>[1, 1]\n[1, 1], [3, 3]\n[1, 1], [3, 3], [7, 7]\n[1, 3], [7, 7]\n[1, 3], [6, 7]\n</pre>\n\n<p><b>Follow up:</b><br>\nWhat if there are lots of merges and the number of disjoint intervals are small compared to the data stream\'s size?\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/yunhong">@yunhong</a> for adding this problem and creating most of the test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '353',
    name: 'Design Snake Game ',
    acceptance: '27.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Design a <a href="https://en.wikipedia.org/wiki/Snake_(video_game)" target="_blank">Snake game</a> that is played on a device with screen size = <i>width</i> x <i>height</i>. <a href="http://patorjk.com/games/snake/" target="_blank">Play the game online</a> if you are not familiar with the game.</p>\n\n<p>The snake is initially positioned at the top left corner (0,0) with length = 1 unit.</p>\n\n<p>You are given a list of food\'s positions in row-column order. When a snake eats the food, its length and the game\'s score both increase by 1.</p>\n\n<p>Each food appears one by one on the screen. For example, the second food will not appear until the first food was eaten by the snake.</p>\n\n<p>When a food does appear on the screen, it is guaranteed that it will not appear on a block occupied by the snake.</p>\n\n<p>\n<b>Example:</b><br>\n</p><pre>Given width = 3, height = 2, and food = [[1,2],[0,1]].\n\nSnake snake = new Snake(width, height, food);\n\nInitially the snake appears at position (0,0) and the food at (1,2).\n\n|S| | |\n| | |F|\n\nsnake.move("R"); -&gt; Returns 0\n\n| |S| |\n| | |F|\n\nsnake.move("D"); -&gt; Returns 0\n\n| | | |\n| |S|F|\n\nsnake.move("R"); -&gt; Returns 1 (Snake eats the first food and right after that, the second food appears at (0,1) )\n\n| |F| |\n| |S|S|\n\nsnake.move("U"); -&gt; Returns 1\n\n| |F|S|\n| | |S|\n\nsnake.move("L"); -&gt; Returns 2 (Snake eats the second food)\n\n| |S|S|\n| | |S|\n\nsnake.move("U"); -&gt; Returns -1 (Game over because snake collides with border)\n\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/elmirap">@elmirap</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '354',
    name: 'Russian Doll Envelopes',
    acceptance: '32.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>You have a number of envelopes with widths and heights given as a pair of integers <code>(w, h)</code>. One envelope can fit into another if and only if both the width and height of one envelope is greater than the width and height of the other envelope.</p>\n\n<p>\nWhat is the maximum number of envelopes can you Russian doll? (put one inside other)\n</p>\n\n<p><b>Example:</b><br>\nGiven envelopes = <code>[[5,4],[6,4],[6,7],[2,3]]</code>, the maximum number of envelopes you can Russian doll is <code>3</code> ([2,3] =&gt; [5,4] =&gt; [6,7]).\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '355',
    name: 'Design Twitter',
    acceptance: '25.7%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Design a simplified version of Twitter where users can post tweets, follow/unfollow another user and is able to see the 10 most recent tweets in the user's news feed. Your design should support the following methods:</p>\n\n<p>\n</p><ol>\n<li><b>postTweet(userId, tweetId)</b>: Compose a new tweet.</li>\n<li><b>getNewsFeed(userId)</b>: Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.</li>\n<li><b>follow(followerId, followeeId)</b>: Follower follows a followee.</li>\n<li><b>unfollow(followerId, followeeId)</b>: Follower unfollows a followee.</li>\n</ol>\n<p></p>\n\n<p><b>Example:</b>\n</p><pre>Twitter twitter = new Twitter();\n\n// User 1 posts a new tweet (id = 5).\ntwitter.postTweet(1, 5);\n\n// User 1's news feed should return a list with 1 tweet id -&gt; [5].\ntwitter.getNewsFeed(1);\n\n// User 1 follows user 2.\ntwitter.follow(1, 2);\n\n// User 2 posts a new tweet (id = 6).\ntwitter.postTweet(2, 6);\n\n// User 1's news feed should return a list with 2 tweet ids -&gt; [6, 5].\n// Tweet id 6 should precede tweet id 5 because it is posted after tweet id 5.\ntwitter.getNewsFeed(1);\n\n// User 1 unfollows user 2.\ntwitter.unfollow(1, 2);\n\n// User 1's news feed should return a list with 1 tweet id -&gt; [5],\n// since user 1 is no longer following user 2.\ntwitter.getNewsFeed(1);\n</pre>\n<p></p>\n          ",
    tags: ['Amazon', 'Twitter'],
  },
  {
    id: '356',
    name: 'Line Reflection ',
    acceptance: '30.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given n points on a 2D plane, find if there is such a line parallel to y-axis that reflect the given points.</p>\n\n<p>\n    <b>Example 1:</b><br>\n</p>\n<p>\nGiven <i>points</i> = <code>[[1,1],[-1,1]]</code>, return <code>true</code>.\n</p>\n\n<p>\n    <b>Example 2:</b><br>\n</p>\n<p>\nGiven <i>points</i> = <code>[[1,1],[-1,-1]]</code>, return <code>false</code>.\n</p>\n\n<p><b>Follow up:</b><br>\nCould you do better than O(<i>n</i><sup>2</sup>)?\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/memoryless">@memoryless</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '357',
    name: 'Count Numbers with Unique Digits',
    acceptance: '46.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a <b>non-negative</b> integer n, count all numbers with unique digits, x, where 0 ≤ x &lt; 10<sup>n</sup>.</p>\n\n<p>\n    <b>Example:</b><br>\nGiven n = 2, return 91. (The answer should be the total numbers in the range of 0 ≤ x &lt; 100, excluding <code>[11,22,33,44,55,66,77,88,99]</code>)\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/memoryless">@memoryless</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '358',
    name: 'Rearrange String k Distance Apart ',
    acceptance: '31.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a non-empty string <b>s</b> and an integer <b>k</b>, rearrange the string such that the same characters are at least distance <b>k</b> from each other.\n</p>\n<p>\nAll input strings are given in lowercase letters. If it is not possible to rearrange the string, return an empty string <code>""</code>.\n</p>\n<p><b>Example 1:</b><br>\n</p><pre>s = "aabbcc", k = 3\n\nResult: "abcabc"\n\nThe same letters are at least distance 3 from each other.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>s = "aaabc", k = 3 \n\nAnswer: ""\n\nIt is not possible to rearrange the string.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre>s = "aaadbbcc", k = 2\n\nAnswer: "abacabcd"\n\nAnother possible answer is: "abcabcda"\n\nThe same letters are at least distance 2 from each other.\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/elmirap">@elmirap</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '359',
    name: 'Logger Rate Limiter ',
    acceptance: '60.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Design a logger system that receive stream of messages along with its timestamps, each message should be printed if and only if it is <b>not printed in the last 10 seconds</b>.</p>\n\n<p>Given a message and a timestamp (in seconds granularity), return true if the message should be printed in the given timestamp, otherwise returns false.</p>\n\n<p>It is possible that several messages arrive roughly at the same time.</p>\n\n<p><b>Example:</b>\n</p><pre>Logger logger = new Logger();\n\n// logging string "foo" at timestamp 1\nlogger.shouldPrintMessage(1, "foo"); returns true; \n\n// logging string "bar" at timestamp 2\nlogger.shouldPrintMessage(2,"bar"); returns true;\n\n// logging string "foo" at timestamp 3\nlogger.shouldPrintMessage(3,"foo"); returns false;\n\n// logging string "bar" at timestamp 8\nlogger.shouldPrintMessage(8,"bar"); returns false;\n\n// logging string "foo" at timestamp 10\nlogger.shouldPrintMessage(10,"foo"); returns false;\n\n// logging string "foo" at timestamp 11\nlogger.shouldPrintMessage(11,"foo"); returns true;\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/memoryless">@memoryless</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '360',
    name: 'Sort Transformed Array ',
    acceptance: '44.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a <b>sorted</b> array of integers <i>nums</i> and integer values <i>a</i>, <i>b</i> and <i>c</i>.  Apply a quadratic function of the form f(<i>x</i>) = <i>ax</i><sup>2</sup> + <i>bx</i> + <i>c</i> to each element <i>x</i> in the array. </p>\n\n<p>The returned array must be in <b>sorted order</b>.</p>\n\n<p>Expected time complexity: <b>O(<i>n</i>)</b></p>\n\n<p><b>Example:</b><br>\n</p><pre>nums = [-4, -2, 2, 4], a = 1, b = 3, c = 5,\n\nResult: [3, 9, 15, 33]\n\nnums = [-4, -2, 2, 4], a = -1, b = 3, c = 5\n\nResult: [-23, -5, 1, 7]\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/elmirap">@elmirap</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '361',
    name: 'Bomb Enemy ',
    acceptance: '39.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a 2D grid, each cell is either a wall <code>'W'</code>, an enemy <code>'E'</code> or empty <code>'0'</code> (the number zero), return the maximum enemies you can kill using one bomb.<br> The bomb kills all the enemies in the same row and column from the planted point until it hits the wall since the wall is too strong to be destroyed.<br>\n Note that you can only put the bomb at an empty cell. </p>\n\n<p><b>Example:</b><br>\n</p><pre>For the given grid\n\n0 E 0 0\nE 0 W E\n0 E 0 0\n\nreturn 3. (Placing a bomb at (1,1) kills 3 enemies)\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href=\"https://discuss.leetcode.com/user/memoryless\">@memoryless</a> for adding this problem and creating all test cases.</p>\n          ",
    tags: ['Google'],
  },
  {
    id: '362',
    name: 'Design Hit Counter ',
    acceptance: '54.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Design a hit counter which counts the number of hits received in the past 5 minutes.</p>\n\n<p>Each function accepts a timestamp parameter (in seconds granularity) and you may assume that calls are being made to the system in chronological order (ie, the timestamp is monotonically increasing). You may assume that the earliest timestamp starts at 1.</p>\n\n<p>It is possible that several hits arrive roughly at the same time.</p>\n\n<p><b>Example:</b><br>\n</p><pre>HitCounter counter = new HitCounter();\n\n// hit at timestamp 1.\ncounter.hit(1);\n\n// hit at timestamp 2.\ncounter.hit(2);\n\n// hit at timestamp 3.\ncounter.hit(3);\n\n// get hits at timestamp 4, should return 3.\ncounter.getHits(4);\n\n// hit at timestamp 300.\ncounter.hit(300);\n\n// get hits at timestamp 300, should return 4.\ncounter.getHits(300);\n\n// get hits at timestamp 301, should return 3.\ncounter.getHits(301); \n</pre>\n<p></p>\n\n<p><b>Follow up:</b><br>\nWhat if the number of hits per second could be very large? Does your design scale?\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/elmirap">@elmirap</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Dropbox'],
  },
  {
    id: '363',
    name: 'Max Sum of Rectangle No Larger Than K',
    acceptance: '33.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a non-empty 2D matrix <i>matrix</i> and an integer <i>k</i>, find the max sum of a rectangle in the <i>matrix</i> such that its sum is no larger than <i>k</i>.</p>\n\n<p><b>Example:</b><br>\n</p><pre>Given matrix = [\n  [1,  0, 1],\n  [0, -2, 3]\n]\nk = 2\n</pre>\n<p></p>\n\n<p>The answer is <code>2</code>. Because the sum of rectangle <code>[[0, 1], [-2, 3]]</code> is 2 and 2 is the max number no larger than k (k = 2).</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The rectangle inside the matrix must have an area &gt; 0.</li>\n<li>What if the number of rows is much larger than the number of columns?</li>\n</ol>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/fujiaozhu">@fujiaozhu</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '364',
    name: 'Nested List Weight Sum II ',
    acceptance: '53.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a nested list of integers, return the sum of all integers in the list weighted by their depth.</p>\n\n<p>Each element is either an integer, or a list -- whose elements may also be integers or other lists.</p>\n\n<p>Different from the <a href="https://leetcode.com/problems/nested-list-weight-sum/">previous question</a> where weight is increasing from root to leaf, now the weight is defined from bottom up. i.e., the leaf level integers have weight 1, and the root level integers have the largest weight.</p>\n\n<p><b>Example 1:</b><br>\nGiven the list <code>[[1,1],2,[1,1]]</code>, return <b>8</b>. (four 1\'s at depth 1, one 2 at depth 2)</p>\n\n<p><b>Example 2:</b><br>\nGiven the list <code>[1,[4,[6]]]</code>, return <b>17</b>. (one 1 at depth 3, one 4 at depth 2, and one 6 at depth 1; 1*3 + 4*2 + 6*1 = 17)\n</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '365',
    name: 'Water and Jug Problem',
    acceptance: '27.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>You are given two jugs with capacities <i>x</i> and <i>y</i> litres. There is an infinite amount of water supply available.\nYou need to determine whether it is possible to measure exactly <i>z</i> litres using these two jugs.</p>\n\n<p>If <i>z</i> liters of water is measurable, you must have <i>z</i> liters of water contained within <b>one or both buckets</b> by the end.</p>\n\n<p>\nOperations allowed:\n</p><ul>\n<li>Fill any of the jugs completely with water.</li>\n<li>Empty any of the jugs.</li>\n<li>Pour water from one jug into another till the other jug is completely full or the first jug itself is empty.</li>\n</ul>\n<p></p>\n\n<p><b>Example 1:</b> (From the famous <a href="https://www.youtube.com/watch?v=BVtQNK_ZUJg" target="_blank"><i>"Die Hard"</i> example</a>)\n</p><pre>Input: x = 3, y = 5, z = 4\nOutput: True\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>Input: x = 2, y = 6, z = 5\nOutput: False\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/vinod23">@vinod23</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '366',
    name: 'Find Leaves of Binary Tree ',
    acceptance: '60.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, collect a tree\'s nodes as if you were doing this: Collect and remove all leaves, repeat until the tree is empty.\n</p>\n\n<p>\n<b>Example:</b><br>\nGiven binary tree <br>\n</p><pre>          1\n         / \\\n        2   3\n       / \\     \n      4   5    \n</pre>\n<p></p>\n<p>\nReturns <code>[4, 5, 3], [2], [1]</code>.\n</p>\n\n<p>\n<b>Explanation:</b><br>\n</p><p>\n1. Removing the leaves <code>[4, 5, 3]</code> would result in this tree:\n</p><pre>          1\n         / \n        2          \n</pre>\n<p></p>\n<p>\n2. Now removing the leaf <code>[2]</code> would result in this tree:\n</p><pre>          1          \n</pre>\n<p></p>\n<p>\n3. Now removing the leaf <code>[1]</code> would result in the empty tree:\n</p><pre>          []         \n</pre>\n<p></p>\n<p></p>\n<p>\nReturns <code>[4, 5, 3], [2], [1]</code>.\n</p><p>\n\n</p><p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/elmirap">@elmirap</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '367',
    name: 'Valid Perfect Square',
    acceptance: '38.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a positive integer <i>num</i>, write a function which returns True if <i>num</i> is a perfect square else False.</p>\n\n<p>\n<b>Note:</b> <b>Do not</b> use any built-in library function such as <code>sqrt</code>.\n</p>\n\n<p><b>Example 1:</b>\n</p><pre>Input: 16\nReturns: True\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>Input: 14\nReturns: False\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/elmirap">@elmirap</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '368',
    name: 'Largest Divisible Subset',
    acceptance: '33.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a set of <b>distinct</b> positive integers, find the largest subset such that every pair (S<sub>i</sub>, S<sub>j</sub>) of elements in this subset satisfies: S<sub>i</sub> % S<sub>j</sub> = 0 or S<sub>j</sub> % S<sub>i</sub> = 0.\n</p>\n\n<p>If there are multiple solutions, return any subset is fine.\n</p>\n\n<p><b>Example 1:</b>\n</p><pre>nums: [1,2,3]\n\nResult: [1,2] (of course, [1,3] will also be ok)\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>nums: [1,2,4,8]\n\nResult: [1,2,4,8]\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/stomach_ache">@Stomach_ache</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '369',
    name: 'Plus One Linked List ',
    acceptance: '54.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a non-negative integer represented as <b>non-empty</b> a singly linked list of digits, plus one to the integer.</p>\n\n<p>You may assume the integer do not contain any leading zero, except the number 0 itself.</p>\n\n<p>The digits are stored such that the most significant digit is at the head of the list.</p>\n\n<p><b>Example:</b><br>\n</p><pre>Input:\n1-&gt;2-&gt;3\n\nOutput:\n1-&gt;2-&gt;4\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '370',
    name: 'Range Addition ',
    acceptance: '56.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Assume you have an array of length <b><i>n</i></b> initialized with all <b>0</b>\'s and are given <b><i>k</i></b> update operations.</p>\n\n<p>Each operation is represented as a triplet: <b>[startIndex, endIndex, inc]</b> which increments each element of subarray <b>A[startIndex ... endIndex]</b> (startIndex and endIndex inclusive) with <b>inc</b>.</p>\n\n<p>Return the modified array after all <b><i>k</i></b> operations were executed.</p>\n\n<p><b>Example:</b>\n</p><pre>Given:\n\n    length = 5,\n    updates = [\n        [1,  3,  2],\n        [2,  4,  3],\n        [0,  2, -2]\n    ]\n\nOutput:\n\n    [-2, 0, 3, 5, 3]\n</pre>\n<p></p>\n\n<p><b>Explanation:</b>\n</p><pre>Initial state:\n[ 0, 0, 0, 0, 0 ]\n\nAfter applying operation [1, 3, 2]:\n[ 0, 2, 2, 2, 0 ]\n\nAfter applying operation [2, 4, 3]:\n[ 0, 2, 5, 5, 3 ]\n\nAfter applying operation [0, 2, -2]:\n[-2, 0, 3, 5, 3 ]\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/vinod23">@vinod23</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '371',
    name: 'Sum of Two Integers',
    acceptance: '51.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Calculate the sum of two integers <i>a</i> and <i>b</i>, but you are <b>not allowed</b> to use the operator <code>+</code> and <code>-</code>.</p>\n\n<p><b>Example:</b><br>\nGiven <i>a</i> = 1 and <i>b</i> = 2, return 3.\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://discuss.leetcode.com/user/fujiaozhu">@fujiaozhu</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Hulu'],
  },
  {
    id: '372',
    name: 'Super Pow',
    acceptance: '34.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYour task is to calculate <i>a</i><sup><i>b</i></sup> mod 1337 where <i>a</i> is a positive integer and <i>b</i> is an extremely large positive integer given in the form of an array.\n</p>\n\n<p><b>Example1:</b>\n</p><pre>a = 2\nb = [3]\n\nResult: 8\n</pre>\n<p></p>\n\n<p><b>Example2:</b>\n</p><pre>a = 2\nb = [1,0]\n\nResult: 1024\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/stomach_ache">@Stomach_ache</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '373',
    name: 'Find K Pairs with Smallest Sums',
    acceptance: '31.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYou are given two integer arrays <b>nums1</b> and <b>nums2</b> sorted in ascending order and an integer <b>k</b>. \n</p>\n\n<p>Define a pair <b>(u,v)</b> which consists of one element from the first array and one element from the second array.</p>\n\n<p>Find the k pairs <b>(u<sub>1</sub>,v<sub>1</sub>),(u<sub>2</sub>,v<sub>2</sub>) ...(u<sub>k</sub>,v<sub>k</sub>)</b> with the smallest sums.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>Given nums1 = [1,7,11], nums2 = [2,4,6],  k = 3\n\nReturn: [1,2],[1,4],[1,6]\n\nThe first 3 pairs are returned from the sequence:\n[1,2],[1,4],[1,6],[7,2],[7,4],[11,2],[7,6],[11,4],[11,6]\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>Given nums1 = [1,1,2], nums2 = [1,2,3],  k = 2\n\nReturn: [1,1],[1,1]\n\nThe first 2 pairs are returned from the sequence:\n[1,1],[1,1],[1,2],[2,1],[1,2],[2,2],[1,3],[1,3],[2,3]\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre>Given nums1 = [1,2], nums2 = [3],  k = 3 \n\nReturn: [1,3],[2,3]\n\nAll possible pairs are returned from the sequence:\n[1,3],[2,3]\n</pre>\n<p></p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/elmirap/">@elmirap</a> and <a href="https://leetcode.com/stefanpochmann/">@StefanPochmann</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Uber'],
  },
  {
    id: '374',
    name: 'Guess Number Higher or Lower',
    acceptance: '36.1%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>We are playing the Guess Game. The game is as follows:</p><p> \n\n</p><p>I pick a number from <b>1</b> to <b><i>n</i></b>. You have to guess which number I picked.</p>\n\n<p>Every time you guess wrong, I'll tell you whether the number is higher or lower.</p>\n\n<p>You call a pre-defined API <code>guess(int num)</code> which returns 3 possible results (<code>-1</code>, <code>1</code>, or <code>0</code>):</p>\n<pre>-1 : My number is lower\n 1 : My number is higher\n 0 : Congrats! You got it!\n</pre>\n\n<p><b>Example:</b><br>\n</p><pre>n = 10, I pick 6.\n\nReturn 6.\n</pre>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '375',
    name: 'Guess Number Higher or Lower II',
    acceptance: '35.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>We are playing the Guess Game. The game is as follows:</p><p> \n\n</p><p>I pick a number from <strong>1</strong> to <strong>n</strong>. You have to guess which number I picked.</p>\n\n<p>Every time you guess wrong, I\'ll tell you whether the number I picked is higher or lower. </p>\n\n<p>However, when you guess a particular number x,  and you guess wrong, you pay <b>$x</b>. You win the game when you guess the number I picked.</p>\n\n<p>\n<b>Example:</b>\n</p><pre>n = 10, I pick 8.\n\nFirst round:  You guess 5, I tell you that it\'s higher. You pay $5.\nSecond round: You guess 7, I tell you that it\'s higher. You pay $7.\nThird round:  You guess 9, I tell you that it\'s lower. You pay $9.\n\nGame over. 8 is the number I picked.\n\nYou end up paying $5 + $7 + $9 = $21.\n</pre>\n<p></p>\n\n<p>Given a particular <strong>n ≥ 1</strong>, find out how much money you need to have to guarantee a <b>win</b>.</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/agave/">@agave</a> and <a href="https://leetcode.com/stefanpochmann/">@StefanPochmann</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '376',
    name: 'Wiggle Subsequence',
    acceptance: '36.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>A sequence of numbers is called a <strong>wiggle sequence</strong> if the differences between successive numbers strictly alternate between positive and negative. The first difference (if one exists) may be either positive or negative. A sequence with fewer than two elements is trivially a wiggle sequence. </p>\n\n<p>For example, <code>[1,7,4,9,2,5]</code> is a wiggle sequence because the differences (6,-3,5,-7,3) are alternately positive and negative. In contrast, <code>[1,4,7,2,5]</code> and <code>[1,7,4,5,5]</code> are not wiggle sequences, the first because its first two differences are positive and the second because its last difference is zero.</p>\n\n<p>Given a sequence of integers, return the length of the longest subsequence that is a wiggle sequence. A subsequence is obtained by deleting some number of elements (eventually, also zero) from the original sequence, leaving the remaining elements in their original order.</p>\n\n<p><b>Examples:</b><br>\n</p><pre><b>Input:</b> [1,7,4,9,2,5]\n<b>Output:</b> 6\nThe entire sequence is a wiggle sequence.\n\n<b>Input:</b> [1,17,5,10,13,15,10,5,16,8]\n<b>Output:</b> 7\nThere are several subsequences that achieve this length. One is [1,17,10,13,10,16,8].\n\n<b>Input:</b> [1,2,3,4,5,6,7,8,9]\n<b>Output:</b> 2\n</pre>\n<p></p>\n\n<p><b>Follow up:</b><br>\nCan you do it in O(<i>n</i>) time?\n</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/agave/">@agave</a> and <a href="https://leetcode.com/stefanpochmann/">@StefanPochmann</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: [],
  },
  {
    id: '377',
    name: 'Combination Sum IV',
    acceptance: '42.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p> Given an integer array with all positive numbers and no duplicates, find the number of possible combinations that add up to a positive integer target.</p>\n\n<p><b>Example:</b>\n</p><pre><i><b>nums</b></i> = [1, 2, 3]\n<i><b>target</b></i> = 4\n\nThe possible combination ways are:\n(1, 1, 1, 1)\n(1, 1, 2)\n(1, 2, 1)\n(1, 3)\n(2, 1, 1)\n(2, 2)\n(3, 1)\n\nNote that different sequences are counted as different combinations.\n\nTherefore the output is <i><b>7</b></i>.\n</pre>\n<p></p>\n\n<p><b>Follow up:</b><br>\nWhat if negative numbers are allowed in the given array?<br>\nHow does it change the problem?<br>\nWhat limitation we need to add to the question to allow negative numbers? </p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/pbrother/">@pbrother</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Google', 'Facebook', 'Snapchat'],
  },
  {
    id: '378',
    name: 'Kth Smallest Element in a Sorted Matrix',
    acceptance: '45.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a <i>n</i> x <i>n</i> matrix where each of the rows and columns are sorted in ascending order, find the kth smallest element in the matrix.</p>\n\n<p>\nNote that it is the kth smallest element in the sorted order, not the kth distinct element.\n</p>\n\n<p><b>Example:</b>\n</p><pre>matrix = [\n   [ 1,  5,  9],\n   [10, 11, 13],\n   [12, 13, 15]\n],\nk = 8,\n\nreturn 13.\n</pre>\n<p></p>\n\n<p><b>Note: </b><br>\nYou may assume k is always valid, 1 ≤ k ≤ n<sup>2</sup>.</p>\n          ',
    tags: ['Google', 'Twitter'],
  },
  {
    id: '379',
    name: 'Design Phone Directory ',
    acceptance: '34.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Design a Phone Directory which supports the following operations:</p>\n\n<p>\n</p><ol>\n<li><code>get</code>: Provide a number which is not assigned to anyone.</li>\n<li><code>check</code>: Check if a number is available or not.</li>\n<li><code>release</code>: Recycle or release a number.</li>\n</ol>\n<p></p>\n\n<p><b>Example:</b>\n</p><pre>// Init a phone directory containing a total of 3 numbers: 0, 1, and 2.\nPhoneDirectory directory = new PhoneDirectory(3);\n\n// It can return any available phone number. Here we assume it returns 0.\ndirectory.get();\n\n// Assume it returns 1.\ndirectory.get();\n\n// The number 2 is available, so return true.\ndirectory.check(2);\n\n// It returns 2, the only number that is left.\ndirectory.get();\n\n// The number 2 is no longer available, so return false.\ndirectory.check(2);\n\n// Release number 2 back to the pool.\ndirectory.release(2);\n\n// Number 2 is available again, return true.\ndirectory.check(2);\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '380',
    name: 'Insert Delete GetRandom O(1)',
    acceptance: '39.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Design a data structure that supports all following operations in <i>average</i> <b>O(1)</b> time.</p>\n\n<p>\n</p><ol>\n<li><code>insert(val)</code>: Inserts an item val to the set if not already present.</li>\n<li><code>remove(val)</code>: Removes an item val from the set if present.</li>\n<li><code>getRandom</code>: Returns a random element from current set of elements. Each element must have the <b>same probability</b> of being returned.</li>\n</ol>\n<p></p>\n\n<p><b>Example:</b>\n</p><pre>// Init an empty set.\nRandomizedSet randomSet = new RandomizedSet();\n\n// Inserts 1 to the set. Returns true as 1 was inserted successfully.\nrandomSet.insert(1);\n\n// Returns false as 2 does not exist in the set.\nrandomSet.remove(2);\n\n// Inserts 2 to the set, returns true. Set now contains [1,2].\nrandomSet.insert(2);\n\n// getRandom should return either 1 or 2 randomly.\nrandomSet.getRandom();\n\n// Removes 1 from the set, returns true. Set now contains [2].\nrandomSet.remove(1);\n\n// 2 was already in the set, so return false.\nrandomSet.insert(2);\n\n// Since 2 is the only number in the set, getRandom always return 2.\nrandomSet.getRandom();\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Facebook', 'Amazon', 'Uber', 'Twitter', 'Yelp', 'Pocket Gems'],
  },
  {
    id: '381',
    name: 'Insert Delete GetRandom O(1) - Duplicates allowed',
    acceptance: '29.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Design a data structure that supports all following operations in <i>average</i> <b>O(1)</b> time.</p>\n<b>Note: Duplicate elements are allowed.</b>\n<p>\n</p><ol>\n<li><code>insert(val)</code>: Inserts an item val to the collection.</li>\n<li><code>remove(val)</code>: Removes an item val from the collection if present.</li>\n<li><code>getRandom</code>: Returns a random element from current collection of elements. The probability of each element being returned is <b>linearly related</b> to the number of same value the collection contains.</li>\n</ol>\n<p></p>\n\n<p><b>Example:</b>\n</p><pre>// Init an empty collection.\nRandomizedCollection collection = new RandomizedCollection();\n\n// Inserts 1 to the collection. Returns true as the collection did not contain 1.\ncollection.insert(1);\n\n// Inserts another 1 to the collection. Returns false as the collection contained 1. Collection now contains [1,1].\ncollection.insert(1);\n\n// Inserts 2 to the collection, returns true. Collection now contains [1,1,2].\ncollection.insert(2);\n\n// getRandom should return 1 with the probability 2/3, and returns 2 with the probability 1/3.\ncollection.getRandom();\n\n// Removes 1 from the collection, returns true. Collection now contains [1,2].\ncollection.remove(1);\n\n// getRandom should return 1 and 2 both equally likely.\ncollection.getRandom();\n</pre>\n<p></p>\n          ',
    tags: ['Yelp'],
  },
  {
    id: '382',
    name: 'Linked List Random Node',
    acceptance: '47.3%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a singly linked list, return a random node's value from the linked list. Each node must have the <b>same probability</b> of being chosen.</p>\n\n<p><b>Follow up:</b><br>\nWhat if the linked list is extremely large and its length is unknown to you? Could you solve this efficiently without using extra space?\n</p>\n\n<p><b>Example:</b>\n</p><pre>// Init a singly linked list [1,2,3].\nListNode head = new ListNode(1);\nhead.next = new ListNode(2);\nhead.next.next = new ListNode(3);\nSolution solution = new Solution(head);\n\n// getRandom() should return either 1, 2, or 3 randomly. Each element should have equal probability of returning.\nsolution.getRandom();\n</pre>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '383',
    name: 'Ransom Note',
    acceptance: '47.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom \nnote can be constructed from the magazines ; otherwise, it will return false. \n</p>\n<p>\nEach letter in the magazine string can only be used once in your ransom note.\n</p>\n\n<p><b>Note:</b><br>\nYou may assume that both strings contain only lowercase letters.\n</p>\n\n<pre>canConstruct("a", "b") -&gt; false\ncanConstruct("aa", "ab") -&gt; false\ncanConstruct("aa", "aab") -&gt; true\n</pre>\n\n          ',
    tags: ['Apple'],
  },
  {
    id: '384',
    name: 'Shuffle an Array',
    acceptance: '47.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Shuffle a set of numbers without duplicates.\n</p>\n\n<p><b>Example:</b>\n</p><pre>// Init an array with set 1, 2, and 3.\nint[] nums = {1,2,3};\nSolution solution = new Solution(nums);\n\n// Shuffle the array [1,2,3] and return its result. Any permutation of [1,2,3] must equally likely to be returned.\nsolution.shuffle();\n\n// Resets the array back to its original configuration [1,2,3].\nsolution.reset();\n\n// Returns the random shuffling of array [1,2,3].\nsolution.shuffle();\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '385',
    name: 'Mini Parser',
    acceptance: '30.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a nested list of integers represented as a string, implement a parser to deserialize it.</p>\n\n<p>Each element is either an integer, or a list -- whose elements may also be integers or other lists.</p>\n\n<p><b>Note:</b>\nYou may assume that the string is well-formed:\n</p><ul>\n<li>String is non-empty.</li>\n<li>String does not contain white spaces.</li>\n<li>String contains only digits <code>0-9</code>, <code>[</code>, <code>-</code> <code>,</code>, <code>]</code>.</li>\n</ul>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre>Given s = "324",\n\nYou should return a NestedInteger object which contains a single integer 324.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>Given s = "[123,[456,[789]]]",\n\nReturn a NestedInteger object containing a nested list with 2 elements:\n\n1. An integer containing value 123.\n2. A nested list containing two elements:\n    i.  An integer containing value 456.\n    ii. A nested list with one element:\n         a. An integer containing value 789.\n</pre>\n<p></p>\n          ',
    tags: ['Airbnb'],
  },
  {
    id: '386',
    name: 'Lexicographical Numbers',
    acceptance: '42.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an integer <i>n</i>, return 1 - <i>n</i> in lexicographical order.\n</p>\n\n<p>\nFor example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].\n</p>\n\n<p>\nPlease optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.\n</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '387',
    name: 'First Unique Character in a String',
    acceptance: '47.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string, find the first non-repeating character in it and return it\'s index. If it doesn\'t exist, return -1.\n</p>\n<p><b>Examples:</b>\n</p><pre>s = "leetcode"\nreturn 0.\n\ns = "loveleetcode",\nreturn 2.\n</pre>\n<p></p>\n\n<p>\n<b>Note:</b> You may assume the string contain only lowercase letters.\n</p>\n          ',
    tags: ['Google', 'Microsoft', 'Amazon', 'Bloomberg'],
  },
  {
    id: '388',
    name: 'Longest Absolute File Path',
    acceptance: '37.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Suppose we abstract our file system by a string in the following manner:</p>\n\n<p>The string <code>"dir\\n\\tsubdir1\\n\\tsubdir2\\n\\t\\tfile.ext"</code> represents:</p>\n\n<pre>dir\n    subdir1\n    subdir2\n        file.ext\n</pre>\n\n<p>The directory <code>dir</code> contains an empty sub-directory <code>subdir1</code> and a sub-directory <code>subdir2</code> containing a file <code>file.ext</code>.</p>\n\n<p>The string <code>"dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext"</code> represents:</p>\n\n<pre>dir\n    subdir1\n        file1.ext\n        subsubdir1\n    subdir2\n        subsubdir2\n            file2.ext\n</pre>\n\n<p>The directory <code>dir</code> contains two sub-directories <code>subdir1</code> and <code>subdir2</code>. <code>subdir1</code> contains a file <code>file1.ext</code> and an empty second-level sub-directory <code>subsubdir1</code>. <code>subdir2</code> contains a second-level sub-directory <code>subsubdir2</code> containing a file <code>file2.ext</code>.</p>\n\n<p>We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is <code>"dir/subdir2/subsubdir2/file2.ext"</code>, and its length is <code>32</code> (not including the double quotes).</p>\n\n<p>Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return <code>0</code>.</p>\n\n<p><b>Note:</b><br>\n</p><ul>\n<li>The name of a file contains at least a <code>.</code> and an extension.</li>\n<li>The name of a directory or sub-directory will not contain a <code>.</code>.</li>\n</ul>\n<p></p>\n\n<p>Time complexity required: <code>O(n)</code> where <code>n</code> is the size of the input string.</p>\n\n<p>Notice that <code>a/aa/aaa/file1.txt</code> is not the longest file path, if there is another path <code>aaaaaaaaaaaaaaaaaaaaa/sth.png</code>.</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '389',
    name: 'Find the Difference',
    acceptance: '51.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two strings <b><i>s</i></b> and <b><i>t</i></b> which consist of only lowercase letters.</p>\n\n<p>String <b><i>t</i></b> is generated by random shuffling string <b><i>s</i></b> and then add one more letter at a random position.</p>\n\n<p>Find the letter that was added in <b><i>t</i></b>.</p>\n\n<p><b>Example:</b>\n</p><pre>Input:\ns = "abcd"\nt = "abcde"\n\nOutput:\ne\n\nExplanation:\n\'e\' is the letter that was added.\n</pre>\n          ',
    tags: ['Google'],
  },
  {
    id: '390',
    name: 'Elimination Game',
    acceptance: '42.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nThere is a list of sorted integers from 1 to <i>n</i>. Starting from left to right, remove the first number and every other number afterward until you reach the end of the list.</p>\n\n<p>Repeat the previous step again, but this time from right to left, remove the right most number and every other number from the remaining numbers.</p>\n\n<p>We keep repeating the steps again, alternating left to right and right to left, until a single number remains.</p>\n\n<p>Find the last number that remains starting with a list of length <i>n</i>.</p>\n\n<p><b>Example:</b>\n</p><pre>Input:\nn = 9,\n<u>1</u> 2 <u>3</u> 4 <u>5</u> 6 <u>7</u> 8 <u>9</u>\n2 <u>4</u> 6 <u>8</u>\n<u>2</u> 6\n6\n\nOutput:\n6\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '391',
    name: 'Perfect Rectangle',
    acceptance: '27.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven N axis-aligned rectangles where N &gt; 0, determine if they all together form an exact cover of a rectangular region.\n</p>\n\n<p>\nEach rectangle is represented as a bottom-left point and a top-right point. For example, a unit square is represented as [1,1,2,2]. (coordinate of bottom-left point is (1, 1) and top-right point is (2, 2)).\n</p>\n\n<div style="float:right"><img src="https://leetcode.com/static/images/problemset/rectangle_perfect.gif"></div>\n<p><b>Example 1:</b>\n</p><pre>rectangles = [\n  [1,1,3,3],\n  [3,1,4,2],\n  [3,2,4,4],\n  [1,3,2,4],\n  [2,3,3,4]\n]\n\nReturn true. All 5 rectangles together form an exact cover of a rectangular region.\n</pre>\n<p></p>\n\n<div style="clear:both"></div>\n\n<div style="float:right"><img src="https://leetcode.com/static/images/problemset/rectangle_separated.gif"></div>\n<p><b>Example 2:</b>\n</p><pre>rectangles = [\n  [1,1,2,3],\n  [1,3,2,4],\n  [3,1,4,2],\n  [3,2,4,4]\n]\n\nReturn false. Because there is a gap between the two rectangular regions.\n</pre>\n<p></p>\n\n<div style="clear:both"></div>\n\n<div style="float:right"><img src="https://leetcode.com/static/images/problemset/rectangle_hole.gif"></div>\n<p><b>Example 3:</b>\n</p><pre>rectangles = [\n  [1,1,3,3],\n  [3,1,4,2],\n  [1,3,2,4],\n  [3,2,4,4]\n]\n\nReturn false. Because there is a gap in the top center.\n</pre>\n<p></p>\n\n<div style="clear:both"></div>\n\n<div style="float:right"><img src="https://leetcode.com/static/images/problemset/rectangle_intersect.gif"></div>\n<p><b>Example 4:</b>\n</p><pre>rectangles = [\n  [1,1,3,3],\n  [3,1,4,2],\n  [1,3,2,4],\n  [2,2,4,4]\n]\n\nReturn false. Because two of the rectangles overlap with each other.\n</pre>\n<p></p>\n\n<div style="clear:both"></div>\n          ',
    tags: ['Google'],
  },
  {
    id: '392',
    name: 'Is Subsequence',
    acceptance: '44.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string <b>s</b> and a string <b>t</b>, check if <b>s</b> is subsequence of <b>t</b>.\n</p>\n\n<p>\nYou may assume that there is only lower case English letters in both <b>s</b> and <b>t</b>. <b>t</b> is potentially a very long (length ~= 500,000) string, and <b>s</b> is a short string (&lt;=100).\n</p>\n\n<p>\nA subsequence of a string is a new string which is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (ie, <code>"ace"</code> is a subsequence of <code>"abcde"</code> while <code>"aec"</code> is not).\n</p>\n\n<p><b>Example 1:</b><br>\n<b>s</b> = <code>"abc"</code>, <b>t</b> = <code>"ahbgdc"</code>\n</p>\n<p>\nReturn <code>true</code>.\n</p>\n\n<p><b>Example 2:</b><br>\n<b>s</b> = <code>"axc"</code>, <b>t</b> = <code>"ahbgdc"</code>\n</p>\n<p>\nReturn <code>false</code>.\n</p>\n\n<p><b>Follow up:</b><br>\nIf there are lots of incoming S, say S1, S2, ... , Sk where k &gt;= 1B, and you want to check one by one to see if T has its subsequence. In this scenario, how would you change your code?</p>\n\n<p><b>Credits:</b><br>Special thanks to <a href="https://leetcode.com/pbrother/">@pbrother</a> for adding this problem and creating all test cases.</p>\n          ',
    tags: ['Pinterest'],
  },
  {
    id: '393',
    name: 'UTF-8 Validation',
    acceptance: '34.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>A character in UTF8 can be from <b>1 to 4 bytes</b> long, subjected to the following rules:</p>\n<ol>\n<li>For 1-byte character, the first bit is a 0, followed by its unicode code.</li>\n<li>For n-bytes character, the first n-bits are all one's, the n+1 bit is 0, followed by n-1 bytes with most significant 2 bits being 10.</li>\n</ol>\n<p>This is how the UTF-8 encoding would work:</p>\n\n<pre><code>   Char. number range  |        UTF-8 octet sequence\n      (hexadecimal)    |              (binary)\n   --------------------+---------------------------------------------\n   0000 0000-0000 007F | 0xxxxxxx\n   0000 0080-0000 07FF | 110xxxxx 10xxxxxx\n   0000 0800-0000 FFFF | 1110xxxx 10xxxxxx 10xxxxxx\n   0001 0000-0010 FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx\n</code></pre>\n<p>\nGiven an array of integers representing the data, return whether it is a valid utf-8 encoding.\n</p>\n<p>\n<b>Note:</b><br>\nThe input is an array of integers. Only the <b>least significant 8 bits</b> of each integer is used to store the data. This means each integer represents only 1 byte of data.\n</p>\n\n<p>\n<b>Example 1:</b>\n</p><pre>data = [197, 130, 1], which represents the octet sequence: <b>11000101 10000010 00000001</b>.\n\nReturn <b>true</b>.\nIt is a valid utf-8 encoding for a 2-bytes character followed by a 1-byte character.\n</pre>\n<p></p>\n\n<p>\n<b>Example 2:</b>\n</p><pre>data = [235, 140, 4], which represented the octet sequence: <b>11101011 10001100 00000100</b>.\n\nReturn <b>false</b>.\nThe first 3 bits are all one's and the 4th bit is 0 means it is a 3-bytes character.\nThe next byte is a continuation byte which starts with 10 and that's correct.\nBut the second continuation byte does not start with 10, so it is invalid.\n</pre>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '394',
    name: 'Decode String',
    acceptance: '41.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an encoded string, return it\'s decoded string.\n</p>\n<p>\nThe encoding rule is: <code>k[encoded_string]</code>, where the <i>encoded_string</i> inside the square brackets is being repeated exactly <i>k</i> times. Note that <i>k</i> is guaranteed to be a positive integer.</p>\n\n<p>\nYou may assume that the input string is always valid; No extra white spaces, square brackets are well-formed, etc.</p>\n\n<p>Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, <i>k</i>. For example, there won\'t be input like <code>3a</code> or <code>2[4]</code>.\n</p>\n\n<p><b>Examples:</b>\n</p><pre>s = "3[a]2[bc]", return "aaabcbc".\ns = "3[a2[c]]", return "accaccacc".\ns = "2[abc]3[cd]ef", return "abcabccdcdcdef".\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Yelp', 'Coupang'],
  },
  {
    id: '395',
    name: 'Longest Substring with At Least K Repeating Characters',
    acceptance: '35.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nFind the length of the longest substring <b><i>T</i></b> of a given string (consists of lowercase letters only) such that every character in <b><i>T</i></b> appears no less than <i>k</i> times.\n</p>\n\n<p><b>Example 1:</b>\n</p><pre>Input:\ns = "aaabb", k = 3\n\nOutput:\n3\n\nThe longest substring is "aaa", as \'a\' is repeated 3 times.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>Input:\ns = "ababbc", k = 2\n\nOutput:\n5\n\nThe longest substring is "ababb", as \'a\' is repeated 2 times and \'b\' is repeated 3 times.\n</pre>\n<p></p>\n          ',
    tags: ['Baidu'],
  },
  {
    id: '396',
    name: 'Rotate Function',
    acceptance: '33.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of integers <code>A</code> and let <i>n</i> to be its length.\n</p>\n\n<p>\nAssume <code>B<sub>k</sub></code> to be an array obtained by rotating the array <code>A</code> <i>k</i> positions clock-wise, we define a "rotation function" <code>F</code> on <code>A</code> as follow:\n</p>\n\n<p>\n<code>F(k) = 0 * B<sub>k</sub>[0] + 1 * B<sub>k</sub>[1] + ... + (n-1) * B<sub>k</sub>[n-1]</code>.</p>\n\n<p>Calculate the maximum value of <code>F(0), F(1), ..., F(n-1)</code>. \n</p>\n\n<p><b>Note:</b><br>\n<i>n</i> is guaranteed to be less than 10<sup>5</sup>.\n</p>\n\n<p><b>Example:</b>\n</p><pre>A = [4, 3, 2, 6]\n\nF(0) = (0 * 4) + (1 * 3) + (2 * 2) + (3 * 6) = 0 + 3 + 4 + 18 = 25\nF(1) = (0 * 6) + (1 * 4) + (2 * 3) + (3 * 2) = 0 + 4 + 6 + 6 = 16\nF(2) = (0 * 2) + (1 * 6) + (2 * 4) + (3 * 3) = 0 + 6 + 8 + 9 = 23\nF(3) = (0 * 3) + (1 * 2) + (2 * 6) + (3 * 4) = 0 + 2 + 12 + 12 = 26\n\nSo the maximum value of F(0), F(1), F(2), F(3) is F(3) = 26.\n</pre>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '397',
    name: 'Integer Replacement',
    acceptance: '30.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a positive integer <i>n</i> and you can do operations as follow:\n</p>\n\n<p>\n</p><ol>\n<li>If <i>n</i> is even, replace <i>n</i> with <code><i>n</i>/2</code>.</li>\n<li>If <i>n</i> is odd, you can replace <i>n</i> with either <code><i>n</i> + 1</code> or <code><i>n</i> - 1</code>.</li>\n</ol>\n<p></p>\n\n<p>\nWhat is the minimum number of replacements needed for <i>n</i> to become 1?\n</p>\n\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b>\n8\n\n<b>Output:</b>\n3\n\n<b>Explanation:</b>\n8 -&gt; 4 -&gt; 2 -&gt; 1\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b>\n7\n\n<b>Output:</b>\n4\n\n<b>Explanation:</b>\n7 -&gt; 8 -&gt; 4 -&gt; 2 -&gt; 1\nor\n7 -&gt; 6 -&gt; 3 -&gt; 2 -&gt; 1\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Baidu'],
  },
  {
    id: '398',
    name: 'Random Pick Index',
    acceptance: '44.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of integers with possible duplicates, randomly output the index of a given target number. You can assume that the given target number must exist in the array.\n</p>\n\n<p>\n<b>Note:</b><br>\nThe array size can be very large. Solution that uses too much extra space will not pass the judge.\n</p>\n\n<p><b>Example:</b>\n</p><pre>int[] nums = new int[] {1,2,3,3,3};\nSolution solution = new Solution(nums);\n\n// pick(3) should return either index 2, 3, or 4 randomly. Each index should have equal probability of returning.\nsolution.pick(3);\n\n// pick(1) should return 0. Since in the array only nums[0] is equal to 1.\nsolution.pick(1);\n</pre>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '399',
    name: 'Evaluate Division',
    acceptance: '41.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nEquations are given in the format <code>A / B = k</code>, where  <code>A</code> and <code>B</code> are variables represented as strings, and <code>k</code> is a real number (floating point number). Given some queries, return the answers. If the answer does not exist, return <code>-1.0</code>.\n</p>\n<p><b>Example:</b><br>\nGiven <code> a / b = 2.0, b / c = 3.0.</code> <br>queries are: <code> a / c = ?,  b / a = ?, a / e = ?,  a / a = ?, x / x = ? .</code> <br>return <code> [6.0, 0.5, -1.0, 1.0, -1.0 ].</code>\n</p>\n<p>\nThe input is: <code> vector&lt;pair&lt;string, string&gt;&gt; equations, vector&lt;double&gt;&amp; values, vector&lt;pair&lt;string, string&gt;&gt; queries </code>, where <code>equations.size() == values.size()</code>, and the values are positive. This represents the equations. Return <code> vector&lt;double&gt;</code>.\n</p>\n\n<p>According to the example above:\n</p><pre>equations = [ ["a", "b"], ["b", "c"] ],\nvalues = [2.0, 3.0],\nqueries = [ ["a", "c"], ["b", "a"], ["a", "e"], ["a", "a"], ["x", "x"] ]. </pre>\n<p></p>\n\n<p>\nThe input is always valid. You may assume that evaluating the queries will result in no division by zero and there is no contradiction.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '400',
    name: 'Nth Digit',
    acceptance: '30.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Find the <i>n</i><sup>th</sup> digit of the infinite integer sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... </p>\n\n<p><b>Note:</b><br>\n<i>n</i> is positive and will fit within the range of a 32-bit signed integer (<i>n</i> &lt; 2<sup>31</sup>).\n</p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b>\n3\n\n<b>Output:</b>\n3\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b>\n11\n\n<b>Output:</b>\n0\n\n<b>Explanation:</b>\nThe 11th digit of the sequence 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ... is a 0, which is part of the number 10.\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '401',
    name: 'Binary Watch',
    acceptance: '44.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>A binary watch has 4 LEDs on the top which represent the <b>hours</b> (<b>0-11</b>), and the 6 LEDs on the bottom represent the <b>minutes</b> (<b>0-59</b>).</p>\n<p>Each LED represents a zero or one, with the least significant bit on the right.</p>\n<img src="https://upload.wikimedia.org/wikipedia/commons/8/8b/Binary_clock_samui_moon.jpg" height="300">\n<p>For example, the above binary watch reads "3:25".</p>\n\n<p>Given a non-negative integer <i>n</i> which represents the number of LEDs that are currently on, return all possible times the watch could represent.</p>\n\n<p><b>Example:</b>\n</p><pre>Input: n = 1<br>Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ul>\n<li>The order of output does not matter.</li>\n<li>The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".</li>\n<li>The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".</li>\n</ul>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '402',
    name: 'Remove K Digits',
    acceptance: '26.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a non-negative integer <i>num</i> represented as a string, remove <i>k</i> digits from the number so that the new number is the smallest possible.\n</p>\n\n<p><b>Note:</b><br>\n</p><ul>\n<li>The length of <i>num</i> is less than 10002 and will be ≥ <i>k</i>.</li>\n<li>The given <i>num</i> does not contain any leading zero.</li>\n</ul>\n\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre>Input: num = "1432219", k = 3\nOutput: "1219"\nExplanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>Input: num = "10200", k = 1\nOutput: "200"\nExplanation: Remove the leading 1 and the number is 200. Note that the output must not contain leading zeroes.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b>\n</p><pre>Input: num = "10", k = 2\nOutput: "0"\nExplanation: Remove all the digits from the number and it is left with nothing which is 0.\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Snapchat'],
  },
  {
    id: '403',
    name: 'Frog Jump',
    acceptance: '32.4%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>A frog is crossing a river. The river is divided into x units and at each unit there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.</p>\n\n<p>Given a list of stones' positions (in units) in sorted ascending order, determine if the frog is able to cross the river by landing on the last stone. Initially, the frog is on the first stone and assume the first jump must be 1 unit.\n</p>\n\n<p>If the frog's last jump was <i>k</i> units, then its next jump must be either <i>k</i> - 1, <i>k</i>, or <i>k</i> + 1 units. Note that the frog can only jump in the forward direction.</p>\n\n<p><b>Note:</b>\n</p><ul>\n<li>The number of stones is ≥ 2 and is &lt; 1,100.</li>\n<li>Each stone's position will be a non-negative integer &lt; 2<sup>31</sup>.</li>\n<li>The first stone's position is always 0.</li>\n</ul>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre><b>[0,1,3,5,6,8,12,17]</b>\n\nThere are a total of 8 stones.\nThe first stone at the 0th unit, second stone at the 1st unit,\nthird stone at the 3rd unit, and so on...\nThe last stone at the 17th unit.\n\n<b>Return true</b>. The frog can jump to the last stone by jumping \n1 unit to the 2nd stone, then 2 units to the 3rd stone, then \n2 units to the 4th stone, then 3 units to the 6th stone, \n4 units to the 7th stone, and 5 units to the 8th stone.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>[0,1,2,3,4,8,9,11]</b>\n\n<b>Return false</b>. There is no way to jump to the last stone as \nthe gap between the 5th and 6th stone is too large.\n</pre>\n<p></p>\n          ",
    tags: ['Snapchat'],
  },
  {
    id: '404',
    name: 'Sum of Left Leaves',
    acceptance: '47.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Find the sum of all left leaves in a given binary tree.</p>\n\n<p><b>Example:</b>\n</p><pre>    3\n   / \\\n  9  20\n    /  \\\n   15   7\n\nThere are two left leaves in the binary tree, with values <b>9</b> and <b>15</b> respectively. Return <b>24</b>.\n</pre>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '405',
    name: 'Convert a Number to Hexadecimal',
    acceptance: '41.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an integer, write an algorithm to convert it to hexadecimal. For negative integer, <a href="https://en.wikipedia.org/wiki/Two%27s_complement" target="_blank">two’s complement</a> method is used.\n</p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>All letters in hexadecimal (<code>a-f</code>) must be in lowercase.</li>\n<li>The hexadecimal string must not contain extra leading <code>0</code>s. If the number is zero, it is represented by a single zero character <code>\'0\'</code>; otherwise, the first character in the hexadecimal string will not be the zero character.</li>\n<li>The given number is guaranteed to fit within the range of a 32-bit signed integer.</li>\n<li>You <b>must not use <i>any</i> method provided by the library</b> which converts/formats the number to hex directly.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre>Input:\n26\n\nOutput:\n"1a"\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>Input:\n-1\n\nOutput:\n"ffffffff"\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '406',
    name: 'Queue Reconstruction by Height',
    acceptance: '56.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Suppose you have a random list of people standing in a queue. Each person is described by a pair of integers <code>(h, k)</code>, where <code>h</code> is the height of the person and <code>k</code> is the number of people in front of this person who have a height greater than or equal to <code>h</code>. Write an algorithm to reconstruct the queue.\n</p>\n\n<p><b>Note:</b><br>\nThe number of people is less than 1,100.\n</p>\n\n<br>\n\n<p><b>Example</b>\n</p><pre>Input:\n[[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]\n\nOutput:\n[[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '407',
    name: 'Trapping Rain Water II',
    acceptance: '37.8%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given an <code>m x n</code> matrix of positive integers representing the height of each unit cell in a 2D elevation map, compute the volume of water it is able to trap after raining.\n</p>\n\n<p><b>Note:</b><br>\nBoth <i>m</i> and <i>n</i> are less than 110. The height of each unit cell is greater than 0 and is less than 20,000.\n</p>\n\n<p><b>Example:</b>\n</p><pre>Given the following 3x6 height map:\n[\n  [1,4,3,1,3,2],\n  [3,2,1,3,2,4],\n  [2,3,3,2,3,1]\n]\n\nReturn 4.\n</pre>\n<p></p>\n\n<p>\n<img src="https://leetcode.com/static/images/problemset/rainwater_empty.png"><br>\nThe above image represents the elevation map <code>[[1,4,3,1,3,2],[3,2,1,3,2,4],[2,3,3,2,3,1]]</code> before the rain.\n</p>\n\n<p>\n<img src="https://leetcode.com/static/images/problemset/rainwater_fill.png"><br>\nAfter the rain, water are trapped between the blocks. The total volume of water trapped is 4.\n</p>\n          ',
    tags: ['Google', 'Twitter'],
  },
  {
    id: '408',
    name: 'Valid Word Abbreviation ',
    acceptance: '28.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a <b>non-empty</b> string <code>s</code> and an abbreviation <code>abbr</code>, return whether the string matches with the given abbreviation.\n</p>\n\n<p>A string such as <code>"word"</code> contains only the following valid abbreviations:</p>\n\n<pre>["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]\n</pre>\n\n<p>Notice that only the above abbreviations are valid abbreviations of the string <code>"word"</code>. Any other string is not a valid abbreviation of <code>"word"</code>.</p>\n\n<p><b>Note:</b><br>\nAssume <code>s</code> contains only lowercase letters and <code>abbr</code> contains only lowercase letters and digits.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>Given <b>s</b> = "internationalization", <b>abbr</b> = "i12iz4n":\n\nReturn true.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>Given <b>s</b> = "apple", <b>abbr</b> = "a2e":\n\nReturn false.\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '409',
    name: 'Longest Palindrome',
    acceptance: '45.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.</p>\n\n<p>This is case sensitive, for example <code>"Aa"</code> is not considered a palindrome here.</p>\n\n<p><b>Note:</b><br>\nAssume the length of given string will not exceed 1,010.\n</p>\n\n<p><b>Example: </b>\n</p><pre>Input:\n"abccccdd"\n\nOutput:\n7\n\nExplanation:\nOne longest palindrome that can be built is "dccaccd", whose length is 7.\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '410',
    name: 'Split Array Largest Sum',
    acceptance: '38.8%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given an array which consists of non-negative integers and an integer <i>m</i>, you can split the array into <i>m</i> non-empty continuous subarrays. Write an algorithm to minimize the largest sum among these <i>m</i> subarrays.\n</p>\n\n<p><b>Note:</b><br>\nIf <i>n</i> is the length of array, assume the following constraints are satisfied:\n</p><ul>\n<li>1 ≤ <i>n</i> ≤ 1000</li>\n<li>1 ≤ <i>m</i> ≤ min(50, <i>n</i>)</li>\n</ul>\n<p></p>\n\n<p><b>Examples: </b>\n</p><pre>Input:\n<b>nums</b> = [7,2,5,10,8]\n<b>m</b> = 2\n\nOutput:\n18\n\nExplanation:\nThere are four ways to split <b>nums</b> into two subarrays.\nThe best way is to split it into <b>[7,2,5]</b> and <b>[10,8]</b>,\nwhere the largest sum among the two subarrays is only 18.\n</pre>\n<p></p>\n          ',
    tags: ['Facebook', 'Baidu'],
  },
  {
    id: '411',
    name: 'Minimum Unique Word Abbreviation ',
    acceptance: '33.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>A string such as <code>"word"</code> contains the following abbreviations:</p>\n\n<pre>["word", "1ord", "w1rd", "wo1d", "wor1", "2rd", "w2d", "wo2", "1o1d", "1or1", "w1r1", "1o2", "2r1", "3d", "w3", "4"]\n</pre>\n\n<p>Given a target string and a set of strings in a dictionary, find an abbreviation of this target string with the <b><i>smallest possible</i></b> length such that it does not conflict with abbreviations of the strings in the dictionary. </p>\n\n<p>Each <b>number</b> or letter in the abbreviation is considered length = 1. For example, the abbreviation "a32bc" has length = 4.</p>\n\n<p><b>Note:</b><br>\n</p><ul>\n<li>In the case of multiple answers as shown in the second example below, you may return any one of them.</li>\n<li>Assume length of target string = <b>m</b>, and dictionary size = <b>n</b>. You may assume that <b>m ≤ 21</b>, <b>n ≤ 1000</b>, and <b>log<sub>2</sub>(n) + m ≤ 20</b>.</li>\n</ul>\n<p></p>\n\n<p><b>Examples:</b><br>\n</p><pre>"apple", ["blade"] -&gt; "a4" (because "5" or "4e" conflicts with "blade")\n\n"apple", ["plain", "amber", "blade"] -&gt; "1p3" (other valid answers include "ap3", "a3e", "2p2", "3le", "3l1").\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '412',
    name: 'Fizz Buzz',
    acceptance: '58.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Write a program that outputs the string representation of numbers from 1 to <i>n</i>.</p>\n\n<p>But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”. For numbers which are multiples of both three and five output “FizzBuzz”.</p>\n\n<p><b>Example:</b>\n</p><pre>n = 15,\n\nReturn:\n[\n    "1",\n    "2",\n    "Fizz",\n    "4",\n    "Buzz",\n    "Fizz",\n    "7",\n    "8",\n    "Fizz",\n    "Buzz",\n    "11",\n    "Fizz",\n    "13",\n    "14",\n    "FizzBuzz"\n]\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '413',
    name: 'Arithmetic Slices',
    acceptance: '54.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>A sequence of number is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.</p>\n\n<p>For example, these are arithmetic sequence:</p>\n<pre>1, 3, 5, 7, 9\n7, 7, 7, 7\n3, -1, -5, -9</pre>\n\n<p>The following sequence is not arithmetic.</p> <pre>1, 1, 2, 5, 7</pre> \n<br>\n\n<p>A zero-indexed array A consisting of N numbers is given. A slice of that array is any pair of integers (P, Q) such that 0 &lt;= P &lt; Q &lt; N.</p>\n\n<p>A slice (P, Q) of array A is called arithmetic if the sequence:<br>\n    A[P], A[p + 1], ..., A[Q - 1], A[Q] is arithmetic. In particular, this means that P + 1 &lt; Q.</p>\n\n<p>The function should return the number of arithmetic slices in the array A. </p>\n<br>\n\n<p><b>Example:</b>\n</p><pre>A = [1, 2, 3, 4]\n\nreturn: 3, for 3 arithmetic slices in A: [1, 2, 3], [2, 3, 4] and [1, 2, 3, 4] itself.\n</pre>\n          ',
    tags: ['Baidu', 'Aetion'],
  },
  {
    id: '414',
    name: 'Third Maximum Number',
    acceptance: '27.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a <b>non-empty</b> array of integers, return the <b>third</b> maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [3, 2, 1]\n\n<b>Output:</b> 1\n\n<b>Explanation:</b> The third maximum is 1.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1, 2]\n\n<b>Output:</b> 2\n\n<b>Explanation:</b> The third maximum does not exist, so the maximum (2) is returned instead.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> [2, 2, 3, 1]\n\n<b>Output:</b> 1\n\n<b>Explanation:</b> Note that the third maximum here means the third maximum distinct number.\nBoth numbers with value 2 are both considered as second maximum.\n</pre>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '415',
    name: 'Add Strings',
    acceptance: '41.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given two non-negative integers <code>num1</code> and <code>num2</code> represented as string, return the sum of <code>num1</code> and <code>num2</code>.</p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>The length of both <code>num1</code> and <code>num2</code> is &lt; 5100.</li>\n<li>Both <code>num1</code> and <code>num2</code> contains only digits <code>0-9</code>.</li>\n<li>Both <code>num1</code> and <code>num2</code> does not contain any leading zero.</li>\n<li>You <b>must not use any built-in BigInteger library</b> or <b>convert the inputs to integer</b> directly.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google', 'Airbnb'],
  },
  {
    id: '416',
    name: 'Partition Equal Subset Sum',
    acceptance: '39.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a <b>non-empty</b> array containing <b>only positive integers</b>, find if the array can be partitioned into two subsets such that the sum of elements in both subsets is equal.\n</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>Each of the array element will not exceed 100.</li>\n<li>The array size will not exceed 200.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre>Input: [1, 5, 11, 5]\n\nOutput: true\n\nExplanation: The array can be partitioned as [1, 5, 5] and [11].\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>Input: [1, 2, 3, 5]\n\nOutput: false\n\nExplanation: The array cannot be partitioned into equal sum subsets.\n</pre>\n<p></p>\n          ',
    tags: ['eBay'],
  },
  {
    id: '417',
    name: 'Pacific Atlantic Water Flow',
    acceptance: '34.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an <code>m x n</code> matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.</p>\n\n<p>Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.</p>\n\n<p>Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The order of returned grid coordinates does not matter.</li>\n<li>Both <i>m</i> and <i>n</i> are less than 150.</li>\n</ol>\n<p></p>\n<p><b>Example:</b>\n</p><pre>Given the following 5x5 matrix:\n\n  Pacific ~   ~   ~   ~   ~ \n       ~  1   2   2   3  (5) *\n       ~  3   2   3  (4) (4) *\n       ~  2   4  (5)  3   1  *\n       ~ (6) (7)  1   4   5  *\n       ~ (5)  1   1   2   4  *\n          *   *   *   *   * Atlantic\n\nReturn:\n\n[[0, 4], [1, 3], [1, 4], [2, 2], [3, 0], [3, 1], [4, 0]] (positions with parentheses in above matrix).\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '418',
    name: 'Sentence Screen Fitting ',
    acceptance: '28.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a <code>rows x cols</code> screen and a sentence represented by a list of <b>non-empty</b> words, find <b>how many times</b> the given sentence can be fitted on the screen.\n</p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>A word cannot be split into two lines.</li>\n<li>The order of words in the sentence must remain unchanged.</li>\n<li>Two consecutive words <b>in a line</b> must be separated by a single space.</li>\n<li>Total words in the sentence won\'t exceed 100.</li>\n<li>Length of each word is greater than 0 and won\'t exceed 10.</li>\n<li>1 ≤ rows, cols ≤ 20,000.</li>\n</ol>\n<p></p>\n\n<p>\n<b>Example 1:</b> \n</p><pre><b>Input:</b>\nrows = 2, cols = 8, sentence = ["hello", "world"]\n\n<b>Output:</b> \n1\n\n<b>Explanation:</b>\nhello---\nworld---\n\nThe character \'-\' signifies an empty space on the screen.\n</pre>\n<p></p>\n\n<p>\n<b>Example 2:</b> \n</p><pre><b>Input:</b>\nrows = 3, cols = 6, sentence = ["a", "bcd", "e"]\n\n<b>Output:</b> \n2\n\n<b>Explanation:</b>\na-bcd- \ne-a---\nbcd-e-\n\nThe character \'-\' signifies an empty space on the screen.\n</pre>\n<p></p>\n\n<p>\n<b>Example 3:</b> \n</p><pre><b>Input:</b>\nrows = 4, cols = 5, sentence = ["I", "had", "apple", "pie"]\n\n<b>Output:</b> \n1\n\n<b>Explanation:</b>\nI-had\napple\npie-I\nhad--\n\nThe character \'-\' signifies an empty space on the screen.\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '419',
    name: 'Battleships in a Board',
    acceptance: '62.4%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            Given an 2D board, count how many battleships are in it. The battleships are represented with <code>'X'</code>s, empty slots are represented with <code>'.'</code>s. You may assume the following rules:\n\n<ul>\n<li>You receive a valid board, made of only battleships or empty slots.</li>\n<li>Battleships can only be placed horizontally or vertically. In other words, they can only be made of the shape <code>1xN</code> (1 row, N columns) or <code>Nx1</code> (N rows, 1 column), where N can be of any size.</li>\n<li>At least one horizontal or vertical cell separates between two battleships - there are no adjacent battleships.</li>\n</ul>\n\n<p><b>Example:</b><br>\n</p><pre>X..X\n...X\n...X\n</pre>\nIn the above board there are 2 battleships.\n\n<p><b>Invalid Example:</b><br>\n</p><pre>...X\nXXXX\n...X\n</pre>\nThis is an invalid board that you will not receive - as battleships will always have a cell separating between them.\n<p></p>\n<p><b>Follow up:</b><br>Could you do it in <b>one-pass</b>, using only <b>O(1) extra memory</b> and <b>without modifying</b> the value of the board?</p>\n          ",
    tags: ['Microsoft'],
  },
  {
    id: '420',
    name: 'Strong Password Checker',
    acceptance: '20.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>A password is considered strong if below conditions are all met:</p>\n\n<ol>\n<li> It has at least 6 characters and at most 20 characters. </li>\n<li> It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit. </li>\n<li> It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met). </li>\n</ol>\n\n<p>Write a function strongPasswordChecker(s), that takes a string s as input, and return the <b>MINIMUM</b> change required to make s a strong password. If s is already strong, return 0.</p>\n\n<p>Insertion, deletion or replace of any one character are all considered as one change.</p>\n          ',
    tags: [],
  },
  {
    id: '421',
    name: 'Maximum XOR of Two Numbers in an Array',
    acceptance: '47.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a <b>non-empty</b> array of numbers, a<sub>0</sub>, a<sub>1</sub>, a<sub>2</sub>, … , a<sub>n-1</sub>, where 0 ≤ a<sub>i</sub> &lt; 2<sup>31</sup>.</p>\n\n<p>Find the maximum result of a<sub>i</sub> XOR a<sub>j</sub>, where 0 ≤ <i>i</i>, <i>j</i> &lt; <i>n</i>.</p>\n\n<p>Could you do this in O(<i>n</i>) runtime?</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b> [3, 10, 5, 25, 2, 8]\n\n<b>Output:</b> 28\n\n<b>Explanation:</b> The maximum result is <b>5</b> ^ <b>25</b> = 28.\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '422',
    name: 'Valid Word Square ',
    acceptance: '36.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a sequence of words, check whether it forms a valid word square.</p>\n\n<p>A sequence of words forms a valid word square if the <i>k</i><sup>th</sup> row and column read the exact same string, where 0 ≤ <i>k</i> &lt; max(numRows, numColumns).</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The number of words given is at least 1 and does not exceed 500.</li>\n<li>Word length will be at least 1 and does not exceed 500.</li>\n<li>Each word contains only lowercase English alphabet <code>a-z</code>.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b>\n[\n  "abcd",\n  "bnrt",\n  "crmy",\n  "dtye"\n]\n\n<b>Output:</b>\ntrue\n\n<b>Explanation:</b>\nThe first row and first column both read "abcd".\nThe second row and second column both read "bnrt".\nThe third row and third column both read "crmy".\nThe fourth row and fourth column both read "dtye".\n\nTherefore, it is a valid word square.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b>\n[\n  "abcd",\n  "bnrt",\n  "crm",\n  "dt"\n]\n\n<b>Output:</b>\ntrue\n\n<b>Explanation:</b>\nThe first row and first column both read "abcd".\nThe second row and second column both read "bnrt".\nThe third row and third column both read "crm".\nThe fourth row and fourth column both read "dt".\n\nTherefore, it is a valid word square.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b>\n</p><pre><b>Input:</b>\n[\n  "ball",\n  "area",\n  "read",\n  "lady"\n]\n\n<b>Output:</b>\nfalse\n\n<b>Explanation:</b>\nThe third row reads "read" while the third column reads "lead".\n\nTherefore, it is <b>NOT</b> a valid word square.\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '423',
    name: 'Reconstruct Original Digits from English',
    acceptance: '44.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a <b>non-empty</b> string containing an out-of-order English representation of digits <code>0-9</code>, output the digits in ascending order.</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>Input contains only lowercase English letters.</li>\n<li>Input is guaranteed to be valid and can be transformed to its original digits. That means invalid inputs such as "abc" or "zerone" are not permitted.</li>\n<li>Input length is less than 50,000.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre>Input: "owoztneoer"\n\nOutput: "012"\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>Input: "fviefuro"\n\nOutput: "45"\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '424',
    name: 'Longest Repeating Character Replacement',
    acceptance: '42.8%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a string that consists of only uppercase English letters, you can replace any letter in the string with another letter at most <i>k</i> times. Find the length of a longest substring containing all repeating letters you can get after performing the above operations.</p>\n\n<p><b>Note:</b><br>\nBoth the string's length and <i>k</i> will not exceed 10<sup>4</sup>.\n</p>\n\n<p>\n<b>Example 1:</b>\n</p><pre><b>Input:</b>\ns = \"ABAB\", k = 2\n\n<b>Output:</b>\n4\n\n<b>Explanation:</b>\nReplace the two 'A's with two 'B's or vice versa.\n</pre>\n<p></p>\n\n<p>\n<b>Example 2:</b>\n</p><pre><b>Input:</b>\ns = \"AABABBA\", k = 1\n\n<b>Output:</b>\n4\n\n<b>Explanation:</b>\nReplace the one 'A' in the middle with 'B' and form \"AABBBBA\".\nThe substring \"BBBB\" has the longest repeating letters, which is 4.\n</pre>\n<p></p>\n          ",
    tags: ['Pocket Gems'],
  },
  {
    id: '425',
    name: 'Word Squares ',
    acceptance: '43.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a set of words <b>(without duplicates)</b>, find all <a href="https://en.wikipedia.org/wiki/Word_square" target="_blank">word squares</a> you can build from them.</p>\n\n<p>A sequence of words forms a valid word square if the <i>k</i><sup>th</sup> row and column read the exact same string, where 0 ≤ <i>k</i> &lt; max(numRows, numColumns).</p>\n\n<p>For example, the word sequence <code>["ball","area","lead","lady"]</code> forms a word square because each word reads the same both horizontally and vertically.</p>\n\n<pre>b a l l\na r e a\nl e a d\nl a d y\n</pre>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>There are at least 1 and at most 1000 words.</li>\n<li>All words will have the exact same length.</li>\n<li>Word length is at least 1 and at most 5.</li>\n<li>Each word contains only lowercase English alphabet <code>a-z</code>.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b>\n["area","lead","wall","lady","ball"]\n\n<b>Output:</b>\n[\n  [ "wall",\n    "area",\n    "lead",\n    "lady"\n  ],\n  [ "ball",\n    "area",\n    "lead",\n    "lady"\n  ]\n]\n\n<b>Explanation:</b>\nThe output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b>\n["abat","baba","atan","atal"]\n\n<b>Output:</b>\n[\n  [ "baba",\n    "abat",\n    "baba",\n    "atan"\n  ],\n  [ "baba",\n    "abat",\n    "baba",\n    "atal"\n  ]\n]\n\n<b>Explanation:</b>\nThe output consists of two word squares. The order of output does not matter (just the order of words in each word square matters).\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '432',
    name: 'All O`one Data Structure',
    acceptance: '28.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Implement a data structure supporting the following operations:</p>\n\n<p>\n</p><ol>\n<li>Inc(Key) - Inserts a new key <key> with value 1. Or increments an existing key by 1. Key is guaranteed to be a <b>non-empty</b> string.</key></li>\n<li>Dec(Key) - If Key\'s value is 1, remove it from the data structure. Otherwise decrements an existing key by 1. If the key does not exist, this function does nothing. Key is guaranteed to be a <b>non-empty</b> string.</li>\n<li>GetMaxKey() - Returns one of the keys with maximal value. If no element exists, return an empty string <code>""</code>.</li>\n<li>GetMinKey() - Returns one of the keys with minimal value. If no element exists, return an empty string <code>""</code>.</li>\n</ol>\n<p></p>\n\n<p>\nChallenge: Perform all these in O(1) time complexity.\n</p>\n          ',
    tags: ['Uber'],
  },
  {
    id: '433',
    name: 'Minimum Genetic Mutation',
    acceptance: '34.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>A gene string can be represented by an 8-character long string, with choices from <code>"A"</code>, <code>"C"</code>, <code>"G"</code>, <code>"T"</code>.</p>\n\n<p>Suppose we need to investigate about a mutation (mutation from "start" to "end"), where ONE mutation is defined as ONE single character changed in the gene string.</p>\n\n<p>For example, <code>"AACCGGTT"</code> -&gt; <code>"AACCGGTA"</code> is 1 mutation.</p>\n\n<p>Also, there is a given gene "bank", which records all the valid gene mutations. A gene must be in the bank to make it a valid gene string.</p>\n\n<p>Now, given 3 things - start, end, bank, your task is to determine what is the minimum number of mutations needed to mutate from "start" to "end". If there is no such a mutation, return -1.</p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>Starting point is assumed to be valid, so it might not be included in the bank.</li>\n<li>If multiple mutations are needed, all mutations during in the sequence must be valid.</li>\n<li>You may assume start and end string is not the same.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre>start: "AACCGGTT"\nend:   "AACCGGTA"\nbank: ["AACCGGTA"]\n\nreturn: 1\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>start: "AACCGGTT"\nend:   "AAACGGTA"\nbank: ["AACCGGTA", "AACCGCTA", "AAACGGTA"]\n\nreturn: 2\n</pre>\n<p></p>\n\n<p><b>Example 3:</b>\n</p><pre>start: "AAAAACCC"\nend:   "AACCCCCC"\nbank: ["AAAACCCC", "AAACCCCC", "AACCCCCC"]\n\nreturn: 3\n</pre>\n<p></p>\n          ',
    tags: ['Twitter'],
  },
  {
    id: '434',
    name: 'Number of Segments in a String',
    acceptance: '36.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Count the number of segments in a string, where a segment is defined to be a contiguous sequence of non-space characters.</p>\n\n<p>Please note that the string does not contain any <b>non-printable</b> characters.</p>\n\n<p><b>Example:</b></p>\n<pre><b>Input:</b> "Hello, my name is John"\n<b>Output:</b> 5\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '435',
    name: 'Non-overlapping Intervals',
    acceptance: '41.5%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a collection of intervals, find the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.\n</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume the interval's end point is always bigger than its start point.</li>\n<li>Intervals like [1,2] and [2,3] have borders \"touching\" but they don't overlap each other.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [ [1,2], [2,3], [3,4], [1,3] ]\n\n<b>Output:</b> 1\n\n<b>Explanation:</b> [1,3] can be removed and the rest of intervals are non-overlapping.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [ [1,2], [1,2], [1,2] ]\n\n<b>Output:</b> 2\n\n<b>Explanation:</b> You need to remove two [1,2] to make the rest of intervals non-overlapping.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> [ [1,2], [2,3] ]\n\n<b>Output:</b> 0\n\n<b>Explanation:</b> You don't need to remove any of the intervals since they're already non-overlapping.\n</pre>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '436',
    name: 'Find Right Interval',
    acceptance: '41.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a set of intervals, for each of the interval i, check if there exists an interval j whose start point is bigger than or equal to the end point of the interval i, which can be called that j is on the "right" of i.\n</p>\n\n<p>\nFor any interval i, you need to store the minimum interval j\'s index, which means that the interval j has the minimum start point to build the "right" relationship for interval i. If the interval j doesn\'t exist, store -1 for the interval i. Finally, you need output the stored value of each interval as an array.\n</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume the interval\'s end point is always bigger than its start point.</li>\n<li>You may assume none of these intervals have the same start point.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [ [1,2] ]\n\n<b>Output:</b> [-1]\n\n<b>Explanation:</b> There is only one interval in the collection, so it outputs -1.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [ [3,4], [2,3], [1,2] ]\n\n<b>Output:</b> [-1, 0, 1]\n\n<b>Explanation:</b> There is no satisfied "right" interval for [3,4].\nFor [2,3], the interval [3,4] has minimum-"right" start point;\nFor [1,2], the interval [2,3] has minimum-"right" start point.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> [ [1,4], [2,3], [3,4] ]\n\n<b>Output:</b> [-1, 2, -1]\n\n<b>Explanation:</b> There is no satisfied "right" interval for [1,4] and [3,4].\nFor [2,3], the interval [3,4] has minimum-"right" start point.\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '437',
    name: 'Path Sum III',
    acceptance: '40.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>You are given a binary tree in which each node contains an integer value.</p>\n\n<p>Find the number of paths that sum to a given value.</p>\n\n<p>The path does not need to start or end at the root or a leaf, but it must go downwards\n(traveling only from parent nodes to child nodes).</p>\n\n<p>The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.\n\n</p><p><b>Example:</b>\n</p><pre>root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8\n\n      10\n     /  \\\n    <b>5</b>   <b>-3</b>\n   <b>/</b> <b>\\</b>    <b>\\</b>\n  <b>3</b>   <b>2</b>   <b>11</b>\n / \\   <b>\\</b>\n3  -2   <b>1</b>\n\nReturn 3. The paths that sum to 8 are:\n\n1.  5 -&gt; 3\n2.  5 -&gt; 2 -&gt; 1\n3. -3 -&gt; 11\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '438',
    name: 'Find All Anagrams in a String',
    acceptance: '33.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a string <b>s</b> and a <b>non-empty</b> string <b>p</b>, find all the start indices of <b>p</b>\'s anagrams in <b>s</b>.</p>\n\n<p>Strings consists of lowercase English letters only and the length of both strings <b>s</b> and <b>p</b> will not be larger than 20,100.</p>\n\n<p>The order of output does not matter.</p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b>\ns: "cbaebabacd" p: "abc"\n\n<b>Output:</b>\n[0, 6]\n\n<b>Explanation:</b>\nThe substring with start index = 0 is "cba", which is an anagram of "abc".\nThe substring with start index = 6 is "bac", which is an anagram of "abc".\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b>\ns: "abab" p: "ab"\n\n<b>Output:</b>\n[0, 1, 2]\n\n<b>Explanation:</b>\nThe substring with start index = 0 is "ab", which is an anagram of "ab".\nThe substring with start index = 1 is "ba", which is an anagram of "ab".\nThe substring with start index = 2 is "ab", which is an anagram of "ab".\n</pre>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '439',
    name: 'Ternary Expression Parser ',
    acceptance: '51.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a string representing arbitrarily nested ternary expressions, calculate the result of the expression. You can always assume that the given expression is valid and only consists of digits <code>0-9</code>, <code>?</code>, <code>:</code>, <code>T</code> and <code>F</code> (<code>T</code> and <code>F</code> represent True and False respectively).\n\n</p><p><b>Note:</b>\n</p><ol>\n<li>The length of the given string is ≤ 10000.</li>\n<li>Each number will contain only one digit.</li>\n<li>The conditional expressions group right-to-left (as usual in most languages).</li>\n<li>The condition will always be either <code>T</code> or <code>F</code>. That is, the condition will never be a digit.</li>\n<li>The result of the expression will always evaluate to either a digit <code>0-9</code>, <code>T</code> or <code>F</code>.</li>\n</ol>\n<p></p>\n\n<p>\n<b>Example 1:</b>\n</p><pre><b>Input:</b> "T?2:3"\n\n<b>Output:</b> "2"\n\n<b>Explanation:</b> If true, then result is 2; otherwise result is 3.\n</pre>\n<p></p>\n\n<p>\n<b>Example 2:</b>\n</p><pre><b>Input:</b> "F?1:T?4:5"\n\n<b>Output:</b> "4"\n\n<b>Explanation:</b> The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:\n\n             "(F ? 1 : (T ? 4 : 5))"                   "(F ? 1 : (T ? 4 : 5))"\n          -&gt; "(F ? 1 : 4)"                 or       -&gt; "(T ? 4 : 5)"\n          -&gt; "4"                                    -&gt; "4"\n</pre>\n<p></p>\n\n<p>\n<b>Example 3:</b>\n</p><pre><b>Input:</b> "T?T?F:5:3"\n\n<b>Output:</b> "F"\n\n<b>Explanation:</b> The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:\n\n             "(T ? (T ? F : 5) : 3)"                   "(T ? (T ? F : 5) : 3)"\n          -&gt; "(T ? F : 3)"                 or       -&gt; "(T ? F : 5)"\n          -&gt; "F"                                    -&gt; "F"\n</pre>\n<p></p>\n          ',
    tags: ['Snapchat'],
  },
  {
    id: '440',
    name: 'K-th Smallest in Lexicographical Order',
    acceptance: '25.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given integers <code>n</code> and <code>k</code>, find the lexicographically k-th smallest integer in the range from <code>1</code> to <code>n</code>.</p>\n\n<p>Note: 1 ≤ k ≤ n ≤ 10<sup>9</sup>.</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b>\nn: 13   k: 2\n\n<b>Output:</b>\n10\n\n<b>Explanation:</b>\nThe lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.\n</pre>\n<p></p>\n\n          ',
    tags: ['Hulu'],
  },
  {
    id: '441',
    name: 'Arranging Coins',
    acceptance: '36.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>You have a total of <i>n</i> coins that you want to form in a staircase shape, where every <i>k</i>-th row must have exactly <i>k</i> coins.</p>\n \n<p>Given <i>n</i>, find the total number of <b>full</b> staircase rows that can be formed.</p>\n\n<p><i>n</i> is a non-negative integer and fits within the range of a 32-bit signed integer.</p>\n\n<p><b>Example 1:</b>\n</p><pre>n = 5\n\nThe coins can form the following rows:\n¤\n¤ ¤\n¤ ¤\n\nBecause the 3rd row is incomplete, we return 2.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>n = 8\n\nThe coins can form the following rows:\n¤\n¤ ¤\n¤ ¤ ¤\n¤ ¤\n\nBecause the 4th row is incomplete, we return 3.\n</pre>\n<p></p>\n          ',
    tags: ['GoDaddy'],
  },
  {
    id: '442',
    name: 'Find All Duplicates in an Array',
    acceptance: '56.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array of integers, 1 ≤ a[i] ≤ <i>n</i> (<i>n</i> = size of array), some elements appear <b>twice</b> and others appear <b>once</b>.</p>\n\n<p>Find all the elements that appear <b>twice</b> in this array.</p>\n\n<p>Could you do it without extra space and in O(<i>n</i>) runtime?</p>\n<p></p>\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b>\n[4,3,2,7,8,2,3,1]\n\n<b>Output:</b>\n[2,3]\n</pre>\n          ',
    tags: ['Pocket Gems'],
  },
  {
    id: '443',
    name: 'String Compression',
    acceptance: '36.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array of characters, compress it <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank"><b>in-place</b></a>.</p>\n\n<p>The length after compression must always be smaller than or equal to the original array.</p>\n\n<p>Every element of the array should be a <b>character</b> (not int) of length 1.</p>\n \n<p>After you are done <b>modifying the input array <a href="https://en.wikipedia.org/wiki/In-place_algorithm" target="_blank">in-place</a></b>, return the new length of the array.</p>\n\n<br>\n\n<p><b>Follow up:</b><br>\nCould you solve it using only O(1) extra space?\n</p>\n\n<br>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\n["a","a","b","b","c","c","c"]\n\n<b>Output:</b>\nReturn 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]\n\n<b>Explanation:</b>\n"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>\n["a"]\n\n<b>Output:</b>\nReturn 1, and the first 1 characters of the input array should be: ["a"]\n\n<b>Explanation:</b>\nNothing is replaced.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b>\n["a","b","b","b","b","b","b","b","b","b","b","b","b"]\n\n<b>Output:</b>\nReturn 4, and the first 4 characters of the input array should be: ["a","b","1","2"].\n\n<b>Explanation:</b>\nSince the character "a" does not repeat, it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".\nNotice each digit has it\'s own entry in the array.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>All characters have an ASCII value in <code>[35, 126]</code>.</li>\n<li><code>1 &lt;= len(chars) &lt;= 1000</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Microsoft', 'Bloomberg', 'Snapchat', 'Yelp', 'Expedia', 'GoDaddy', 'Lyft'],
  },
  {
    id: '444',
    name: 'Sequence Reconstruction ',
    acceptance: '19.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Check whether the original sequence <code>org</code> can be uniquely reconstructed from the sequences in <code>seqs</code>. The <code>org</code> sequence is a permutation of the integers from 1 to n, with 1 ≤ n ≤ 10<sup>4</sup>. Reconstruction means building a shortest common supersequence of the sequences in <code>seqs</code> (i.e., a shortest sequence so that all sequences in <code>seqs</code> are subsequences of it). Determine whether there is only one sequence that can be reconstructed from <code>seqs</code> and it is the <code>org</code> sequence.</p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b>\norg: [1,2,3], seqs: [[1,2],[1,3]]\n\n<b>Output:</b>\nfalse\n\n<b>Explanation:</b>\n[1,2,3] is not the only one sequence that can be reconstructed, because [1,3,2] is also a valid sequence that can be reconstructed.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b>\norg: [1,2,3], seqs: [[1,2]]\n\n<b>Output:</b>\nfalse\n\n<b>Explanation:</b>\nThe reconstructed sequence can only be [1,2].\n</pre>\n<p></p>\n\n<p><b>Example 3:</b>\n</p><pre><b>Input:</b>\norg: [1,2,3], seqs: [[1,2],[1,3],[2,3]]\n\n<b>Output:</b>\ntrue\n\n<b>Explanation:</b>\nThe sequences [1,2], [1,3], and [2,3] can uniquely reconstruct the original sequence [1,2,3].\n</pre>\n<p></p>\n\n<p><b>Example 4:</b>\n</p><pre><b>Input:</b>\norg: [4,1,5,2,6,3], seqs: [[5,2,6,3],[4,1,5,2]]\n\n<b>Output:</b>\ntrue\n</pre>\n<p></p>\n\n<p>\n<b><font color="red">UPDATE (2017/1/8):</font></b><br>\nThe <i>seqs</i> parameter had been changed to a list of list of strings (instead of a 2d array of strings). Please reload the code definition to get the latest changes.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '445',
    name: 'Add Two Numbers II',
    acceptance: '46.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>You are given two <b>non-empty</b> linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.</p>\n\n<p>You may assume the two numbers do not contain any leading zero, except the number 0 itself.</p>\n\n<p><b>Follow up:</b><br>\nWhat if you cannot modify the input lists? In other words, reversing the lists is not allowed.\n</p>\n\n<p>\n<b>Example:</b>\n</p><pre><b>Input:</b> (7 -&gt; 2 -&gt; 4 -&gt; 3) + (5 -&gt; 6 -&gt; 4)\n<b>Output:</b> 7 -&gt; 8 -&gt; 0 -&gt; 7\n</pre>\n<p></p>\n          ',
    tags: ['Microsoft', 'Bloomberg'],
  },
  {
    id: '446',
    name: 'Arithmetic Slices II - Subsequence',
    acceptance: '27.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>A sequence of numbers is called arithmetic if it consists of at least three elements and if the difference between any two consecutive elements is the same.</p>\n\n<p>For example, these are arithmetic sequences:</p>\n<pre>1, 3, 5, 7, 9\n7, 7, 7, 7\n3, -1, -5, -9</pre>\n\n<p>The following sequence is not arithmetic.</p> <pre>1, 1, 2, 5, 7</pre> \n<br>\n\n<p>A zero-indexed array A consisting of N numbers is given. A <b>subsequence</b> slice of that array is any sequence of integers (P<sub>0</sub>, P<sub>1</sub>, ..., P<sub>k</sub>) such that 0 ≤ P<sub>0</sub> &lt; P<sub>1</sub> &lt; ... &lt; P<sub>k</sub> &lt; N.</p>\n\n<p>A <b>subsequence</b> slice (P<sub>0</sub>, P<sub>1</sub>, ..., P<sub>k</sub>) of array A is called arithmetic if the sequence A[P<sub>0</sub>], A[P<sub>1</sub>], ..., A[P<sub>k-1</sub>], A[P<sub>k</sub>] is arithmetic. In particular, this means that k ≥ 2.</p>\n\n<p>The function should return the number of arithmetic subsequence slices in the array A. </p>\n\n<p>The input contains N integers. Every integer is in the range of -2<sup>31</sup> and 2<sup>31</sup>-1 and 0 ≤ N ≤ 1000. The output is guaranteed to be less than 2<sup>31</sup>-1.</p>\n<br>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b> [2, 4, 6, 8, 10]\n\n<b>Output:</b> 7\n\n<b>Explanation:</b>\nAll arithmetic subsequence slices are:\n[2,4,6]\n[4,6,8]\n[6,8,10]\n[2,4,6,8]\n[4,6,8,10]\n[2,4,6,8,10]\n[2,6,10]\n</pre>\n<p></p>\n          ',
    tags: ['Baidu'],
  },
  {
    id: '447',
    name: 'Number of Boomerangs',
    acceptance: '45.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given <i>n</i> points in the plane that are all pairwise distinct, a "boomerang" is a tuple of points <code>(i, j, k)</code> such that the distance between <code>i</code> and <code>j</code> equals the distance between <code>i</code> and <code>k</code> (<b>the order of the tuple matters</b>).</p>\n\n<p>Find the number of boomerangs. You may assume that <i>n</i> will be at most <b>500</b> and coordinates of points are all in the range <b>[-10000, 10000]</b> (inclusive).</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b>\n[[0,0],[1,0],[2,0]]\n\n<b>Output:</b>\n2\n\n<b>Explanation:</b>\nThe two boomerangs are <b>[[1,0],[0,0],[2,0]]</b> and <b>[[1,0],[2,0],[0,0]]</b>\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '448',
    name: 'Find All Numbers Disappeared in an Array',
    acceptance: '51.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array of integers where 1 ≤ a[i] ≤ <i>n</i> (<i>n</i> = size of array), some elements appear twice and others appear once.</p>\n\n<p>Find all the elements of [1, <i>n</i>] inclusive that do not appear in this array.</p>\n\n<p>Could you do it without extra space and in O(<i>n</i>) runtime? You may assume the returned list does not count as extra space.</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b>\n[4,3,2,7,8,2,3,1]\n\n<b>Output:</b>\n[5,6]\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '449',
    name: 'Serialize and Deserialize BST',
    acceptance: '42.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment. </p>\n\n<p>Design an algorithm to serialize and deserialize a <b>binary search tree</b>. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary search tree can be serialized to a string and this string can be deserialized to the original tree structure.</p>\n\n<p>\n<b>The encoded string should be as compact as possible.</b>\n</p>\n\n<p>\n<b>Note:</b> Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.\n</p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '450',
    name: 'Delete Node in a BST',
    acceptance: '37.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.</p>\n\n<p>Basically, the deletion can be divided into two stages:\n</p><ol>\n<li>Search for a node to remove.</li>\n<li>If the node is found, delete the node.</li>\n</ol>\n<p></p>\n\n<p><b>Note:</b> Time complexity should be O(height of tree).</p>\n\n<p><b>Example:</b>\n</p><pre>root = [5,3,6,2,4,null,7]\nkey = 3\n\n    5\n   / \\\n  3   6\n / \\   \\\n2   4   7\n\nGiven key to delete is 3. So we find the node with value 3 and delete it.\n\nOne valid answer is [5,4,6,2,null,null,7], shown in the following BST.\n\n    5\n   / \\\n  4   6\n /     \\\n2       7\n\nAnother valid answer is [5,2,6,null,4,null,7].\n\n    5\n   / \\\n  2   6\n   \\   \\\n    4   7\n</pre>\n<p></p>\n          ',
    tags: ['Uber'],
  },
  {
    id: '451',
    name: 'Sort Characters By Frequency',
    acceptance: '51.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a string, sort it in decreasing order based on the frequency of characters.</p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b>\n"tree"\n\n<b>Output:</b>\n"eert"\n\n<b>Explanation:</b>\n\'e\' appears twice while \'r\' and \'t\' both appear once.\nSo \'e\' must appear before both \'r\' and \'t\'. Therefore "eetr" is also a valid answer.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b>\n"cccaaa"\n\n<b>Output:</b>\n"cccaaa"\n\n<b>Explanation:</b>\nBoth \'c\' and \'a\' appear three times, so "aaaccc" is also a valid answer.\nNote that "cacaca" is incorrect, as the same characters must be together.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b>\n</p><pre><b>Input:</b>\n"Aabb"\n\n<b>Output:</b>\n"bbAa"\n\n<b>Explanation:</b>\n"bbaA" is also a valid answer, but "Aabb" is incorrect.\nNote that \'A\' and \'a\' are treated as two different characters.\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Amazon'],
  },
  {
    id: '452',
    name: 'Minimum Number of Arrows to Burst Balloons',
    acceptance: '44.5%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>There are a number of spherical balloons spread in two-dimensional space. For each balloon, provided input is the start and end coordinates of the horizontal diameter. Since it's horizontal, y-coordinates don't matter and hence the x-coordinates of start and end of the diameter suffice. Start is always smaller than end. There will be at most 10<sup>4</sup> balloons.</p>\n\n<p>An arrow can be shot up exactly vertically from different points along the x-axis. A balloon with x<sub>start</sub> and x<sub>end</sub> bursts by an arrow shot at x if x<sub>start</sub> ≤ x ≤ x<sub>end</sub>. There is no limit to the number of arrows that can be shot. An arrow once shot keeps travelling up infinitely. The problem is to find the minimum number of arrows that must be shot to burst all balloons. </p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b>\n[[10,16], [2,8], [1,6], [7,12]]\n\n<b>Output:</b>\n2\n\n<b>Explanation:</b>\nOne way is to shoot one arrow for example at x = 6 (bursting the balloons [2,8] and [1,6]) and another arrow at x = 11 (bursting the other two balloons).\n</pre>\n<p></p>\n          ",
    tags: ['Microsoft'],
  },
  {
    id: '453',
    name: 'Minimum Moves to Equal Array Elements',
    acceptance: '47.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a <b>non-empty</b> integer array of size <i>n</i>, find the minimum number of moves required to make all array elements equal, where a move is incrementing <i>n</i> - 1 elements by 1.</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b>\n[1,2,3]\n\n<b>Output:</b>\n3\n\n<b>Explanation:</b>\nOnly three moves are needed (remember each move increments two elements):\n\n[1,2,3]  =&gt;  [2,3,3]  =&gt;  [3,4,3]  =&gt;  [4,4,4]\n</pre>\n<p></p>\n          ',
    tags: ['Indeed', 'Coursera'],
  },
  {
    id: '454',
    name: '4Sum II',
    acceptance: '47.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given four lists A, B, C, D of integer values, compute how many tuples <code>(i, j, k, l)</code> there are such that <code>A[i] + B[j] + C[k] + D[l]</code> is zero.</p>\n\n<p>To make problem a bit easier, all A, B, C, D have same length of N where 0 ≤ N ≤ 500. All integers are in the range of -2<sup>28</sup> to 2<sup>28</sup> - 1 and the result is guaranteed to be at most 2<sup>31</sup> - 1.</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b>\nA = [ 1, 2]\nB = [-2,-1]\nC = [-1, 2]\nD = [ 0, 2]\n\n<b>Output:</b>\n2\n\n<b>Explanation:</b>\nThe two tuples are:\n1. (0, 0, 0, 1) -&gt; A[0] + B[0] + C[0] + D[1] = 1 + (-2) + (-1) + 2 = 0\n2. (1, 1, 0, 0) -&gt; A[1] + B[1] + C[0] + D[0] = 2 + (-1) + (-1) + 0 = 0\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '455',
    name: 'Assign Cookies',
    acceptance: '47.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nAssume you are an awesome parent and want to give your children some cookies. But, you should give each child at most one cookie. Each child i has a greed factor g<sub>i</sub>, which is the minimum size of a cookie that the child will be content with; and each cookie j has a size s<sub>j</sub>. If s<sub>j</sub> &gt;= g<sub>i</sub>, we can assign the cookie j to the child i, and the child i will be content. Your goal is to maximize the number of your content children and output the maximum number.\n</p>\n\n<p><b>Note:</b><br>\nYou may assume the greed factor is always positive. <br>\nYou cannot assign more than one cookie to one child.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,2,3], [1,1]\n\n<b>Output:</b> 1\n\n<b>Explanation:</b> You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3. \nAnd even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.\nYou need to output 1.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1,2], [1,2,3]\n\n<b>Output:</b> 2\n\n<b>Explanation:</b> You have 2 children and 3 cookies. The greed factors of 2 children are 1, 2. \nYou have 3 cookies and their sizes are big enough to gratify all of the children, \nYou need to output 2.\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '456',
    name: '132 Pattern',
    acceptance: '28.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a sequence of n integers a<sub>1</sub>, a<sub>2</sub>, ..., a<sub>n</sub>, a 132 pattern is a subsequence a<sub><b>i</b></sub>, a<sub><b>j</b></sub>, a<sub><b>k</b></sub> such\nthat <b>i</b> &lt; <b>j</b> &lt; <b>k</b> and a<sub><b>i</b></sub> &lt; a<sub><b>k</b></sub> &lt; a<sub><b>j</b></sub>. Design an algorithm that takes a list of n numbers as input and checks whether there is a 132 pattern in the list.</p>\n\n<p><b>Note:</b> n will be less than 15,000.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1, 2, 3, 4]\n\n<b>Output:</b> False\n\n<b>Explanation:</b> There is no 132 pattern in the sequence.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [3, 1, 4, 2]\n\n<b>Output:</b> True\n\n<b>Explanation:</b> There is a 132 pattern in the sequence: [1, 4, 2].\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> [-1, 3, 2, 0]\n\n<b>Output:</b> True\n\n<b>Explanation:</b> There are three 132 patterns in the sequence: [-1, 3, 2], [-1, 3, 0] and [-1, 2, 0].\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '457',
    name: 'Circular Array Loop',
    acceptance: '20.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYou are given an array of positive and negative integers. If a number n at an index is positive, then move forward n steps. Conversely, if it\'s negative (-n), move backward n steps. Assume the first element of the array is forward next to the last element, and the last element is backward next to the first element. Determine if there is a loop in this array. A loop starts and ends at a particular index with more than 1 element along the loop. The loop must be "forward" or "backward\'.\n</p>\n\n<p><b>Example 1:</b>\n\nGiven the array [2, -1, 1, 2, 2], there is a loop, from index 0 -&gt; 2 -&gt; 3 -&gt; 0.\n</p>\n\n<p><b>Example 2:</b>\n\nGiven the array [-1, 2], there is no loop.\n</p>\n\n<p><b>Note:</b>\n\nThe given array is guaranteed to contain no element "0".\n</p>\n\n<p>\nCan you do it in <b>O(n)</b> time complexity and <b>O(1)</b> space complexity?\n</p>\n\n          ',
    tags: [],
  },
  {
    id: '458',
    name: 'Poor Pigs',
    acceptance: '41.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nThere are 1000 buckets, one and only one of them contains poison, the rest are filled with water. They all look the same. If a pig drinks that poison it will die within 15 minutes. What is the minimum amount of pigs you need to figure out which bucket contains the poison within one hour. \n</p>\n<p>\nAnswer this question, and write an algorithm for the follow-up general case.\n</p>\n<p>\n<b>\nFollow-up:\n</b>\n</p>\n<p>\nIf there are n buckets and a pig drinking poison will die within m minutes, how many pigs (x) you need to figure out the "poison" bucket within p minutes? There is exact one bucket with poison.\n</p>\n          ',
    tags: [],
  },
  {
    id: '459',
    name: 'Repeated Substring Pattern',
    acceptance: '38.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            Given a non-empty string check if it can be constructed by taking a substring of it and appending multiple copies of the substring together.  You may assume the given string consists of lowercase English letters only and its length  will not exceed 10000. \n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "abab"\n\n<b>Output:</b> True\n\n<b>Explanation:</b> It\'s the substring "ab" twice.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "aba"\n\n<b>Output:</b> False\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> "abcabcabcabc"\n\n<b>Output:</b> True\n\n<b>Explanation:</b> It\'s the substring "abc" four times. (And the substring "abcabc" twice.)\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Amazon'],
  },
  {
    id: '460',
    name: 'LFU Cache',
    acceptance: '24.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Design and implement a data structure for <a href="https://en.wikipedia.org/wiki/Least_frequently_used" target="_blank">Least Frequently Used (LFU)</a> cache. It should support the following operations: <code>get</code> and <code>put</code>.\n</p>\n\n<p>\n<code>get(key)</code> - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.<br>\n<code>put(key, value)</code> - Set or insert the value if the key is not already present. When the cache reaches its capacity, it should invalidate the least frequently used item before inserting a new item. For the purpose of this problem, when there is a tie (i.e., two or more keys that have the same frequency), the least <b>recently</b> used key would be evicted.\n</p>\n\n<p><b>Follow up:</b><br>\nCould you do both operations in <b>O(1)</b> time complexity?</p>\n\n<p><b>Example:</b>\n</p><pre>LFUCache cache = new LFUCache( 2 /* capacity */ );\n\ncache.put(1, 1);\ncache.put(2, 2);\ncache.get(1);       // returns 1\ncache.put(3, 3);    // evicts key 2\ncache.get(2);       // returns -1 (not found)\ncache.get(3);       // returns 3.\ncache.put(4, 4);    // evicts key 1.\ncache.get(1);       // returns -1 (not found)\ncache.get(3);       // returns 3\ncache.get(4);       // returns 4\n</pre>\n<p></p>\n          ',
    tags: ['Google', 'Amazon'],
  },
  {
    id: '461',
    name: 'Hamming Distance',
    acceptance: '69.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>The <a href="https://en.wikipedia.org/wiki/Hamming_distance" target="_blank">Hamming distance</a> between two integers is the number of positions at which the corresponding bits are different.</p>\n\n<p>Given two integers <code>x</code> and <code>y</code>, calculate the Hamming distance.</p>\n\n<p><b>Note:</b><br>\n0 ≤ <code>x</code>, <code>y</code> &lt; 2<sup>31</sup>.\n</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b> x = 1, y = 4\n\n<b>Output:</b> 2\n\n<b>Explanation:</b>\n1   (0 0 0 1)\n4   (0 1 0 0)\n       ↑   ↑\n\nThe above arrows point to positions where the corresponding bits are different.\n</pre>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '462',
    name: 'Minimum Moves to Equal Array Elements II',
    acceptance: '51.9%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p></p><p>Given a <b>non-empty</b> integer array, find the minimum number of moves required to make all array elements equal, where a move is incrementing a selected element by 1 or decrementing a selected element by 1.</p>\n\n<p>You may assume the array's length is at most 10,000.</p>\n\n<p><b>Example:</b>\n</p><pre><b>Input:</b>\n[1,2,3]\n\n<b>Output:</b>\n2\n\n<b>Explanation:</b>\nOnly two moves are needed (remember each move increments or decrements one element):\n\n[1,2,3]  =&gt;  [2,2,3]  =&gt;  [2,2,2]\n</pre>\n<p></p><p></p>\n          ",
    tags: [],
  },
  {
    id: '463',
    name: 'Island Perimeter',
    acceptance: '57.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water. Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells). The island doesn\'t have "lakes" (water inside that isn\'t connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don\'t exceed 100. Determine the perimeter of the island.</p>\n\n<p><b>Example:</b>\n</p><pre>[[0,1,0,0],\n [1,1,1,0],\n [0,1,0,0],\n [1,1,0,0]]\n\nAnswer: 16\nExplanation: The perimeter is the 16 yellow stripes in the image below:\n<img src="https://leetcode.com/static/images/problemset/island.png">\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '464',
    name: 'Can I Win',
    acceptance: '25.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>In the "100 game," two players take turns adding, to a running total, any integer from 1..10. The player who first causes the running total to reach or exceed 100 wins. </p>\n\n<p>What if we change the game so that players cannot re-use integers? </p>\n\n<p>For example, two players might take turns drawing from a common pool of numbers of 1..15 without replacement until they reach a total &gt;= 100.</p>\n\n<p>Given an integer <code>maxChoosableInteger</code> and another integer <code>desiredTotal</code>, determine if the first player to move can force a win, assuming both players play optimally. </p>\n\n<p>You can always assume that <code>maxChoosableInteger</code> will not be larger than 20 and <code>desiredTotal</code> will not be larger than 300.\n</p>\n\n<p><b>Example</b>\n</p><pre><b>Input:</b>\nmaxChoosableInteger = 10\ndesiredTotal = 11\n\n<b>Output:</b>\nfalse\n\n<b>Explanation:</b>\nNo matter which integer the first player choose, the first player will lose.\nThe first player can choose an integer from 1 up to 10.\nIf the first player choose 1, the second player can only choose integers from 2 up to 10.\nThe second player will win by choosing 10 and get a total = 11, which is &gt;= desiredTotal.\nSame with other integers chosen by the first player, the second player will always win.\n</pre>\n<p></p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '465',
    name: 'Optimal Account Balancing ',
    acceptance: '38.3%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>A group of friends went on holiday and sometimes lent each other money. For example, Alice paid for Bill's lunch for $10. Then later Chris gave Alice $5 for a taxi ride. We can model each transaction as a tuple (x, y, z) which means person x gave person y $z. Assuming Alice, Bill, and Chris are person 0, 1, and 2 respectively (0, 1, 2 are the person's ID), the transactions can be represented as <code>[[0, 1, 10], [2, 0, 5]]</code>.</p>\n\n<p>Given a list of transactions between a group of people, return the minimum number of transactions required to settle the debt.</p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>A transaction will be given as a tuple (x, y, z). Note that <code>x ≠ y</code> and <code>z &gt; 0</code>.</li>\n<li>Person's IDs may not be linear, e.g. we could have the persons 0, 1, 2 or we could also have the persons 0, 2, 6.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b>\n[[0,1,10], [2,0,5]]\n\n<b>Output:</b>\n2\n\n<b>Explanation:</b>\nPerson #0 gave person #1 $10.\nPerson #2 gave person #0 $5.\n\nTwo transactions are needed. One way to settle the debt is person #1 pays person #0 and #2 $5 each.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b>\n[[0,1,10], [1,0,1], [1,2,5], [2,0,5]]\n\n<b>Output:</b>\n1\n\n<b>Explanation:</b>\nPerson #0 gave person #1 $10.\nPerson #1 gave person #0 $1.\nPerson #1 gave person #2 $5.\nPerson #2 gave person #0 $5.\n\nTherefore, person #1 only need to give person #0 $4, and all debt is settled.\n</pre>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '466',
    name: 'Count The Repetitions',
    acceptance: '27.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Define <code>S = [s,n]</code> as the string S which consists of n connected strings s. For example, <code>["abc", 3]</code> ="abcabcabc". </p>\n<p>On the other hand, we define that string s1 can be obtained from string s2 if we can remove some characters from s2 such that it becomes s1. For example, “abc”  can be obtained from “abdbec” based on our definition, but it can not be obtained from “acbbe”.</p>\n<p>You are given two non-empty strings s1 and s2 (each at most 100 characters long) and two integers 0 ≤ n1 ≤ 10<sup>6</sup> and 1 ≤ n2 ≤ 10<sup>6</sup>. Now consider the strings S1 and S2, where <code>S1=[s1,n1]</code> and <code>S2=[s2,n2]</code>. Find the maximum integer M such that <code>[S2,M]</code> can be obtained from <code>S1</code>.</p>\n\n<p><b>Example:</b>\n</p><pre>Input:\ns1="acb", n1=4\ns2="ab", n2=2\n\nReturn:\n2\n</pre>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '467',
    name: 'Unique Substrings in Wraparound String',
    acceptance: '33.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Consider the string <code>s</code> to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so <code>s</code> will look like this: "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".</p>\n\n<p>Now we have another string <code>p</code>. Your job is to find out how many unique non-empty substrings of <code>p</code> are present in <code>s</code>. In particular, your input is the string <code>p</code> and you need to output the number of different non-empty substrings of <code>p</code> in the string <code>s</code>.</p>\n\n<p><b>Note:</b> <code>p</code> consists of only lowercase English letters and the size of p might be over 10000.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "a"\n<b>Output:</b> 1\n\n<b>Explanation:</b> Only the substring "a" of string "a" is in the string \u0010s.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "cac"\n<b>Output:</b> 2\n<b>Explanation:</b> There are two substrings "a", "c" of string "cac" in the string s.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> "zab"\n<b>Output:</b> 6\n<b>Explanation:</b> There are six substrings "z", "a", "b", "za", "ab", "zab" of string "zab" in the string s.\n</pre>\n<p></p>\n          ',
    tags: ['MAQ Software'],
  },
  {
    id: '468',
    name: 'Validate IP Address',
    acceptance: '20.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nWrite a function to check whether an input string is a valid IPv4 address or IPv6 address or neither.\n</p>\n\n<p>\n<b>IPv4</b> addresses are canonically represented in dot-decimal notation, which consists of four decimal numbers, each ranging from 0 to 255, separated by dots ("."), e.g.,<code>172.16.254.1</code>;\n</p>\n\n<p>\nBesides, leading zeros in the IPv4 is invalid. For example, the address <code>172.16.254.01</code> is invalid.\n</p>\n\n<p>\n<b>IPv6</b> addresses are represented as eight groups of four hexadecimal digits, each group representing 16 bits. The groups are separated by colons (":"). For example, the address <code>2001:0db8:85a3:0000:0000:8a2e:0370:7334</code> is a valid one. Also, we could omit some leading zeros among four hexadecimal digits and some low-case characters in the address to upper-case ones, so <code>2001:db8:85a3:0:0:8A2E:0370:7334</code> is also a valid IPv6 address(Omit leading zeros and using upper cases).\n</p>\n\n\n<p>\nHowever, we don\'t replace a consecutive group of zero value with a single empty group using two consecutive colons (::) to pursue simplicity. For example, <code>2001:0db8:85a3::8A2E:0370:7334</code> is an invalid IPv6 address.\n</p>\n\n<p>\nBesides, extra leading zeros in the IPv6 is also invalid. For example, the address <code>02001:0db8:85a3:0000:0000:8a2e:0370:7334</code> is invalid.\n</p>\n\n\n<p><b>Note:</b>\nYou may assume there is no extra space or special characters in the input string.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "172.16.254.1"\n\n<b>Output:</b> "IPv4"\n\n<b>Explanation:</b> This is a valid IPv4 address, return "IPv4".\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "2001:0db8:85a3:0:0:8A2E:0370:7334"\n\n<b>Output:</b> "IPv6"\n\n<b>Explanation:</b> This is a valid IPv6 address, return "IPv6".\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> "256.256.256.256"\n\n<b>Output:</b> "Neither"\n\n<b>Explanation:</b> This is neither a IPv4 address nor a IPv6 address.\n</pre>\n<p></p>\n          ',
    tags: ['Twitter'],
  },
  {
    id: '469',
    name: 'Convex Polygon ',
    acceptance: '33.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a list of points that form a polygon when joined sequentially, find if this polygon is convex <a href="https://en.wikipedia.org/wiki/Convex_polygon" target="_blank">(Convex polygon definition)</a>.</p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>There are at least 3 and at most 10,000 points.</li>\n<li>Coordinates are in the range -10,000 to 10,000.</li>\n<li>You may assume the polygon formed by given points is always a simple polygon<a href="https://en.wikipedia.org/wiki/Simple_polygon" target="_blank"> (Simple polygon definition)</a>. In other words, we ensure that exactly two edges intersect at each vertex, and that edges otherwise <b>don\'t intersect each other</b>. \n</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre>[[0,0],[0,1],[1,1],[1,0]]\n\nAnswer: True\n\nExplanation:<img src="https://leetcode.com/static/images/problemset/polygon_convex.png" width="100" height="100">\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>[[0,0],[0,10],[10,10],[10,0],[5,5]]\n\nAnswer: False\n\nExplanation:<img src="https://leetcode.com/static/images/problemset/polygon_not_convex.png" width="100" height="100">\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '471',
    name: 'Encode String with Shortest Length ',
    acceptance: '42.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a <b>non-empty</b> string, encode the string such that its encoded length is the shortest.</p>\n\n<p>\nThe encoding rule is: <code>k[encoded_string]</code>, where the <i>encoded_string</i> inside the square brackets is being repeated exactly <i>k</i> times.</p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><i>k</i> will be a positive integer and encoded string will not be empty or have extra space.</li>\n<li>You may assume that the input string contains only lowercase English letters. The string\'s length is at most 160.</li>\n<li>If an encoding process does not make the string shorter, then do not encode it. If there are several solutions, return any of them is fine.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre>Input: "aaa"\nOutput: "aaa"\nExplanation: There is no way to encode it such that it is shorter than the input string, so we do not encode it.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre>Input: "aaaaa"\nOutput: "5[a]"\nExplanation: "5[a]" is shorter than "aaaaa" by 1 character.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b>\n</p><pre>Input: "aaaaaaaaaa"\nOutput: "10[a]"\nExplanation: "a9[a]" or "9[a]a" are also valid solutions, both of them have the same length = 5, which is the same as "10[a]".\n</pre>\n<p></p>\n\n<p><b>Example 4:</b>\n</p><pre>Input: "aabcaabcd"\nOutput: "2[aabc]d"\nExplanation: "aabc" occurs twice, so one answer can be "2[aabc]d".\n</pre>\n<p></p>\n\n<p><b>Example 5:</b>\n</p><pre>Input: "abbbabbbcabbbabbbc"\nOutput: "2[2[abbb]c]"\nExplanation: "abbbabbbc" occurs twice, but "abbbabbbc" can also be encoded to "2[abbb]c", so one answer can be "2[2[abbb]c]".\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '472',
    name: 'Concatenated Words',
    acceptance: '30.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            Given a list of words (<b>without duplicates</b>), please write a program that returns all concatenated words in the given list of words.\n<p>A concatenated word is defined as a string that is comprised entirely of at least two shorter words in the given array.</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> ["cat","cats","catsdogcats","dog","dogcatsdog","hippopotamuses","rat","ratcatdogcat"]\n\n<b>Output:</b> ["catsdogcats","dogcatsdog","ratcatdogcat"]\n\n<b>Explanation:</b> "catsdogcats" can be concatenated by "cats", "dog" and "cats"; <br> "dogcatsdog" can be concatenated by "dog", "cats" and "dog"; <br>"ratcatdogcat" can be concatenated by "rat", "cat", "dog" and "cat".\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The number of elements of the given array will not exceed <code>10,000 </code>\n</li><li>The length sum of elements in the given array will not exceed <code>600,000</code>. </li>\n<li>All the input string will only include lower case letters.</li>\n<li>The returned elements order does not matter. </li>\n</ol>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '473',
    name: 'Matchsticks to Square',
    acceptance: '35.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Remember the story of Little Match Girl? By now, you know exactly what matchsticks the little match girl has, please find out a way you can make one square by using up all those matchsticks. You should not break any stick, but you can link them up, and each matchstick must be used <b>exactly</b> one time.</p>\n\n<p> Your input will be several matchsticks the girl has, represented with their stick length. Your output will either be true or false, to represent whether you could make one square using all the matchsticks the little match girl has.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,1,2,2,2]\n<b>Output:</b> true\n\n<b>Explanation:</b> You can form a square with length 2, one side of the square came two sticks with length 1.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [3,3,3,3,4]\n<b>Output:</b> false\n\n<b>Explanation:</b> You cannot find a way to form a square with all the matchsticks.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length sum of the given matchsticks is in the range of <code>0</code> to <code>10^9</code>.\n</li><li>The length of the given matchstick array will not exceed <code>15</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Rackspace'],
  },
  {
    id: '474',
    name: 'Ones and Zeroes',
    acceptance: '39.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>In the computer world, use restricted resource you have to generate maximum benefit is what we always want to pursue.</p>\n<p>For now, suppose you are a dominator of <b>m</b> <code>0s</code> and <b>n</b> <code>1s</code> respectively. On the other hand, there is an array with strings consisting of only <code>0s</code> and <code>1s</code>.</p>\n\n<p>\nNow your task is to find the maximum number of strings that you can form with given <b>m</b> <code>0s</code> and <b>n</b> <code>1s</code>. Each <code>0</code> and <code>1</code> can be used at most <b>once</b>.\n</p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The given numbers of <code>0s</code> and <code>1s</code> will both not exceed <code>100</code></li>\n<li>The size of given string array won\'t exceed <code>600</code>.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> Array = {"10", "0001", "111001", "1", "0"}, m = 5, n = 3\n<b>Output:</b> 4\n\n<b>Explanation:</b> This are totally 4 strings can be formed by the using of 5 0s and 3 1s, which are “10,”0001”,”1”,”0”\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> Array = {"10", "0", "1"}, m = 1, n = 1\n<b>Output:</b> 2\n\n<b>Explanation:</b> You could form "10", but then you\'d have nothing left. Better form "0" and "1".\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '475',
    name: 'Heaters',
    acceptance: '29.6%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Winter is coming! Your first job during the contest is to design a standard heater with fixed warm radius to warm all the houses.</p>\n\n<p>Now, you are given positions of houses and heaters on a horizontal line, find out minimum radius of heaters so that all houses could be covered by those heaters.</p>\n\n<p>So, your input will be the positions of houses and heaters seperately, and your expected output will be the minimum radius standard of heaters.</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>Numbers of houses and heaters you are given are non-negative and will not exceed 25000.</li>\n<li>Positions of houses and heaters you are given are non-negative and will not exceed 10^9.</li>\n<li>As long as a house is in the heaters' warm radius range, it can be warmed.</li>\n<li>All the heaters follow your radius standard and the warm radius will the same.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,2,3],[2]\n<b>Output:</b> 1\n<b>Explanation:</b> The only heater was placed in the position 2, and if we use the radius 1 standard, then all the houses can be warmed.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1,2,3,4],[1,4]\n<b>Output:</b> 1\n<b>Explanation:</b> The two heater was placed in the position 1 and 4. We need to use radius 1 standard, then all the houses can be warmed.\n</pre>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '476',
    name: 'Number Complement',
    acceptance: '61.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The given integer is guaranteed to fit within the range of a 32-bit signed integer.</li>\n<li>You could assume no leading zero bit in the integer’s binary representation.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 5\n<b>Output:</b> 2\n<b>Explanation:</b> The binary representation of 5 is 101 (no leading zero bits), and its complement is 010. So you need to output 2.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> 1\n<b>Output:</b> 0\n<b>Explanation:</b> The binary representation of 1 is 1 (no leading zero bits), and its complement is 0. So you need to output 0.\n</pre>\n<p></p>\n          ',
    tags: ['Cloudera'],
  },
  {
    id: '477',
    name: 'Total Hamming Distance',
    acceptance: '47.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>The <a href="https://en.wikipedia.org/wiki/Hamming_distance" target="_blank">Hamming distance</a> between two integers is the number of positions at which the corresponding bits are different.</p>\n\n<p>Now your job is to find the total Hamming distance between all pairs of the given numbers.\n\n\n</p><p><b>Example:</b><br>\n</p><pre><b>Input:</b> 4, 14, 2\n\n<b>Output:</b> 6\n\n<b>Explanation:</b> In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just\nshowing the four bits relevant in this case). So the answer will be:\nHammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>Elements of the given array are in the range of <code>0 </code> to <code>10^9</code>\n</li><li>Length of the array will not exceed <code>10^4</code>. </li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '479',
    name: 'Largest Palindrome Product',
    acceptance: '24.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Find the largest palindrome made from the product of two n-digit numbers.</p>\n<p> Since the result could be very large, you should return the largest palindrome mod 1337.</p>\n\n<p><b>Example:</b>\n</p><p>Input: 2</p>\n<p>Output: 987</p>\n<p>Explanation: 99 x 91 = 9009, 9009 % 1337 = 987\n</p>\n<p></p>\n\n\n<p><b>Note:</b>\n</p><p>The range of n is [1,8].</p>\n<p></p>\n\n          ',
    tags: ['Yahoo'],
  },
  {
    id: '480',
    name: 'Sliding Window Median',
    acceptance: '30.9%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>Median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value. So the median is the mean of the two middle value.</p>\nExamples: <br>\n<p><code>[2,3,4]</code> , the median is <code>3</code></p>\n<p><code>[2,3]</code>, the median is <code>(2 + 3) / 2 = 2.5</code> </p>\n\n<p>Given an array <i>nums</i>, there is a sliding window of size <i>k</i> which is moving from the very left of the array to the very right. You can only see the <i>k</i> numbers in the window. Each time the sliding window moves right by one position. Your job is to output the median array for each window in the original array.</p>\n\n<p>For example,<br>\nGiven <i>nums</i> = <code>[1,3,-1,-3,5,3,6,7]</code>, and <i>k</i> = 3.</p>\n\n<pre>Window position                Median\n---------------               -----\n[1  3  -1] -3  5  3  6  7       1\n 1 [3  -1  -3] 5  3  6  7       -1\n 1  3 [-1  -3  5] 3  6  7       -1\n 1  3  -1 [-3  5  3] 6  7       3\n 1  3  -1  -3 [5  3  6] 7       5\n 1  3  -1  -3  5 [3  6  7]      6\n</pre>\n\n<p>Therefore, return the median sliding window as <code>[1,-1,-1,3,5,6]</code>.</p>\n\n<p><b>Note: </b><br>\nYou may assume <code>k</code> is always valid, ie: <code>k</code> is always smaller than input array's size for non-empty array.</p>\n          ",
    tags: ['Google'],
  },
  {
    id: '481',
    name: 'Magical String',
    acceptance: '45.7%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nA magical string <b>S</b> consists of only '1' and '2' and obeys the following rules:\n</p>\n<p>\nThe string <b>S</b> is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string <b>S</b> itself.\n</p>\n\n<p>\nThe first few elements of string <b>S</b> is the following:\n<b>S</b> = \"1221121221221121122……\"\n</p>\n\n<p>\nIf we group the consecutive '1's and '2's in <b>S</b>, it will be:\n</p>\n<p>\n1   22  11  2  1  22  1  22  11  2  11  22 ......\n</p>\n<p>\nand the occurrences of '1's or '2's in each group are:\n</p>\n<p>\n1   2\t   2    1   1    2     1    2     2    1    2    2 ......\n</p>\n\n<p>\nYou can see that the occurrence sequence above is the <b>S</b> itself. \n</p>\n\n<p>\nGiven an integer N as input, return the number of '1's in the first N number in the magical string <b>S</b>.\n</p>\n\n<p><b>Note:</b>\nN will not exceed 100,000.\n</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 6\n<b>Output:</b> 3\n<b>Explanation:</b> The first 6 elements of magical string S is \"12211\" and it contains three 1's, so return 3.\n</pre>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '482',
    name: 'License Key Formatting',
    acceptance: '41.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>You are given a license key represented as a string S which consists only alphanumeric character and dashes. The string is separated into N+1 groups by N dashes.</p>\n\n<p>Given a number K, we would want to reformat the strings such that each group contains <i>exactly</i> K characters, except for the first group which could be shorter than K, but still must contain at least one character. Furthermore, there must be a dash inserted between two groups and all lowercase letters should be converted to uppercase.</p>\n\n<p>Given a non-empty string S and a number K, format the string according to the rules described above.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> S = "5F3Z-2e-9-w", K = 4\n\n<b>Output:</b> "5F3Z-2E9W"\n\n<b>Explanation:</b> The string S has been split into two parts, each part has 4 characters.\nNote that the two extra dashes are not needed and can be removed.\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> S = "2-5g-3-J", K = 2\n\n<b>Output:</b> "2-5G-3J"\n\n<b>Explanation:</b> The string S has been split into three parts, each part has 2 characters except the first part as it could be shorter as mentioned above.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of string S will not exceed 12,000, and K is a positive integer.</li>\n<li>String S consists only of alphanumerical characters (a-z and/or A-Z and/or 0-9) and dashes(-).</li>\n<li>String S is non-empty.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '483',
    name: 'Smallest Good Base',
    acceptance: '33.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>For an integer n, we call k&gt;=2 a <i><b>good base</b></i> of n, if all digits of n base k are 1.</p>\n<p>Now given a string representing n, you should return the smallest good base of n in string format. <br></p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "13"\n<b>Output:</b> "3"\n<b>Explanation:</b> 13 base 3 is 111.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "4681"\n<b>Output:</b> "8"\n<b>Explanation:</b> 4681 base 8 is 11111.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> "1000000000000000000"\n<b>Output:</b> "999999999999999999"\n<b>Explanation:</b> 1000000000000000000 base 999999999999999999 is 11.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The range of n is [3, 10^18].</li>\n<li>The string representing n is always valid and will not have leading zeros.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '484',
    name: 'Find Permutation ',
    acceptance: '55.2%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nBy now, you are given a <b>secret signature</b> consisting of character 'D' and 'I'. 'D' represents a decreasing relationship between two numbers, 'I' represents an increasing relationship between two numbers. And our <b>secret signature</b> was constructed by a special integer array, which contains uniquely all the different number from 1 to n (n is the length of the secret signature plus 1). For example, the secret signature \"DI\" can be constructed by array [2,1,3] or [3,1,2], but won't be constructed by array [3,2,4] or [2,1,3,4], which are both illegal constructing special string that can't represent the \"DI\" <b>secret signature</b>.\n</p>\n\n<p>\nOn the other hand, now your job is to find the lexicographically smallest permutation of [1, 2, ... n] could refer to the given <b>secret signature</b> in the input.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \"I\"\n<b>Output:</b> [1,2]\n<b>Explanation:</b> [1,2] is the only legal initial spectial string can construct secret signature \"I\", where the number 1 and 2 construct an increasing relationship.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \"DI\"\n<b>Output:</b> [2,1,3]\n<b>Explanation:</b> Both [2,1,3] and [3,1,2] can construct the secret signature \"DI\", <br>but since we want to find the one with the smallest lexicographical permutation, you need to output [2,1,3]\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The input string will only contain the character 'D' and 'I'.</li>\n<li>The length of input string is a positive integer and will not exceed 10,000</li>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '485',
    name: 'Max Consecutive Ones',
    acceptance: '54.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a binary array, find the maximum number of consecutive 1s in this array.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,1,0,1,1,1]\n<b>Output:</b> 3\n<b>Explanation:</b> The first two digits or the last three digits are consecutive 1s.\n    The maximum number of consecutive 1s is 3.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><ul>\n<li>The input array will only contain <code>0</code> and <code>1</code>.</li>\n<li>The length of input array is a positive integer and will not exceed 10,000</li>\n</ul>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '486',
    name: 'Predict the Winner',
    acceptance: '45.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array of scores that are non-negative integers. Player 1 picks one of the numbers from either end of the array followed by the player 2 and then player 1 and so on. Each time a player picks a number, that number will not be available for the next player. This continues until all the scores have been chosen. The player with the maximum score wins. </p>\n\n<p>Given an array of scores, predict whether player 1 is the winner. You can assume each player plays to maximize his score. </p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1, 5, 2]\n<b>Output:</b> False\n<b>Explanation:</b> Initially, player 1 can choose between 1 and 2. <br>If he chooses 2 (or 1), then player 2 can choose from 1 (or 2) and 5. If player 2 chooses 5, then player 1 will be left with 1 (or 2). <br>So, final score of player 1 is 1 + 2 = 3, and player 2 is 5. <br>Hence, player 1 will never be the winner and you need to return False.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1, 5, 233, 7]\n<b>Output:</b> True\n<b>Explanation:</b> Player 1 first chooses 1. Then player 2 have to choose between 5 and 7. No matter which number player 2 choose, player 1 can choose 233.<br>Finally, player 1 has more score (234) than player 2 (12), so you need to return True representing player1 can win.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>1 &lt;= length of the array &lt;= 20. </li>\n<li>Any scores in the given array are non-negative integers and will not exceed 10,000,000.</li>\n<li>If the scores of both players are equal, then player 1 is still the winner.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '487',
    name: 'Max Consecutive Ones II ',
    acceptance: '45.9%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a binary array, find the maximum number of consecutive 1s in this array if you can flip at most one 0.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,0,1,1,0]\n<b>Output:</b> 4\n<b>Explanation:</b> Flip the first zero will get the the maximum number of consecutive 1s.\n    After flipping, the maximum number of consecutive 1s is 4.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><ul>\n<li>The input array will only contain <code>0</code> and <code>1</code>.</li>\n<li>The length of input array is a positive integer and will not exceed 10,000</li>\n</ul>\n<p></p>\n\n<p><b>Follow up:</b><br>\nWhat if the input numbers come in one by one as an <b>infinite stream</b>? In other words, you can't store all numbers coming from the stream as it's too large to hold in memory. Could you solve it efficiently?\n</p>\n          ",
    tags: ['Google'],
  },
  {
    id: '488',
    name: 'Zuma Game',
    acceptance: '37.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Think about Zuma Game. You have a row of balls on the table, colored red(R), yellow(Y), blue(B), green(G), and white(W). You also have several balls in your hand.</p>\n<p>\nEach time, you may choose a ball in your hand, and insert it into the row (including the leftmost place and rightmost place). Then, if there is a group of 3 or more balls in the same color touching, remove these balls. Keep doing this until no more balls can be removed.</p>\n<p>\nFind the minimal balls you have to insert to remove all the balls on the table. If you cannot remove all the balls, output -1.\n</p>\n<pre><p><b>Examples:</b><br>\n<b>Input:</b> "WRRBBW", "RB"\n<b>Output:</b> -1\n<b>Explanation:</b> WRRBBW -&gt; WRR[R]BBW -&gt; WBBW -&gt; WBB[B]W -&gt; WW\n\n<b>Input:</b> "WWRRBBWW", "WRBRW"\n<b>Output:</b> 2\n<b>Explanation:</b> WWRRBBWW -&gt; WWRR[R]BBWW -&gt; WWBBWW -&gt; WWBB[B]WW -&gt; WWWW -&gt; empty\n\n<b>Input:</b>"G", "GGGGG"\n<b>Output:</b> 2\n<b>Explanation:</b> G -&gt; G[G] -&gt; GG[G] -&gt; empty \n\n<b>Input:</b> "RBYYBBRRB", "YRBGB"\n<b>Output:</b> 3\n<b>Explanation:</b> RBYYBBRRB -&gt; RBYY[Y]BBRRB -&gt; RBBBRRB -&gt; RRRB -&gt; B -&gt; B[B] -&gt; BB[B] -&gt; empty \n</p></pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume that the initial row of balls on the table won’t have any 3 or more consecutive balls with the same color.</li>\n<li>The number of balls on the table won\'t exceed 20, and the string represents these balls is called "board" in the input.</li>\n<li>The number of balls in your hand won\'t exceed 5, and the string represents these balls is called "hand" in the input.</li>\n<li>Both input strings will be non-empty and only contain characters \'R\',\'Y\',\'B\',\'G\',\'W\'.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Baidu'],
  },
  {
    id: '490',
    name: 'The Maze ',
    acceptance: '43.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>There is a <b>ball</b> in a maze with empty spaces and walls. The ball can go through empty spaces by rolling <b>up</b>, <b>down</b>, <b>left</b> or <b>right</b>, but it won\'t stop rolling until hitting a wall. When the ball stops, it could choose the next direction.</p>\n\n<p>Given the ball\'s <b>start position</b>, the <b>destination</b> and the <b>maze</b>, determine whether the ball could stop at the destination.</p>\n\n<p>The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes.</p>\n\n<p>\n<b>Example 1</b>\n</p><pre><b>Input 1:</b> a maze represented by a 2D array\n\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 1 0\n1 1 0 1 1\n0 0 0 0 0\n\n<b>Input 2:</b> start coordinate (rowStart, colStart) = (0, 4)\n<b>Input 3:</b> destination coordinate (rowDest, colDest) = (4, 4)\n\n<b>Output:</b> true\n<b>Explanation:</b> One possible way is : left -&gt; down -&gt; left -&gt; down -&gt; right -&gt; down -&gt; right.\n<img src="https://leetcode.com/static/images/problemset/maze_1_example_1.png" width="30%">\n</pre>\n<p></p>\n\n<p>\n<b>Example 2</b>\n</p><pre><b>Input 1:</b> a maze represented by a 2D array\n\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 1 0\n1 1 0 1 1\n0 0 0 0 0\n\n<b>Input 2:</b> start coordinate (rowStart, colStart) = (0, 4)\n<b>Input 3:</b> destination coordinate (rowDest, colDest) = (3, 2)\n\n<b>Output:</b> false\n<b>Explanation:</b> There is no way for the ball to stop at the destination.\n<img src="https://leetcode.com/static/images/problemset/maze_1_example_2.png" width="30%">\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>There is only one ball and one destination in the maze.</li>\n<li>Both the ball and the destination exist on an empty space, and they will not be at the same position initially.</li>\n<li>The given maze does not contain border (like the red rectangle in the example pictures), but you could assume the border of the maze are all walls.</li>\n<li>The maze contains at least 2 empty spaces, and both the width and height of the maze won\'t exceed 100.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '491',
    name: 'Increasing Subsequences',
    acceptance: '38.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an integer array, your task is to find all the different possible increasing subsequences of the given array, and the length of an increasing subsequence should be at least 2 .\n</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> [4, 6, 7, 7]\n<b>Output:</b> [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the given array will not exceed 15.</li>\n<li>The range of integer in the given array is [-100,100].</li>\n<li>The given array may contain duplicates, and two equal integers should also be considered as a special case of increasing sequence.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Yahoo'],
  },
  {
    id: '492',
    name: 'Construct the Rectangle',
    acceptance: '48.3%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nFor a web developer, it is very important to know how to design a web page's size. So, given a specific rectangular web page’s area, your job by now is to design a rectangular web page, whose length L and width W satisfy the following requirements:</p><pre>1. The area of the rectangular web page you designed must equal to the given target area.\n<br>2. The width W should not be larger than the length L, which means L &gt;= W.\n<br>3. The difference between length L and width W should be as small as possible.\n</pre>\nYou need to output the length L and the width W of the web page you designed in sequence.\n<p></p>\n\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> 4\n<b>Output:</b> [2, 2]\n<b>Explanation:</b> The target area is 4, and all the possible ways to construct it are [1,4], [2,2], [4,1]. \nBut according to requirement 2, [1,4] is illegal; according to requirement 3,  [4,1] is not optimal compared to [2,2]. So the length L is 2, and the width W is 2.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The given area won't exceed 10,000,000 and is a positive integer</li>\n<li>The web page's width and length you designed must be positive integers.</li>\n</ol>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '493',
    name: 'Reverse Pairs',
    acceptance: '20.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given an array <code>nums</code>, we call <code>(i, j)</code> an <b><i>important reverse pair</i></b> if <code>i &lt; j</code> and <code>nums[i] &gt; 2*nums[j]</code>.</p>\n\n<p>You need to return the number of important reverse pairs in the given array.</p>\n\n<p><b>Example1:</b>\n</p><pre><b>Input</b>: [1,3,2,3,1]\n<b>Output</b>: 2\n</pre><p></p>\n\n<p><b>Example2:</b>\n</p><pre><b>Input</b>: [2,4,3,5,1]\n<b>Output</b>: 3\n</pre><p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the given array will not exceed <code>50,000</code>.</li>\n<li>All the numbers in the input array are in the range of 32-bit integer.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '494',
    name: 'Target Sum',
    acceptance: '43.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYou are given a list of non-negative integers, a1, a2, ..., an, and a target, S. Now you have 2 symbols <code>+</code> and <code>-</code>. For each integer, you should choose one from <code>+</code> and <code>-</code> as its new symbol.\n</p> \n\n<p>Find out how many ways to assign symbols to make sum of integers equal to target S.  \n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> nums is [1, 1, 1, 1, 1], S is 3. \n<b>Output:</b> 5\n<b>Explanation:</b> \n\n-1+1+1+1+1 = 3\n+1-1+1+1+1 = 3\n+1+1-1+1+1 = 3\n+1+1+1-1+1 = 3\n+1+1+1+1-1 = 3\n\nThere are 5 ways to assign symbols to make the sum of nums be target 3.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the given array is positive and will not exceed 20. </li>\n<li>The sum of elements in the given array will not exceed 1000.</li>\n<li>Your output answer is guaranteed to be fitted in a 32-bit integer.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google', 'Facebook'],
  },
  {
    id: '495',
    name: 'Teemo Attacking',
    acceptance: '51.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nIn LOL world, there is a hero called Teemo and his attacking can make his enemy Ashe be in poisoned condition. Now, given the Teemo's attacking <b>ascending</b> time series towards Ashe and the poisoning time duration per Teemo's attacking, you need to output the total time that Ashe is in poisoned condition.\n</p>\n\n<p>You may assume that Teemo attacks at the very beginning of a specific time point, and makes Ashe be in poisoned condition immediately.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,4], 2\n<b>Output:</b> 4\n<b>Explanation:</b> At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned immediately. <br>This poisoned status will last 2 seconds until the end of time point 2. <br>And at time point 4, Teemo attacks Ashe again, and causes Ashe to be in poisoned status for another 2 seconds. <br>So you finally need to output 4.\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1,2], 2\n<b>Output:</b> 3\n<b>Explanation:</b> At time point 1, Teemo starts attacking Ashe and makes Ashe be poisoned. <br>This poisoned status will last 2 seconds until the end of time point 2. <br>However, at the beginning of time point 2, Teemo attacks Ashe again who is already in poisoned status. <br>Since the poisoned status won't add up together, though the second poisoning attack will still work at time point 2, it will stop at the end of time point 3. <br>So you finally need to output 3.\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume the length of given time series array won't exceed 10000.</li>\n<li>You may assume the numbers in the Teemo's attacking time series and his poisoning time duration per attacking are non-negative integers, which won't exceed 10,000,000.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Riot Games'],
  },
  {
    id: '496',
    name: 'Next Greater Element I',
    acceptance: '56.5%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nYou are given two arrays <b>(without duplicates)</b> <code>nums1</code> and <code>nums2</code> where <code>nums1</code>’s elements are subset of <code>nums2</code>. Find all the next greater numbers for <code>nums1</code>'s elements in the corresponding places of <code>nums2</code>. \n</p>\n\n<p>\nThe Next Greater Number of a number <b>x</b> in <code>nums1</code> is the first greater number to its right in <code>nums2</code>. If it does not exist, output -1 for this number.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> <b>nums1</b> = [4,1,2], <b>nums2</b> = [1,3,4,2].\n<b>Output:</b> [-1,3,-1]\n<b>Explanation:</b>\n    For number 4 in the first array, you cannot find the next greater number for it in the second array, so output -1.\n    For number 1 in the first array, the next greater number for it in the second array is 3.\n    For number 2 in the first array, there is no next greater number for it in the second array, so output -1.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> <b>nums1</b> = [2,4], <b>nums2</b> = [1,2,3,4].\n<b>Output:</b> [3,-1]\n<b>Explanation:</b>\n    For number 2 in the first array, the next greater number for it in the second array is 3.\n    For number 4 in the first array, there is no next greater number for it in the second array, so output -1.\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>All elements in <code>nums1</code> and <code>nums2</code> are unique.</li>\n<li>The length of both <code>nums1</code> and <code>nums2</code> would not exceed 1000.</li>\n</ol>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '498',
    name: 'Diagonal Traverse',
    acceptance: '46.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a matrix of M x N elements (M rows, N columns), return all elements of the matrix in diagonal order as shown in the below image. \n</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b>\n[\n [ 1, 2, 3 ],\n [ 4, 5, 6 ],\n [ 7, 8, 9 ]\n]\n<b>Output:</b>  [1,2,4,7,5,3,6,8,9]\n<b>Explanation:</b>\n<img src="https://leetcode.com/static/images/problemset/diagonal_traverse.png" width="20%">\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The total number of elements of the given matrix will not exceed 10,000.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '499',
    name: 'The Maze III ',
    acceptance: '33.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>There is a <b>ball</b> in a maze with empty spaces and walls. The ball can go through empty spaces by rolling <b>up</b> (u), <b>down</b> (d), <b>left</b> (l) or <b>right</b> (r), but it won\'t stop rolling until hitting a wall. When the ball stops, it could choose the next direction. There is also a <b>hole</b> in this maze. The ball will drop into the hole if it rolls on to the hole.</p>\n\n<p> Given the <b>ball position</b>, the <b>hole position</b> and the <b>maze</b>, find out how the ball could drop into the hole by moving the <b>shortest distance</b>. The distance is defined by the number of <b>empty spaces</b> traveled by the ball from the start position (excluded) to the hole (included). Output the moving <b>directions</b> by using \'u\', \'d\', \'l\' and \'r\'. Since there could be several different shortest ways, you should output the <b>lexicographically smallest</b> way. If the ball cannot reach the hole, output "impossible".</p>\n\n<p>The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The ball and the hole coordinates are represented by row and column indexes.</p>\n\n<p>\n<b>Example 1</b>\n</p><pre><b>Input 1:</b> a maze represented by a 2D array\n\n0 0 0 0 0\n1 1 0 0 1\n0 0 0 0 0\n0 1 0 0 1\n0 1 0 0 0\n\n<b>Input 2:</b> ball coordinate (rowBall, colBall) = (4, 3)\n<b>Input 3:</b> hole coordinate (rowHole, colHole) = (0, 1)\n\n<b>Output:</b> "lul"\n<b>Explanation:</b> There are two shortest ways for the ball to drop into the hole.\nThe first way is left -&gt; up -&gt; left, represented by "lul".\nThe second way is up -&gt; left, represented by \'ul\'.\nBoth ways have shortest distance 6, but the first way is lexicographically smaller because \'l\' &lt; \'u\'. So the output is "lul".\n<img src="https://leetcode.com/static/images/problemset/maze_2_example_1.png" width="30%">\n</pre>\n<p></p>\n\n<p>\n<b>Example 2</b>\n</p><pre><b>Input 1:</b> a maze represented by a 2D array\n\n0 0 0 0 0\n1 1 0 0 1\n0 0 0 0 0\n0 1 0 0 1\n0 1 0 0 0\n\n<b>Input 2:</b> ball coordinate (rowBall, colBall) = (4, 3)\n<b>Input 3:</b> hole coordinate (rowHole, colHole) = (3, 0)\n<b>Output:</b> "impossible"\n<b>Explanation:</b> The ball cannot reach the hole.\n<img src="https://leetcode.com/static/images/problemset/maze_2_example_2.png" width="30%">\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>There is only one ball and one hole in the maze.</li>\n<li>Both the ball and hole exist on an empty space, and they will not be at the same position initially.</li>\n<li>The given maze does not contain border (like the red rectangle in the example pictures), but you could assume the border of the maze are all walls.</li>\n<li>The maze contains at least 2 empty spaces, and the width and the height of the maze won\'t exceed 30.</li>\n</ol>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '500',
    name: 'Keyboard Row',
    acceptance: '59.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a List of words, return the words that can be typed using letters of <b>alphabet</b> on only one row\'s of American keyboard like the image below. </p>\n\n<br>\n<p>\n<img src="https://leetcode.com/static/images/problemset/keyboard.png" alt="American keyboard">\n</p>\n<br>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> ["Hello", "Alaska", "Dad", "Peace"]\n<b>Output:</b> ["Alaska", "Dad"]\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may use one character in the keyboard more than once.</li>\n<li>You may assume the input string will only contain letters of alphabet.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Mathworks'],
  },
  {
    id: '501',
    name: 'Find Mode in Binary Search Tree',
    acceptance: '37.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a binary search tree (BST) with duplicates, find all the <a href="https://en.wikipedia.org/wiki/Mode_(statistics)" target="_blank">mode(s)</a> (the most frequently occurred element) in the given BST.</p>\n\n<p>\nAssume a BST is defined as follows:\n</p><ul>\n<li>The left subtree of a node contains only nodes with keys <b>less than or equal to</b> the node\'s key.</li>\n<li>The right subtree of a node contains only nodes with keys <b>greater than or equal to</b> the node\'s key.</li>\n<li>Both the left and right subtrees must also be binary search trees.</li>\n</ul>\n<p></p>\n\n<p>\nFor example:<br>\nGiven BST <code>[1,null,2,2]</code>,<br>\n</p><pre>   1\n    \\\n     2\n    /\n   2\n</pre>\n<p></p>\n<p>\nreturn <code>[2]</code>.\n</p>\n\n<p><b>Note:</b>\nIf a tree has more than one mode, you can return them in any order.\n</p>\n\n<p><b>Follow up:</b>\nCould you do that without using any extra space? (Assume that the implicit stack space incurred due to recursion does not count).\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '502',
    name: 'IPO',
    acceptance: '36.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nSuppose LeetCode will start its IPO soon. In order to sell a good price of its shares to Venture Capital, LeetCode would like to work on some projects to increase its capital before the IPO. Since it has limited resources, it can only finish at most <b>k</b> distinct projects before the IPO. Help LeetCode design the best way to maximize its total capital after finishing at most <b>k</b> distinct projects. \n</p>\n\n<p>\nYou are given several projects. For each project <b>i</b>, it has a pure profit <b>P<sub>i</sub></b> and a minimum capital of <b>C<sub>i</sub></b> is needed to start the corresponding project. Initially, you have <b>W</b> capital. When you finish a project, you will obtain its pure profit and the profit will be added to your total capital.\n</p>\n\n<p>\nTo sum up, pick a list of at most <b>k</b> distinct projects from given projects to maximize your final capital, and output your final maximized capital.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> k=2, W=0, Profits=[1,2,3], Capital=[0,1,1].\n\n<b>Output:</b> 4\n\n<b>Explanation:</b> Since your initial capital is 0, you can only start the project indexed 0.\n             After finishing it you will obtain profit 1 and your capital becomes 1.\n             With capital 1, you can either start the project indexed 1 or the project indexed 2.\n             Since you can choose at most 2 projects, you need to finish the project indexed 2 to get the maximum capital.\n             Therefore, output the final maximized capital, which is 0 + 1 + 3 = 4.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume all numbers in the input are non-negative integers.</li>\n<li>The length of Profits array and Capital array will not exceed 50,000.</li>\n<li>The answer is guaranteed to fit in a 32-bit signed integer.</li>\n</ol>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '503',
    name: 'Next Greater Element II',
    acceptance: '47.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a circular array (the next element of the last element is the first element of the array), print the Next Greater Number for every element. The Next Greater Number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, output -1 for this number.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,2,1]\n<b>Output:</b> [2,-1,2]\n<b>Explanation:</b> The first 1's next greater number is 2; <br>The number 2 can't find next greater number; <br>The second 1's next greater number needs to search circularly, which is also 2.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe length of given array won't exceed 10000.\n</p>\n          ",
    tags: ['Google'],
  },
  {
    id: '504',
    name: 'Base 7',
    acceptance: '44.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an integer, return its base 7 string representation.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 100\n<b>Output:</b> "202"\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> -7\n<b>Output:</b> "-10"\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe input will be in range of [-1e7, 1e7].\n</p>\n          ',
    tags: [],
  },
  {
    id: '505',
    name: 'The Maze II ',
    acceptance: '38.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>There is a <b>ball</b> in a maze with empty spaces and walls. The ball can go through empty spaces by rolling <b>up</b>, <b>down</b>, <b>left</b> or <b>right</b>, but it won\'t stop rolling until hitting a wall. When the ball stops, it could choose the next direction.</p>\n\n<p>Given the ball\'s <b>start position</b>, the <b>destination</b> and the <b>maze</b>, find the shortest distance for the ball to stop at the destination. The distance is defined by the number of <b>empty spaces</b> traveled by the ball from the start position (excluded) to the destination (included). If the ball cannot stop at the destination, return -1.</p>\n\n<p>The maze is represented by a binary 2D array. 1 means the wall and 0 means the empty space. You may assume that the borders of the maze are all walls. The start and destination coordinates are represented by row and column indexes.</p>\n\n<p>\n<b>Example 1</b>\n</p><pre><b>Input 1:</b> a maze represented by a 2D array\n\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 1 0\n1 1 0 1 1\n0 0 0 0 0\n\n<b>Input 2:</b> start coordinate (rowStart, colStart) = (0, 4)\n<b>Input 3:</b> destination coordinate (rowDest, colDest) = (4, 4)\n\n<b>Output:</b> 12\n<b>Explanation:</b> One shortest way is : left -&gt; down -&gt; left -&gt; down -&gt; right -&gt; down -&gt; right.\n             The total distance is 1 + 1 + 3 + 1 + 2 + 2 + 2 = 12.\n<img src="https://leetcode.com/static/images/problemset/maze_1_example_1.png" width="30%">\n</pre>\n<p></p>\n\n<p>\n<b>Example 2</b>\n</p><pre><b>Input 1:</b> a maze represented by a 2D array\n\n0 0 1 0 0\n0 0 0 0 0\n0 0 0 1 0\n1 1 0 1 1\n0 0 0 0 0\n\n<b>Input 2:</b> start coordinate (rowStart, colStart) = (0, 4)\n<b>Input 3:</b> destination coordinate (rowDest, colDest) = (3, 2)\n\n<b>Output:</b> -1\n<b>Explanation:</b> There is no way for the ball to stop at the destination.\n<img src="https://leetcode.com/static/images/problemset/maze_1_example_2.png" width="30%">\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>There is only one ball and one destination in the maze.</li>\n<li>Both the ball and the destination exist on an empty space, and they will not be at the same position initially.</li>\n<li>The given maze does not contain border (like the red rectangle in the example pictures), but you could assume the border of the maze are all walls.</li>\n<li>The maze contains at least 2 empty spaces, and both the width and height of the maze won\'t exceed 100.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '506',
    name: 'Relative Ranks',
    acceptance: '46.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven scores of <b>N</b> athletes, find their relative ranks and the people with the top three highest scores, who will be awarded medals: "Gold Medal", "Silver Medal" and "Bronze Medal".</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [5, 4, 3, 2, 1]\n<b>Output:</b> ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]\n<b>Explanation:</b> The first three athletes got the top three highest scores, so they got "Gold Medal", "Silver Medal" and "Bronze Medal". <br>For the left two athletes, you just need to output their relative ranks according to their scores.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>N is a positive integer and won\'t exceed 10,000.</li>\n<li>All the scores of athletes are guaranteed to be unique.</li>\n</ol>\n<p></p>\n\n          ',
    tags: ['Google'],
  },
  {
    id: '507',
    name: 'Perfect Number',
    acceptance: '33.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>We define the Perfect Number is a <b>positive</b> integer that is equal to the sum of all its <b>positive</b> divisors except itself. \n</p>\nNow, given an <b>integer</b> n, write a function that returns true when it is a perfect number and false when it is not.\n<p></p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> 28\n<b>Output:</b> True\n<b>Explanation:</b> 28 = 1 + 2 + 4 + 7 + 14\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe input number <b>n</b> will not exceed 100,000,000. (1e8)\n</p>\n          ',
    tags: ['Fallible'],
  },
  {
    id: '508',
    name: 'Most Frequent Subtree Sum',
    acceptance: '52.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven the root of a tree, you are asked to find the most frequent subtree sum. The subtree sum of a node is defined as the sum of all the node values formed by the subtree rooted at that node (including the node itself). So what is the most frequent subtree sum value? If there is a tie, return all the values with the highest frequency in any order.\n</p>\n\n<p><b>Examples 1</b><br>\nInput:\n</p><pre>  5\n /  \\\n2   -3\n</pre>\nreturn [2, -3, 4], since all the values happen only once, return all of them in any order.\n<p></p>\n\n<p><b>Examples 2</b><br>\nInput:\n</p><pre>  5\n /  \\\n2   -5\n</pre>\nreturn [2], since 2 happens twice, however -5 only occur once.\n<p></p>\n\n<p><b>Note:</b>\nYou may assume the sum of values in any subtree is in the range of 32-bit signed integer.\n</p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '513',
    name: 'Find Bottom Left Tree Value',
    acceptance: '56.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree, find the leftmost value in the last row of the tree. \n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>Input:\n\n    2\n   / \\\n  1   3\n\nOutput:\n1\n</pre>\n<p></p>\n\n<p> <b> Example 2: </b><br>\n</p><pre>Input:\n\n        1\n       / \\\n      2   3\n     /   / \\\n    4   5   6\n       /\n      7\n\nOutput:\n7\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nYou may assume the tree (i.e., the given root node) is not <b>NULL</b>.\n</p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '514',
    name: 'Freedom Trail',
    acceptance: '39.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nIn the video game Fallout 4, the quest "Road to Freedom" requires players to reach a metal dial called the "Freedom Trail Ring", and use the dial to spell a specific keyword in order to open the door. \n</p>\n\n<p>\nGiven a string <b>ring</b>, which represents the code engraved on the outer ring and another string <b>key</b>, which represents the keyword needs to be spelled. You need to find the <b>minimum</b> number of steps in order to spell all the characters in the keyword.\n</p>\nInitially, the first character of the <b>ring</b> is aligned at 12:00 direction. You need to spell all the characters in the string <b>key</b> one by one by rotating the ring clockwise or anticlockwise to make each character of the string <b>key</b> aligned at 12:00 direction and then by pressing the center button.\n<br>\n\nAt the stage of rotating the ring to spell the key character <b>key[i]</b>:\n<ol>\n<li>You can rotate the <b>ring</b> clockwise or anticlockwise <b>one place</b>, which counts as 1 step. The final purpose of the rotation is to align one of the string <b>ring\'s</b> characters at the 12:00 direction, where this character must equal to the character <b>key[i]</b>.\n\n</li><li>If the character <b>key[i]</b> has been aligned at the 12:00 direction, you need to press the center button to spell, which also counts as 1 step. After the pressing, you could begin to spell the next character in the key (next stage), otherwise, you\'ve finished all the spelling.</li>\n</ol>\n\n<p></p>\n\n<p><b>Example:</b><br>\n</p><center>\n<img src="https://leetcode.com/static/images/problemset/ring.jpg" width="26%">\n</center>\n<br>\n<pre><b>Input:</b> ring = "godding", key = "gd"\n<b>Output:</b> 4\n<b>Explanation:</b><br> For the first key character \'g\', since it is already in place, we just need 1 step to spell this character. <br> For the second key character \'d\', we need to rotate the ring "godding" anticlockwise by two steps to make it become "ddinggo".<br> Also, we need 1 more step for spelling.<br> So the final output is 4.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>Length of both ring and <b>key</b> will be in range 1 to 100.</li>\n<li>There are only lowercase letters in both strings and might be some duplcate characters in both strings.</li>\n<li>It\'s guaranteed that string <b>key</b> could always be spelled by rotating the string <b>ring</b>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '515',
    name: 'Find Largest Value in Each Tree Row',
    acceptance: '55.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>You need to find the largest value in each row of a binary tree.</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> \n\n          1\n         / \\\n        3   2\n       / \\   \\  \n      5   3   9 \n\n<b>Output:</b> [1, 3, 9]\n</pre>\n<p></p>\n\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '516',
    name: 'Longest Palindromic Subsequence',
    acceptance: '42.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string s, find the longest palindromic subsequence\'s length in s. You may assume that the maximum length of s is 1000.\n</p>\n\n<p><b>Example 1:</b><br>\nInput: \n</p><pre>"bbbab"\n</pre>\nOutput: \n<pre>4\n</pre>\nOne possible longest palindromic subsequence is "bbbb".\n<p></p>\n\n<p><b>Example 2:</b><br>\nInput:\n</p><pre>"cbbd"\n</pre>\nOutput:\n<pre>2\n</pre>\nOne possible longest palindromic subsequence is "bb".\n<p></p>\n          ',
    tags: ['Amazon', 'Uber'],
  },
  {
    id: '517',
    name: 'Super Washing Machines',
    acceptance: '36.5%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>You have <b>n</b> super washing machines on a line. Initially, each washing machine has some dresses or is empty. \n</p>\n\n<p>For each <b>move</b>, you could choose <b>any m</b> (1 ≤ m ≤ n) washing machines, and pass <b>one dress</b> of each washing machine to one of its adjacent washing machines <b> at the same time </b>.  </p>\n\n<p>Given an integer array representing the number of dresses in each washing machine from left to right on the line, you should find the <b>minimum number of moves</b> to make all the washing machines have the same number of dresses. If it is not possible to do it, return -1.</p>\n\n<p><b>Example1</b>\n</p><pre><b>Input:</b> [1,0,5]\n\n<b>Output:</b> 3\n\n<b>Explanation:</b> \n1st move:    1     0 &lt;-- 5    =&gt;    1     1     4\n2nd move:    1 &lt;-- 1 &lt;-- 4    =&gt;    2     1     3    \n3rd move:    2     1 &lt;-- 3    =&gt;    2     2     2   \n</pre>\n\n<p><b>Example2</b>\n</p><pre><b>Input:</b> [0,3,0]\n\n<b>Output:</b> 2\n\n<b>Explanation:</b> \n1st move:    0 &lt;-- 3     0    =&gt;    1     2     0    \n2nd move:    1     2 --&gt; 0    =&gt;    1     1     1     \n</pre>\n\n<p><b>Example3</b>\n</p><pre><b>Input:</b> [0,2,0]\n\n<b>Output:</b> -1\n\n<b>Explanation:</b> \nIt's impossible to make all the three washing machines have the same number of dresses. \n</pre>\n\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The range of n is [1, 10000].</li>\n<li>The range of dresses number in a super washing machine is [0, 1e5].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '518',
    name: 'Coin Change 2',
    acceptance: '33.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYou are given coins of different denominations and a total amount of money. Write a function to compute the number of combinations that make up that amount. You may assume that you have infinite number of each kind of coin.\n</p>\n\n<p><b>Note:</b> \nYou can assume that\n</p><ul>\n<li> 0 &lt;= amount &lt;= 5000</li>\n<li> 1 &lt;= coin &lt;= 5000</li>\n<li> the number of coins is less than 500 </li>\n<li> the answer is guaranteed to fit into signed 32-bit integer\n</li></ul>\n<p></p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> amount = 5, coins = [1, 2, 5]\n<b>Output:</b> 4\n<b>Explanation:</b> there are four ways to make up the amount:\n5=5\n5=2+2+1\n5=2+1+1+1\n5=1+1+1+1+1\n</pre><p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b> amount = 3, coins = [2]\n<b>Output:</b> 0\n<b>Explanation:</b> the amount of 3 cannot be made up just with coins of 2.\n</pre><p></p>\n\n<p><b>Example 3:</b>\n</p><pre><b>Input:</b> amount = 10, coins = [10] \n<b>Output:</b> 1\n</pre><p></p>\n\n          ',
    tags: [],
  },
  {
    id: '520',
    name: 'Detect Capital',
    acceptance: '52.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a word, you need to judge whether the usage of capitals in it is right or not.\n</p>\n\n<p>\nWe define the usage of capitals in a word to be right when one of the following cases holds:\n</p><ol>\n<li>All letters in this word are capitals, like "USA".</li>\n<li>All letters in this word are not capitals, like "leetcode".</li>\n<li>Only the first letter in this word is capital if it has more than one letter, like "Google".</li>\n</ol>\nOtherwise, we define that this word doesn\'t use capitals in a right way.\n<p></p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "USA"\n<b>Output:</b> True\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "FlaG"\n<b>Output:</b> False\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe input will be a non-empty word consisting of uppercase and lowercase latin letters.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '521',
    name: 'Longest Uncommon Subsequence I',
    acceptance: '55.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a group of two strings, you need to find the longest uncommon subsequence of this group of two strings.\nThe longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be <b>any</b> subsequence of the other strings.\n</p>\n\n<p>\nA <b>subsequence</b> is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.\n</p>\n\n<p>\nThe input will be two strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn\'t exist, return -1.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "aba", "cdc"\n<b>Output:</b> 3\n<b>Explanation:</b> The longest uncommon subsequence is "aba" (or "cdc"), <br>because "aba" is a subsequence of "aba", <br>but not a subsequence of any other strings in the group of two strings. \n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>Both strings\' lengths will not exceed 100.</li>\n<li>Only letters from a ~ z will appear in input strings. </li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '522',
    name: 'Longest Uncommon Subsequence II',
    acceptance: '32.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a list of strings, you need to find the longest uncommon subsequence among them. The longest uncommon subsequence is defined as the longest subsequence of one of these strings and this subsequence should not be <b>any</b> subsequence of the other strings.\n</p>\n\n<p>\nA <b>subsequence</b> is a sequence that can be derived from one sequence by deleting some characters without changing the order of the remaining elements. Trivially, any string is a subsequence of itself and an empty string is a subsequence of any string.\n</p>\n\n<p>\nThe input will be a list of strings, and the output needs to be the length of the longest uncommon subsequence. If the longest uncommon subsequence doesn\'t exist, return -1.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "aba", "cdc", "eae"\n<b>Output:</b> 3\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>All the given strings\' lengths will not exceed 10.</li>\n<li>The length of the given list will be in the range of [2, 50].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '523',
    name: 'Continuous Subarray Sum',
    acceptance: '23.3%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a list of <b>non-negative</b> numbers and a target <b>integer</b> k, write a function to check if the array has a continuous subarray of size at least 2 that sums up to the multiple of <b>k</b>, that is, sums up to n*k where n is also an <b>integer</b>.\n</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [23, 2, 4, 6, 7],  k=6\n<b>Output:</b> True\n<b>Explanation:</b> Because [2, 4] is a continuous subarray of size 2 and sums up to 6.\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [23, 2, 6, 4, 7],  k=6\n<b>Output:</b> True\n<b>Explanation:</b> Because [23, 2, 6, 4, 7] is an continuous subarray of size 5 and sums up to 42.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the array won't exceed 10,000.</li>\n<li>You may assume the sum of all the numbers is in the range of a signed 32-bit integer.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Facebook'],
  },
  {
    id: '524',
    name: 'Longest Word in Dictionary through Deleting',
    acceptance: '43.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string and a string dictionary, find the longest string in the dictionary that can be formed by deleting some characters of the given string. If there are more than one possible results, return the longest word with the smallest lexicographical order. If there is no possible result, return the empty string.\n</p>\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\ns = "abpcplea", d = ["ale","apple","monkey","plea"]\n\n<b>Output:</b> \n"apple"\n</pre>\n<p></p>\n\n<p></p>\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>\ns = "abpcplea", d = ["a","b","c"]\n\n<b>Output:</b> \n"a"\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>All the strings in the input will only contain lower-case letters.</li>\n<li>The size of the dictionary won\'t exceed 1,000.</li>\n<li>The length of all the strings in the input won\'t exceed 1,000.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '525',
    name: 'Contiguous Array',
    acceptance: '41.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1. </p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [0,1]\n<b>Output:</b> 2\n<b>Explanation:</b> [0, 1] is the longest contiguous subarray with equal number of 0 and 1.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [0,1,0]\n<b>Output:</b> 2\n<b>Explanation:</b> [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe length of the given binary array will not exceed 50,000.\n</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '526',
    name: 'Beautiful Arrangement',
    acceptance: '54.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nSuppose you have <b>N</b> integers from 1 to N. We define a beautiful arrangement as an array that is constructed by these <b>N</b> numbers successfully if one of the following is true for the i<sub>th</sub> position (1 &lt;= i &lt;= N) in this array:\n</p><ol>\n<li>The number at the i<sub>th</sub> position is divisible by <b>i</b>.</li>\n<li><b>i</b> is divisible by the number at the i<sub>th</sub> position.</li>\n</ol>\n<p></p>\n\n<p>\nNow given N, how many beautiful arrangements can you construct?\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 2\n<b>Output:</b> 2\n<b>Explanation:</b> \n<br>The first beautiful arrangement is [1, 2]:\n<br>Number at the 1st position (i=1) is 1, and 1 is divisible by i (i=1).\n<br>Number at the 2nd position (i=2) is 2, and 2 is divisible by i (i=2).\n<br>The second beautiful arrangement is [2, 1]:\n<br>Number at the 1st position (i=1) is 2, and 2 is divisible by i (i=1).\n<br>Number at the 2nd position (i=2) is 1, and i (i=2) is divisible by 1.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><b>N</b> is a positive integer and will not exceed 15.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '527',
    name: 'Word Abbreviation ',
    acceptance: '43.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given an array of n distinct non-empty strings, you need to generate <b>minimal</b> possible abbreviations for every word following rules below.</p>\n\n<ol>\n<li>Begin with the first character and then the number of characters abbreviated, which followed by the last character.</li>\n<li>If there are any conflict, that is more than one words share the same abbreviation, a longer prefix is used instead of only the first character until making the map from word to abbreviation become unique. In other words, a final abbreviation cannot map to more than one original words.</li>\n<li> If the abbreviation doesn\'t make the word shorter, then keep it as original.</li>\n</ol>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> ["like", "god", "internal", "me", "internet", "interval", "intension", "face", "intrusion"]\n<b>Output:</b> ["l2e","god","internal","me","i6t","interval","inte4n","f2e","intr4n"]\n</pre>\n<p></p>\n\n\n<b>Note:</b> \n<ol>\n<li> Both n and the length of each word will not exceed 400.</li>\n<li> The length of each word is greater than 1.</li>\n<li> The words consist of lowercase English letters only.</li>\n<li> The return answers should be <b>in the same order</b> as the original array.</li>\n</ol>\n          ',
    tags: ['Google', 'Snapchat'],
  },
  {
    id: '529',
    name: 'Minesweeper',
    acceptance: '49.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Let's play the minesweeper game (<a href=\"https://en.wikipedia.org/wiki/Minesweeper_(video_game)\">Wikipedia</a>, <a href=\"http://minesweeperonline.com\">online game</a>)! </p>\n\n<p>You are given a 2D char matrix representing the game board. <b>'M'</b> represents an <b>unrevealed</b> mine, <b>'E'</b> represents an <b>unrevealed</b> empty square, <b>'B'</b> represents a <b>revealed</b> blank square that has no adjacent (above, below, left, right, and all 4 diagonals) mines, <b>digit</b> ('1' to '8') represents how many mines are adjacent to this <b>revealed</b> square, and finally <b>'X'</b> represents a <b>revealed</b> mine.</p>\n\n<p>Now given the next click position (row and column indices) among all the <b>unrevealed</b> squares ('M' or 'E'), return the board after revealing this position according to the following rules:</p> \n\n<p>\n</p><ol>\n<li>If a mine ('M') is revealed, then the game is over - change it to <b>'X'</b>.</li>\n<li>If an empty square ('E') with <b>no adjacent mines</b> is revealed, then change it to revealed blank ('B') and all of its adjacent <b>unrevealed</b> squares should be revealed recursively.</li>\n<li>If an empty square ('E') with <b>at least one adjacent mine</b> is revealed, then change it to a digit ('1' to '8') representing the number of adjacent mines.</li>\n<li>Return the board when no more squares will be revealed.</li>\n</ol>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \n\n[['E', 'E', 'E', 'E', 'E'],\n ['E', 'E', 'M', 'E', 'E'],\n ['E', 'E', 'E', 'E', 'E'],\n ['E', 'E', 'E', 'E', 'E']]\n\nClick : [3,0]\n\n<b>Output:</b> \n\n[['B', '1', 'E', '1', 'B'],\n ['B', '1', 'M', '1', 'B'],\n ['B', '1', '1', '1', 'B'],\n ['B', 'B', 'B', 'B', 'B']]\n\n<b>Explanation:</b>\n<img src=\"https://leetcode.com/static/images/problemset/minesweeper_example_1.png\" width=\"40%\">\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \n\n[['B', '1', 'E', '1', 'B'],\n ['B', '1', 'M', '1', 'B'],\n ['B', '1', '1', '1', 'B'],\n ['B', 'B', 'B', 'B', 'B']]\n\nClick : [1,2]\n\n<b>Output:</b> \n\n[['B', '1', 'E', '1', 'B'],\n ['B', '1', 'X', '1', 'B'],\n ['B', '1', '1', '1', 'B'],\n ['B', 'B', 'B', 'B', 'B']]\n\n<b>Explanation:</b>\n<img src=\"https://leetcode.com/static/images/problemset/minesweeper_example_2.png\" width=\"40%\">\n</pre>\n<p></p>\n\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The range of the input matrix's height and width is [1,50].</li>\n<li>The click position will only be an unrevealed square ('M' or 'E'), which also means the input board contains at least one clickable square.</li>\n<li>The input board won't be a stage when game is over (some mines have been revealed).</li>\n<li>For simplicity, not mentioned rules should be ignored in this problem. For example, you <b>don't</b> need to reveal all the unrevealed mines when the game is over, consider any cases that you will win the game or flag any squares.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '530',
    name: 'Minimum Absolute Difference in BST',
    acceptance: '47.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a binary search tree with non-negative values, find the minimum <a href="https://en.wikipedia.org/wiki/Absolute_difference">absolute difference</a> between values of any two nodes.</p>\n\n<p>\n<b>Example:</b>\n</p><pre><b>Input:</b>\n\n   1\n    \\\n     3\n    /\n   2\n\n<b>Output:</b>\n1\n\n<b>Explanation:</b>\nThe minimum absolute difference is 1, which is the difference between 2 and 1 (or between 2 and 3).\n</pre>\n<p></p>\n\n\n<p><b>Note:</b>\nThere are at least two nodes in this BST.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '531',
    name: 'Lonely Pixel I ',
    acceptance: '55.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a picture consisting of black and white pixels, find the number of <b>black</b> lonely pixels.</p>\n\n<p>The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively. </p>\n\n<p>A black lonely pixel is character 'B' that located at a specific position where the same row and same column don't have any other black pixels.</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> \n[['W', 'W', 'B'],\n ['W', 'B', 'W'],\n ['B', 'W', 'W']]\n\n<b>Output:</b> 3\n<b>Explanation:</b> All the three 'B's are black lonely pixels.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The range of width and height of the input 2D array is [1,500].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '532',
    name: 'K-diff Pairs in an Array',
    acceptance: '28.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of integers and an integer <b>k</b>, you need to find the number of <b>unique</b> k-diff pairs in the array. Here a <b>k-diff</b> pair is defined as an integer pair (i, j), where <b>i</b> and <b>j</b> are both numbers in the array and their <a href="https://en.wikipedia.org/wiki/Absolute_difference">absolute difference</a> is <b>k</b>.\n</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [3, 1, 4, 1, 5], k = 2\n<b>Output:</b> 2\n<b>Explanation: </b>There are two 2-diff pairs in the array, (1, 3) and (3, 5).<br>Although we have two 1s in the input, we should only return the number of <b>unique</b> pairs.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>[1, 2, 3, 4, 5], k = 1\n<b>Output: </b>4\n<b>Explanation:</b> There are four 1-diff pairs in the array, (1, 2), (2, 3), (3, 4) and (4, 5).\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input: </b>[1, 3, 1, 5, 4], k = 0\n<b>Output: </b>1\n<b>Explanation:</b> There is one 0-diff pair in the array, (1, 1).\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The pairs (i, j) and (j, i) count as the same pair.</li>\n<li>The length of the array won\'t exceed 10,000.</li>\n<li>All the integers in the given input belong to the range: [-1e7, 1e7].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '533',
    name: 'Lonely Pixel II ',
    acceptance: '44.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a picture consisting of black and white pixels, and a positive integer N, find the number of black pixels located at some specific row <b>R</b> and column <b>C</b> that align with all the following rules:</p>\n\n<ol>\n<li> Row R and column C both contain exactly N black pixels.</li>\n<li> For all rows that have a black pixel at column C, they should be exactly the same as row R</li>\n</ol>\n\n<p>The picture is represented by a 2D char array consisting of 'B' and 'W', which means black and white pixels respectively. </p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b>                                            \n[['W', 'B', 'W', 'B', 'B', 'W'],    \n ['W', 'B', 'W', 'B', 'B', 'W'],    \n ['W', 'B', 'W', 'B', 'B', 'W'],    \n ['W', 'W', 'B', 'W', 'B', 'W']] \n\nN = 3\n<b>Output:</b> 6\n<b>Explanation:</b> All the bold 'B' are the black pixels we need (all 'B's at column 1 and 3).\n        0    1    2    3    4    5         column index                                            \n0    [['W', <b>'B'</b>, 'W', <b>'B'</b>, 'B', 'W'],    \n1     ['W', <b>'B'</b>, 'W', <b>'B'</b>, 'B', 'W'],    \n2     ['W', <b>'B'</b>, 'W', <b>'B'</b>, 'B', 'W'],    \n3     ['W', 'W', 'B', 'W', 'B', 'W']]    \nrow index\n\nTake 'B' at row R = 0 and column C = 1 as an example:\nRule 1, row R = 0 and column C = 1 both have exactly N = 3 black pixels. \nRule 2, the rows have black pixel at column C = 1 are row 0, row 1 and row 2. They are exactly the same as row R = 0.\n\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The range of width and height of the input 2D array is [1,200].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '534',
    name: 'Design TinyURL',
    acceptance: '0.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <blockquote>Note: For the coding companion problem, please see: <a href="https://leetcode.com/problems/encode-and-decode-tinyurl/">Encode and Decode TinyURL</a>.</blockquote>\n\n<p>How would you design a URL shortening service that is similar to <a href="https://en.wikipedia.org/wiki/TinyURL" target="_blank">TinyURL</a>?</p>\n\n<p><b>Background:</b><br>\nTinyURL is a URL shortening service where you enter a URL such as <code>https://leetcode.com/problems/design-tinyurl</code> and it returns a short URL such as <code>http://tinyurl.com/4e9iAk</code>.\n</p>\n\n<p><b>Requirements:</b><br>\n</p><ol>\n<li>For instance, "http://tinyurl.com/<span class="hilight">4e9iAk</span>" is the tiny url for the page <code>"https://leetcode.com/problems/design-tinyurl"</code>. The <b>identifier</b> (<span class="hilight">the highlighted part</span>) can be any string with 6 alphanumeric characters containing <code>0-9</code>, <code>a-z</code>, <code>A-Z</code>.</li>\n\n<li>Each shortened URL must be unique; that is, no two different URLs can be shortened to the same URL.</li>\n</ol>\n<p></p>\n\n<p><b>Note about Questions:</b><br>Below are just a small subset of questions to get you started. In real world, there could be many follow ups and questions possible and the discussion is open-ended (No one true or correct way to solve a problem). If you have more ideas or questions, please ask in Discuss and we may compile it here!</p>\n\n<p><b>Questions:</b><br>\n</p><ol>\n<li>How many unique identifiers possible? Will you run out of unique URLs?</li>\n<li>Should the identifier be increment or not? Which is easier to design? Pros and cons?</li>\n<li>Mapping an identifier to an URL and its reversal - Does this problem ring a bell to you?</li>\n<li>How do you store the URLs? Does a simple flat file database work?</li>\n<li>What is the bottleneck of the system? Is it <b>read-heavy</b> or <b>write-heavy</b>?</li>\n<li>Estimate the maximum number of URLs a single machine can store.</li>\n<li>Estimate the maximum number of queries per second (QPS) for decoding a shortened URL in a single machine.</li>\n<li>How would you scale the service? For example, a viral link which is shared in social media could result in a peak QPS at a moment\'s notice.</li>\n<li>How could you handle redundancy? i,e, if a server is down, how could you ensure the service is still operational?</li>\n<li>Keep URLs forever or prune, pros/cons? How we do pruning? (Contributed by @alex_svetkin)</li>\n<li>What API would you provide to a third-party developer? (Contributed by @alex_svetkin)</li>\n<li>If you can enable caching, what would you cache and what\'s the expiry time? (Contributed by @Humandroid)</li>\n</ol>\n<p></p>\n\n<style>\n.hilight {\n  color: #d14;\n  background-color: #f7f7f9;\n  padding: 1px 3px;\n  border: 1px solid #e1e1e8"\n}\n</style>\n          ',
    tags: ['Google', 'Facebook', 'Amazon', 'Uber'],
  },
  {
    id: '535',
    name: 'Encode and Decode TinyURL',
    acceptance: '74.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <blockquote>Note: This is a companion problem to the <a href="https://leetcode.com/problemset/system-design/">System Design</a> problem: <a href="https://leetcode.com/problems/design-tinyurl/">Design TinyURL</a>.</blockquote>\n\n<p>TinyURL is a URL shortening service where you enter a URL such as <code>https://leetcode.com/problems/design-tinyurl</code> and it returns a short URL such as <code>http://tinyurl.com/4e9iAk</code>.</p>\n\n<p>Design the <code>encode</code> and <code>decode</code> methods for the TinyURL service. There is no restriction on how your encode/decode algorithm should work. You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.</p>\n          ',
    tags: ['Google', 'Facebook', 'Amazon', 'Uber'],
  },
  {
    id: '536',
    name: 'Construct Binary Tree from String ',
    acceptance: '42.8%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>You need to construct a binary tree from a string consisting of parenthesis and integers. </p>\n\n<p>The whole input represents a binary tree. It contains an integer followed by zero, one or two pairs of parenthesis. The integer represents the root's value and a pair of parenthesis contains a child binary tree with the same structure. </p>\n\n<p>You always start to construct the <b>left</b> child node of the parent first if it exists.</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> \"4(2(3)(1))(6(5))\"\n<b>Output:</b> return the tree root node representing the following tree:\n\n       4\n     /   \\\n    2     6\n   / \\   / \n  3   1 5   \n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>There will only be <code>'('</code>,  <code>')'</code>,  <code>'-'</code> and  <code>'0'</code> ~ <code>'9'</code> in the input string.</li>\n<li>An empty tree is represented by <code>\"\"</code> instead of <code>\"()\"</code>.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '537',
    name: 'Complex Number Multiplication',
    acceptance: '64.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two strings representing two <a href="https://en.wikipedia.org/wiki/Complex_number">complex numbers</a>.</p>\n\n<p>\nYou need to return a string representing their multiplication. Note i<sup>2</sup> = -1 according to the definition.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "1+1i", "1+1i"\n<b>Output:</b> "0+2i"\n<b>Explanation:</b> (1 + i) * (1 + i) = 1 + i<sup>2</sup> + 2 * i = 2i, and you need convert it to the form of 0+2i.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "1+-1i", "1+-1i"\n<b>Output:</b> "0+-2i"\n<b>Explanation:</b> (1 - i) * (1 - i) = 1 + i<sup>2</sup> - 2 * i = -2i, and you need convert it to the form of 0+-2i.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>The input strings will not have extra blank.</li>\n<li>The input strings will be given in the form of <b>a+bi</b>, where the integer <b>a</b> and <b>b</b> will both belong to the range of [-100, 100]. And <b>the output should be also in this form</b>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '538',
    name: 'Convert BST to Greater Tree',
    acceptance: '49.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a Binary Search Tree (BST), convert it to a Greater Tree such that every key of the original BST is changed to the original key plus sum of all keys greater than the original key in BST.</p>\n\n<p>\n<b>Example:</b>\n</p><pre><b>Input:</b> The root of a Binary Search Tree like this:\n              5\n            /   \\\n           2     13\n\n<b>Output:</b> The root of a Greater Tree like this:\n             18\n            /   \\\n          20     13\n</pre>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '539',
    name: 'Minimum Time Difference',
    acceptance: '46.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum <b>minutes</b> difference between any two time points in the list. \n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> ["23:59","00:00"]\n<b>Output:</b> 1\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The number of time points in the given list is at least 2 and won\'t exceed 20000.</li>\n<li>The input time is legal and ranges from 00:00 to 23:59.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Palantir'],
  },
  {
    id: '540',
    name: 'Single Element in a Sorted Array',
    acceptance: '56.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a sorted array consisting of only integers where every element appears twice except for one element which appears once. Find this single element that appears only once. \n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,1,2,3,3,4,4,8,8]\n<b>Output:</b> 2\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [3,3,7,7,10,11,11]\n<b>Output:</b> 10\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nYour solution should run in O(log n) time and O(1) space.\n</p>\n\n          ',
    tags: [],
  },
  {
    id: '541',
    name: 'Reverse String II',
    acceptance: '43.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p></p>\nGiven a string and an integer k, you need to reverse the first k characters for every 2k characters counting from the start of the string. If there are less than k characters left, reverse all of them. If there are less than 2k but greater than or equal to k characters, then reverse the first k characters and left the other as original.\n<p></p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> s = "abcdefg", k = 2\n<b>Output:</b> "bacdfeg"\n</pre>\n<p></p>\n\n<b>Restrictions:</b> \n<ol>\n<li> The string consists of lower English letters only.</li>\n<li> Length of the given string and k will in the range [1, 10000]</li>\n</ol>\n          ',
    tags: ['Google'],
  },
  {
    id: '542',
    name: '01 Matrix',
    acceptance: '32.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a matrix consists of 0 and 1, find the distance of the nearest 0 for each cell.\n</p>\nThe distance between two adjacent cells is 1.\n\n<p><b>Example 1: </b><br>\nInput:\n</p><pre>0 0 0\n0 1 0\n0 0 0\n</pre>\nOutput:\n<pre>0 0 0\n0 1 0\n0 0 0\n</pre>\n<p></p>\n\n<p><b>Example 2: </b><br>\nInput:\n</p><pre>0 0 0\n0 1 0\n1 1 1\n</pre>\nOutput:\n<pre>0 0 0\n0 1 0\n1 2 1\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The number of elements of the given matrix will not exceed 10,000.</li>\n<li>There are at least one 0 in the given matrix.</li>\n<li>The cells are adjacent in only four directions: up, down, left and right.</li>\n</ol>\n<p></p>\n\n          ',
    tags: ['Google'],
  },
  {
    id: '543',
    name: 'Diameter of Binary Tree',
    acceptance: '44.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary tree, you need to compute the length of the diameter of the tree. The diameter of a binary tree is the length of the <b>longest</b> path between any two nodes in a tree. This path may or may not pass through the root.\n</p>\n\n<p>\n<b>Example:</b><br>\nGiven a binary tree <br>\n</p><pre>          1\n         / \\\n        2   3\n       / \\     \n      4   5    \n</pre>\n<p></p>\n<p>\nReturn <b>3</b>, which is the length of the path [4,2,1,3] or [5,2,1,3].\n</p>\n\n<p><b>Note:</b>\nThe length of path between two nodes is represented by the number of edges between them.\n</p>\n          ',
    tags: ['Google', 'Facebook'],
  },
  {
    id: '544',
    name: 'Output Contest Matches ',
    acceptance: '71.0%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nDuring the NBA playoffs, we always arrange the rather strong team to play with the rather weak team, like make the rank 1 team play with the rank n<sub>th</sub> team, which is a good strategy to make the contest more interesting. Now, you're given <b>n</b> teams, you need to output their <b>final</b> contest matches in the form of a string.\n</p>\n\n<p>The <b>n</b> teams are given in the form of positive integers from 1 to n, which represents their initial rank. (Rank 1 is the strongest team and Rank n is the weakest team.) We'll use parentheses('(', ')') and commas(',') to represent the contest team pairing - parentheses('(' , ')') for pairing and commas(',') for partition. During the pairing process in each round, you always need to follow the strategy of making the rather strong one pair with the rather weak one.</p> \n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 2\n<b>Output:</b> (1,2)\n<b>Explanation:</b> \nInitially, we have the team 1 and the team 2, placed like: 1,2.\nThen we pair the team (1,2) together with '(', ')' and ',', which is the final answer.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> 4\n<b>Output:</b> ((1,4),(2,3))\n<b>Explanation:</b> \nIn the first round, we pair the team 1 and 4, the team 2 and 3 together, as we need to make the strong team and weak team together.\nAnd we got (1,4),(2,3).\nIn the second round, the winners of (1,4) and (2,3) need to play again to generate the final winner, so you need to add the paratheses outside them.\nAnd we got the final answer ((1,4),(2,3)).\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> 8\n<b>Output:</b> (((1,8),(4,5)),((2,7),(3,6)))\n<b>Explanation:</b> \nFirst round: (1,8),(2,7),(3,6),(4,5)\nSecond round: ((1,8),(4,5)),((2,7),(3,6))\nThird round: (((1,8),(4,5)),((2,7),(3,6)))\nSince the third round will generate the final winner, you need to output the answer (((1,8),(4,5)),((2,7),(3,6))).\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The <b>n</b> is in range [2, 2<sup>12</sup>].</li>\n<li>We ensure that the input <b>n</b> can be converted into the form 2<sup>k</sup>, where k is a positive integer.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '545',
    name: 'Boundary of Binary Tree ',
    acceptance: '31.9%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a binary tree, return the values of its boundary in <b>anti-clockwise</b> direction starting from root.\nBoundary includes left boundary, leaves, and right boundary in order without duplicate nodes. </p>\n\n<p><b>Left boundary</b> is defined as the path from root to the <b>left-most</b> node. <b>Right boundary</b> is defined as the path from root to the <b>right-most</b> node. If the root doesn't have left subtree or right subtree, then the root itself is left boundary or right boundary. Note this definition only applies to the input binary tree, and not applies to any subtrees.</p>\n\n<p>The <b>left-most</b> node is defined as a <b>leaf</b> node you could reach when you always firstly travel to the left subtree if exists. If not, travel to the right subtree. Repeat until you reach a leaf node.</p>\n\n<p>The <b>right-most</b> node is also defined by the same way with left and right exchanged.</p>\n\n<p>\n<b>Example 1</b><br>\n</p><pre><b>Input:</b>\n  1\n   \\\n    2\n   / \\\n  3   4\n\n<b>Ouput:</b>\n[1, 3, 4, 2]\n\n<b>Explanation:</b>\nThe root doesn't have left subtree, so the root itself is left boundary.\nThe leaves are node 3 and 4.\nThe right boundary are node 1,2,4. Note the anti-clockwise direction means you should output reversed right boundary.\nSo order them in anti-clockwise without duplicates and we have [1,3,4,2].\n</pre>\n<p></p>\n\n<p>\n<b>Example 2</b><br>\n</p><pre><b>Input:</b>\n    ____1_____\n   /          \\\n  2            3\n / \\          / \n4   5        6   \n   / \\      / \\\n  7   8    9  10  \n       \n<b>Ouput:</b>\n[1,2,4,7,8,9,10,6,3]\n\n<b>Explanation:</b>\nThe left boundary are node 1,2,4. (4 is the left-most node according to definition)\nThe leaves are node 4,7,8,9,10.\nThe right boundary are node 1,3,6,10. (10 is the right-most node).\nSo order them in anti-clockwise without duplicate nodes we have [1,2,4,7,8,9,10,6,3].\n</pre>\n<p></p>\n          ",
    tags: ['Google', 'Amazon'],
  },
  {
    id: '546',
    name: 'Remove Boxes',
    acceptance: '34.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given several boxes with different colors represented by different positive numbers. <br>\nYou may experience several rounds to remove boxes until there is no box left. Each time you can choose some continuous boxes with the same color (composed of k boxes, k &gt;= 1), remove them and get <code>k*k</code> points.<br>\nFind the maximum points you can get.\n</p>\n\n<p><b>Example 1:</b><br>\nInput: \n</p><pre>[1, 3, 2, 2, 2, 3, 4, 3, 1]\n</pre>\nOutput:\n<pre>23\n</pre>\nExplanation: \n<pre>[1, 3, 2, 2, 2, 3, 4, 3, 1] \n----&gt; [1, 3, 3, 4, 3, 1] (3*3=9 points) \n----&gt; [1, 3, 3, 3, 1] (1*1=1 points) \n----&gt; [1, 1] (3*3=9 points) \n----&gt; [] (2*2=4 points)\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe number of boxes <code>n</code> would not exceed 100.\n</p>\n\n          ',
    tags: ['Tencent'],
  },
  {
    id: '547',
    name: 'Friend Circles',
    acceptance: '49.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nThere are <b>N</b> students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a <b>direct</b> friend of B, and B is a <b>direct</b> friend of C, then A is an <b>indirect</b> friend of C. And we defined a friend circle is a group of students who are direct or indirect friends.\n</p>\n\n<p>\nGiven a <b>N*N</b> matrix <b>M</b> representing the friend relationship between students in the class. If M[i][j] = 1, then the i<sub>th</sub> and j<sub>th</sub> students are <b>direct</b> friends with each other, otherwise not. And you have to output the total number of friend circles among all the students.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \n[[1,1,0],\n [1,1,0],\n [0,0,1]]\n<b>Output:</b> 2\n<b>Explanation:</b>The 0<sub>th</sub> and 1<sub>st</sub> students are direct friends, so they are in a friend circle. <br>The 2<sub>nd</sub> student himself is in a friend circle. So return 2.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \n[[1,1,0],\n [1,1,1],\n [0,1,1]]\n<b>Output:</b> 1\n<b>Explanation:</b>The 0<sub>th</sub> and 1<sub>st</sub> students are direct friends, the 1<sub>st</sub> and 2<sub>nd</sub> students are direct friends, <br>so the 0<sub>th</sub> and 2<sub>nd</sub> students are indirect friends. All of them are in the same friend circle, so return 1.\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>N is in range [1,200].</li>\n<li>M[i][i] = 1 for all students.</li>\n<li>If M[i][j] = 1, then M[j][i] = 1.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Bloomberg', 'Two Sigma'],
  },
  {
    id: '548',
    name: 'Split Array with Equal Sum ',
    acceptance: '37.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array with n integers, you need to find if there are triplets  (i, j, k) which satisfies following conditions:\n</p><ol>\n<li> 0 &lt; i, i + 1 &lt; j, j + 1 &lt; k &lt; n - 1 </li>\n<li> Sum of subarrays (0, i - 1), (i + 1, j - 1), (j + 1, k - 1) and (k + 1, n - 1) should be equal. </li>\n</ol>\nwhere we define that subarray (L, R) represents a slice of the original array starting from the element indexed L to the element indexed R.\n<p></p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> [1,2,1,2,1,2,1]\n<b>Output:</b> True\n<b>Explanation:</b>\ni = 1, j = 3, k = 5. \nsum(0, i - 1) = sum(0, 0) = 1\nsum(i + 1, j - 1) = sum(2, 2) = 1\nsum(j + 1, k - 1) = sum(4, 4) = 1\nsum(k + 1, n - 1) = sum(6, 6) = 1\n</pre>\n<p></p>\n\n<b>Note:</b>\n<ol>\n<li> 1 &lt;= n &lt;= 2000. </li>\n<li> Elements in the given array will be in range [-1,000,000, 1,000,000]. </li>\n</ol>\n          ',
    tags: ['Alibaba'],
  },
  {
    id: '549',
    name: 'Binary Tree Longest Consecutive Sequence II ',
    acceptance: '42.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, you need to find the length of Longest Consecutive Path in Binary Tree. </p>\n\n<p>Especially, this path can be either increasing or decreasing. For example, [1,2,3,4] and [4,3,2,1] are both considered valid, but the path [1,2,4,3] is not valid. On the other hand, the path can be in the child-Parent-child order, where not necessarily be parent-child order.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\n        1\n       / \\\n      2   3\n<b>Output:</b> 2\n<b>Explanation:</b> The longest consecutive path is [1, 2] or [2, 1].\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>\n        2\n       / \\\n      1   3\n<b>Output:</b> 3\n<b>Explanation:</b> The longest consecutive path is [1, 2, 3] or [3, 2, 1].\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nAll the values of tree nodes are in the range of [-1e7, 1e7].\n</p> \n\n\n          ',
    tags: ['Google'],
  },
  {
    id: '551',
    name: 'Student Attendance Record I',
    acceptance: '44.3%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            You are given a string representing an attendance record for a student. The record only contains the following three characters:\n\n<p>\n</p><ol>\n<li><b>'A'</b> : Absent. </li>\n<li><b>'L'</b> : Late.</li>\n<li> <b>'P'</b> : Present. </li>\n</ol>\n<p></p>\n\n<p>\nA student could be rewarded if his attendance record doesn't contain <b>more than one 'A' (absent)</b> or <b>more than two continuous 'L' (late)</b>.    </p>\n\n<p>You need to return whether the student could be rewarded according to his attendance record.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \"PPALLP\"\n<b>Output:</b> True\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \"PPALLL\"\n<b>Output:</b> False\n</pre>\n<p></p>\n\n\n\n          ",
    tags: ['Google'],
  },
  {
    id: '552',
    name: 'Student Attendance Record II',
    acceptance: '31.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a positive integer <b>n</b>, return the number of all possible attendance records with length n, which will be regarded as rewardable. The answer may be very large, return it after mod 10<sup>9</sup> + 7.</p>\n\n<p>A student attendance record is a string that only contains the following three characters:</p>\n\n<p>\n</p><ol>\n<li><b>\'A\'</b> : Absent. </li>\n<li><b>\'L\'</b> : Late.</li>\n<li> <b>\'P\'</b> : Present. </li>\n</ol>\n<p></p>\n\n<p>\nA record is regarded as rewardable if it doesn\'t contain <b>more than one \'A\' (absent)</b> or <b>more than two continuous \'L\' (late)</b>.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> n = 2\n<b>Output:</b> 8 \n<b>Explanation:</b>\nThere are 8 records with length 2 will be regarded as rewardable:\n"PP" , "AP", "PA", "LP", "PL", "AL", "LA", "LL"\nOnly "AA" won\'t be regarded as rewardable owing to more than one absent times. \n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe value of <b>n</b> won\'t exceed 100,000.\n</p>\n\n\n\n          ',
    tags: ['Google'],
  },
  {
    id: '553',
    name: 'Optimal Division',
    acceptance: '54.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a list of <b>positive integers</b>, the adjacent integers will perform the float division. For example, [2,3,4] -&gt; 2 / 3 / 4.</p>\n\n<p>However, you can add any number of parenthesis at any position to change the priority of operations. You should find out how to add parenthesis to get the <b>maximum</b> result, and return the corresponding expression in string format. <b>Your expression should NOT contain redundant parenthesis.</b></p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> [1000,100,10,2]\n<b>Output:</b> "1000/(100/10/2)"\n<b>Explanation:</b>\n1000/(100/10/2) = 1000/((100/10)/2) = 200\nHowever, the bold parenthesis in "1000/(<b>(</b>100/10<b>)</b>/2)" are redundant, <br>since they don\'t influence the operation priority. So you should return "1000/(100/10/2)". \n\nOther cases:\n1000/(100/10)/2 = 50\n1000/(100/(10/2)) = 50\n1000/100/10/2 = 0.5\n1000/100/(10/2) = 2\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>The length of the input array is [1, 10].</li>\n<li>Elements in the given array will be in range [2, 1000].</li>\n<li>There is only one optimal division for each test case.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '554',
    name: 'Brick Wall',
    acceptance: '46.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>There is a brick wall in front of you. The wall is rectangular and has several rows of bricks. The bricks have the same height but different width. You want to draw a vertical line from the <b>top</b> to the <b>bottom</b> and cross the <b>least</b> bricks. </p>\n\n<p>\nThe brick wall is represented by a list of rows. Each row is a list of integers representing the width of each brick in this row from left to right. \n</p>\n\n<p>If your line go through the edge of a brick, then the brick is not considered as crossed. You need to find out how to draw the line to cross the least bricks and return the number of crossed bricks. </p>\n\n<p><b>You cannot draw a line just along one of the two vertical edges of the wall, in which case the line will obviously cross no bricks. </b></p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> \n[[1,2,2,1],\n [3,1,2],\n [1,3,2],\n [2,4],\n [3,1,2],\n [1,3,1,1]]\n<b>Output:</b> 2\n<b>Explanation:</b> \n<img src="https://leetcode.com/static/images/problemset/brick_wall.png" width="30%">\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The width sum of bricks in different rows are the same and won\'t exceed INT_MAX.</li>\n<li>The number of bricks in each row is in range [1,10,000]. The height of wall is in range [1,10,000]. Total number of bricks of the wall won\'t exceed 20,000. </li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '555',
    name: 'Split Concatenated Strings ',
    acceptance: '37.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a list of strings, you could concatenate these strings together into a loop, where for each string you could choose to reverse it or not. Among all the possible loops, you need to find the lexicographically biggest string after cutting the loop, which will make the looped string into a regular one.</p>\n\n<p>Specifically, to find the lexicographically biggest string, you need to experience two phases: \n</p><ol>\n<li>Concatenate all the strings into a loop, where you can reverse some strings or not and connect them in the same order as given.</li>\n<li>Cut and make one breakpoint in any place of the loop, which will make the looped string into a regular one starting from the character at the cutpoint. </li>\n</ol>\n<p></p>\n\n<p>And your job is to find the lexicographically biggest one among all the possible regular strings.</p>\n\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> "abc", "xyz"\n<b>Output:</b> "zyxcba"\n<b>Explanation:</b> You can get the looped string "-abcxyz-", "-abczyx-", "-cbaxyz-", "-cbazyx-", <br>where \'-\' represents the looped status. <br>The answer string came from the fourth looped one, <br>where you could cut from the middle character \'a\' and get "zyxcba".\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The input strings will only contain lowercase letters.</li>\n<li>The total length of all the strings will not over 1,000.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Alibaba'],
  },
  {
    id: '556',
    name: 'Next Greater Element III',
    acceptance: '29.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a positive <b>32-bit</b> integer <b>n</b>, you need to find the smallest <b>32-bit</b> integer which has exactly the same digits existing in the integer <b>n</b> and is greater in value than n. If no such positive <b>32-bit</b> integer exists, you need to return -1.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 12\n<b>Output:</b> 21\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> 21\n<b>Output:</b> -1\n</pre>\n<p></p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '557',
    name: 'Reverse Words in a String III',
    acceptance: '59.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "Let\'s take LeetCode contest"\n<b>Output:</b> "s\'teL ekat edoCteeL tsetnoc"\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nIn the string, each word is separated by single space and there will not be any extra space in the string.\n</p>\n          ',
    tags: ['Zappos'],
  },
  {
    id: '560',
    name: 'Subarray Sum Equals K',
    acceptance: '40.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given an array of integers and an integer <b>k</b>, you need to find the total number of continuous subarrays whose sum equals to <b>k</b>.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>nums = [1,1,1], k = 2\n<b>Output:</b> 2\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the array is in range [1, 20,000].</li>\n<li>The range of numbers in the array is [-1000, 1000] and the range of the integer <b>k</b> is [-1e7, 1e7].</li>\n</ol>\n<p></p>\n\n          ',
    tags: ['Google'],
  },
  {
    id: '561',
    name: 'Array Partition I',
    acceptance: '66.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array of <b>2n</b> integers, your task is to group these integers into <b>n</b> pairs of integer, say (a<sub>1</sub>, b<sub>1</sub>), (a<sub>2</sub>, b<sub>2</sub>), ..., (a<sub>n</sub>, b<sub>n</sub>) which makes sum of min(a<sub>i</sub>, b<sub>i</sub>) for all i from 1 to n as large as possible.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,4,3,2]\n\n<b>Output:</b> 4\n<b>Explanation:</b> n is 2, and the maximum sum of pairs is 4 = min(1, 2) + min(3, 4).\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><b>n</b> is a positive integer, which is in the range of [1, 10000].</li>\n<li>All the integers in the array will be in the range of [-10000, 10000].</li>\n</ol>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '562',
    name: 'Longest Line of Consecutive One in Matrix ',
    acceptance: '41.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            Given a 01 matrix <b>M</b>, find the longest line of consecutive one in the matrix. The line could be horizontal, vertical, diagonal or anti-diagonal.\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b>\n[[0,1,1,0],\n [0,1,1,0],\n [0,0,0,1]]\n<b>Output:</b> 3\n</pre>\n<p></p>\n\n<p>\n<b>Hint:</b>\nThe number of elements in the given matrix will not exceed 10,000.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '563',
    name: 'Binary Tree Tilt',
    acceptance: '47.1%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given a binary tree, return the tilt of the <b>whole tree</b>.</p>\n\n<p>The tilt of a <b>tree node</b> is defined as the <b>absolute difference</b> between the sum of all left subtree node values and the sum of all right subtree node values. Null node has tilt 0.</p>\n\n<p>The tilt of the <b>whole tree</b> is defined as the sum of all nodes' tilt.</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> \n         1\n       /   \\\n      2     3\n<b>Output:</b> 1\n<b>Explanation:</b> \nTilt of node 2 : 0\nTilt of node 3 : 0\nTilt of node 1 : |2-3| = 1\nTilt of binary tree : 0 + 0 + 1 = 1\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>The sum of node values in any subtree won't exceed the range of 32-bit integer. </li>\n<li>All the tilt values won't exceed the range of 32-bit integer.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Indeed'],
  },
  {
    id: '564',
    name: 'Find the Closest Palindrome',
    acceptance: '17.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given an integer n, find the closest integer (not including itself), which is a palindrome. </p>\n\n<p>The \'closest\' is defined as absolute difference minimized between two integers.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "123"\n<b>Output:</b> "121"\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The input <b>n</b> is a positive integer represented by string, whose length will not exceed 18.</li>\n<li>If there is a tie, return the smaller one as answer.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Yelp'],
  },
  {
    id: '565',
    name: 'Array Nesting',
    acceptance: '49.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>A zero-indexed array A of length N contains all integers from 0 to N-1. Find and return the longest length of set S, where S[i] = {A[i], A[A[i]], A[A[A[i]]], ... } subjected to the rule below.</p>\n\n<p>Suppose the first element in S starts with the selection of element A[i] of index = i, the next element in S should be A[A[i]], and then A[A[A[i]]]… By that analogy, we stop adding right before a duplicate element occurs in S.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> A = [5,4,0,3,1,6,2]\n<b>Output:</b> 6\n<b>Explanation:</b> \nA[0] = 5, A[1] = 4, A[2] = 0, A[3] = 3, A[4] = 1, A[5] = 6, A[6] = 2.\n\nOne of the longest S[K]:\nS[0] = {A[0], A[5], A[6], A[2]} = {5, 6, 2, 0}\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>N is an integer within the range [1, 20,000].</li>\n<li>The elements of A are all distinct.</li>\n<li>Each element of A is an integer within the range [0, N-1].</li>\n</ol>\n<p></p>\n\n          ',
    tags: ['Apple'],
  },
  {
    id: '566',
    name: 'Reshape the Matrix',
    acceptance: '58.2%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.\n</p>\n\n<p>\nYou're given a matrix represented by a two-dimensional array, and two <b>positive</b> integers <b>r</b> and <b>c</b> representing the <b>row</b> number and <b>column</b> number of the wanted reshaped matrix, respectively.</p>\n\n <p>The reshaped matrix need to be filled with all the elements of the original matrix in the same <b>row-traversing</b> order as they were.\n</p>\n\n<p>\nIf the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nnums = \n[[1,2],\n [3,4]]\nr = 1, c = 4\n<b>Output:</b> \n[[1,2,3,4]]\n<b>Explanation:</b><br>The <b>row-traversing</b> of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nnums = \n[[1,2],\n [3,4]]\nr = 2, c = 4\n<b>Output:</b> \n[[1,2],\n [3,4]]\n<b>Explanation:</b><br>There is no way to reshape a 2 * 2 matrix to a 2 * 4 matrix. So output the original matrix.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The height and width of the given matrix is in range [1, 100].</li>\n<li>The given r and c are all positive.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Mathworks'],
  },
  {
    id: '567',
    name: 'Permutation in String',
    acceptance: '36.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            Given two strings <b>s1</b> and <b>s2</b>, write a function to return true if <b>s2</b> contains the permutation of <b>s1</b>. In other words, one of the first string\'s permutations is the <b>substring</b> of the second string.\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>s1 = "ab" s2 = "eidbaooo"\n<b>Output:</b>True\n<b>Explanation:</b> s2 contains one permutation of s1 ("ba").\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>s1= "ab" s2 = "eidboaoo"\n<b>Output:</b> False\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The input strings only contain lower case letters.</li>\n<li>The length of both given strings is in range [1, 10,000].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '568',
    name: 'Maximum Vacation Days ',
    acceptance: '38.8%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nLeetCode wants to give one of its best employees the option to travel among <b>N</b> cities to collect algorithm problems. But all work and no play makes Jack a dull boy, you could take vacations in some particular cities and weeks. Your job is to schedule the traveling to maximize the number of vacation days you could take, but there are certain rules and restrictions you need to follow.\n</p>\n\n<p><b>Rules and restrictions:</b><br>\n</p><ol>\n<li>You can only travel among <b>N</b> cities, represented by indexes from 0 to N-1. Initially, you are in the city indexed 0 on <b>Monday</b>.</li>\n<li>The cities are connected by flights. The flights are represented as a <b>N*N</b> matrix (not necessary symmetrical), called <b>flights</b> representing the airline status from the city i to the city j. If there is no flight from the city i to the city j, <b>flights[i][j] = 0</b>; Otherwise, <b>flights[i][j] = 1</b>. Also, <b>flights[i][i] = 0</b> for all i.</li>\n<li>You totally have <b>K</b> weeks (<b>each week has 7 days</b>) to travel. You can only take flights at most once <b>per day</b> and can only take flights on each week's <b>Monday</b> morning. Since flight time is so short, we don't consider the impact of flight time.</li>\n<li>For each city, you can only have restricted vacation days in different weeks, given an <b>N*K</b> matrix called <b>days</b> representing this relationship. For the value of <b>days[i][j]</b>, it represents the maximum days you could take vacation in the city <b>i</b> in the week <b>j</b>.</li>\n</ol>\n<p></p>\n\n<p>You're given the <b>flights</b> matrix and <b>days</b> matrix, and you need to output the maximum vacation days you could take during <b>K</b> weeks.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>flights = [[0,1,1],[1,0,1],[1,1,0]], days = [[1,3,1],[6,0,3],[3,3,3]]\n<b>Output:</b> 12\n<b>Explanation:</b> <br>Ans = 6 + 3 + 3 = 12. <br>\nOne of the best strategies is:\n1st week : fly from city 0 to city 1 on Monday, and play 6 days and work 1 day. <br>(Although you start at city 0, we could also fly to and start at other cities since it is Monday.) \n2nd week : fly from city 1 to city 2 on Monday, and play 3 days and work 4 days.\n3rd week : stay at city 2, and play 3 days and work 4 days.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>flights = [[0,0,0],[0,0,0],[0,0,0]], days = [[1,1,1],[7,7,7],[7,7,7]]\n<b>Output:</b> 3\n<b>Explanation:</b> <br>Ans = 1 + 1 + 1 = 3. <br>\nSince there is no flights enable you to move to another city, you have to stay at city 0 for the whole 3 weeks. <br>For each week, you only have one day to play and six days to work. <br>So the maximum number of vacation days is 3.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b>flights = [[0,1,1],[1,0,1],[1,1,0]], days = [[7,0,0],[0,7,0],[0,0,7]]\n<b>Output:</b> 21\n<b>Explanation:</b><br>Ans = 7 + 7 + 7 = 21<br>\nOne of the best strategies is:\n1st week : stay at city 0, and play 7 days. \n2nd week : fly from city 0 to city 1 on Monday, and play 7 days.\n3rd week : fly from city 1 to city 2 on Monday, and play 7 days.\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><b>N and K</b> are positive integers, which are in the range of [1, 100].</li>\n<li>In the matrix <b>flights</b>, all the values are integers in the range of [0, 1].</li>\n<li>In the matrix <b>days</b>, all the values are integers in the range [0, 7].</li>\n<li>You could stay at a city beyond the number of vacation days, but you should <b>work</b> on the extra days, which won't be counted as vacation days.</li>\n<li>If you fly from the city A to the city B and take the vacation on that day, the deduction towards vacation days will count towards the vacation days of city B in that week.</li>\n<li>We don't consider the impact of flight hours towards the calculation of vacation days.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '569',
    name: 'Median Employee Salary ',
    acceptance: '35.0%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThe <code>Employee</code> table holds all employees. The employee table has three columns: Employee Id, Company Name, and Salary.</p>\n\n<pre>+-----+------------+--------+\n|Id   | Company    | Salary |\n+-----+------------+--------+\n|1    | A          | 2341   |\n|2    | A          | 341    |\n|3    | A          | 15     |\n|4    | A          | 15314  |\n|5    | A          | 451    |\n|6    | A          | 513    |\n|7    | B          | 15     |\n|8    | B          | 13     |\n|9    | B          | 1154   |\n|10   | B          | 1345   |\n|11   | B          | 1221   |\n|12   | B          | 234    |\n|13   | C          | 2345   |\n|14   | C          | 2645   |\n|15   | C          | 2645   |\n|16   | C          | 2652   |\n|17   | C          | 65     |\n+-----+------------+--------+\n</pre>\n\n<p>Write a SQL query to find the median salary of each company. Bonus points if you can solve it without using any built-in SQL functions.</p>\n\n<pre>+-----+------------+--------+\n|Id   | Company    | Salary |\n+-----+------------+--------+\n|5    | A          | 451    |\n|6    | A          | 513    |\n|12   | B          | 234    |\n|9    | B          | 1154   |\n|14   | C          | 2645   |\n+-----+------------+--------+\n</pre>\n          ',
    tags: ['Google'],
  },
  {
    id: '570',
    name: 'Managers with at Least 5 Direct Reports ',
    acceptance: '55.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>The <code>Employee</code> table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.</p>\n\n<pre>+------+----------+-----------+----------+\n|Id    |Name \t  |Department |ManagerId |\n+------+----------+-----------+----------+\n|101   |John \t  |A \t      |null      |\n|102   |Dan \t  |A \t      |101       |\n|103   |James \t  |A \t      |101       |\n|104   |Amy \t  |A \t      |101       |\n|105   |Anne \t  |A \t      |101       |\n|106   |Ron \t  |B \t      |101       |\n+------+----------+-----------+----------+\n</pre>\n\n<p>Given the <code>Employee</code> table, write a SQL query that finds out managers with at least 5 direct report. For the above table, your SQL query should return:\n</p>\n\n<pre>+-------+\n| Name  |\n+-------+\n| John  |\n+-------+\n</pre>\n\n<p><b>Note:</b><br>\nNo one would report to himself.</p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '571',
    name: 'Find Median Given Frequency of Numbers ',
    acceptance: '36.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThe <code>Numbers</code> table keeps the value of number and its frequency.\n</p>\n<pre>+----------+-------------+\n|  Number  |  Frequency  |\n+----------+-------------|\n|  0       |  7          |\n|  1       |  1          |\n|  2       |  3          |\n|  3       |  1          |\n+----------+-------------+\n</pre>\n<p>\nIn this table, the numbers are <code>0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 3</code>, so the median is <code>(0 + 0) / 2 = 0</code>.\n</p>\n\n<pre>+--------+\n| median |\n+--------|\n| 0.0000 |\n+--------+\n</pre>\n\n<p>\nWrite a query to find the median of all numbers and name the result as <code>median</code>.\n</p>\n          ',
    tags: ['Pinterest'],
  },
  {
    id: '572',
    name: 'Subtree of Another Tree',
    acceptance: '40.7%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nGiven two non-empty binary trees <b>s</b> and <b>t</b>, check whether tree <b>t</b> has exactly the same structure and node values with a subtree of <b>s</b>. A subtree of <b>s</b> is a tree consists of a node in <b>s</b> and all of this node's descendants. The tree <b>s</b> could also be considered as a subtree of itself.\n</p>\n\n<p><b>Example 1:</b><br>\n\nGiven tree s:\n</p><pre>     3\n    / \\\n   4   5\n  / \\\n 1   2\n</pre>\nGiven tree t:\n<pre>   4 \n  / \\\n 1   2\n</pre>\nReturn <b>true</b>, because t has the same structure and node values with a subtree of s.\n<p></p>\n\n<p><b>Example 2:</b><br>\n\nGiven tree s:\n</p><pre>     3\n    / \\\n   4   5\n  / \\\n 1   2\n    /\n   0\n</pre>\nGiven tree t:\n<pre>   4\n  / \\\n 1   2\n</pre>\nReturn <b>false</b>.\n<p></p>\n          ",
    tags: ['Facebook', 'eBay'],
  },
  {
    id: '573',
    name: 'Squirrel Simulation ',
    acceptance: '52.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            There\'s a tree, a squirrel, and several nuts. Positions are represented by the cells in a 2D grid. Your goal is to find the <b>minimal</b> distance for the squirrel to collect all the nuts and put them under the tree one by one. The squirrel can only take at most <b>one nut</b> at one time and can move in four directions - up, down, left and right, to the adjacent cell. The distance is represented by the number of moves. \n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nHeight : 5\nWidth : 7\nTree position : [2,2]\nSquirrel : [4,4]\nNuts : [[3,0], [2,5]]\n<b>Output:</b> 12\n<b>Explanation:</b>\n<img src="https://leetcode.com/static/images/problemset/squirrel_simulation.png" width="40%">\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>All given positions won\'t overlap.</li>\n<li>The squirrel can take at most one nut at one time.</li>\n<li>The given positions of nuts have no order.</li>\n<li>Height and width are positive integers. 3 &lt;= height * width &lt;= 10,000.</li>\n<li>The given positions contain at least one nut, only one tree and one squirrel.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Square'],
  },
  {
    id: '574',
    name: 'Winning Candidate ',
    acceptance: '32.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Table: <code>Candidate</code></p>\n<pre>+-----+---------+\n| id  | Name    |\n+-----+---------+\n| 1   | A       |\n| 2   | B       |\n| 3   | C       |\n| 4   | D       |\n| 5   | E       |\n+-----+---------+  \n</pre>\n<p>Table: <code>Vote</code></p>\n<pre>+-----+--------------+\n| id  | CandidateId  |\n+-----+--------------+\n| 1   |     2        |\n| 2   |     4        |\n| 3   |     3        |\n| 4   |     2        |\n| 5   |     5        |\n+-----+--------------+\nid is the auto-increment primary key,\nCandidateId is the id appeared in Candidate table.\n</pre>\n\n<p>Write a sql to find the name of the winning candidate, the above example will return the winner <code>B</code>.</p>\n\n<pre>+------+\n| Name |\n+------+\n| B    |\n+------+\n</pre>\n\n<p><b>Notes:</b><br>\n</p><ol>\n<li>You may assume <b>there is no tie</b>, in other words there will be <b>at most one</b> winning candidate.</li>\n</ol><p></p>\n          ',
    tags: [],
  },
  {
    id: '575',
    name: 'Distribute Candies',
    acceptance: '58.4%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            Given an integer array with <b>even</b> length, where different numbers in this array represent different <b>kinds</b> of candies. Each number means one candy of the corresponding kind. You need to distribute these candies <b>equally</b> in number to brother and sister. Return the maximum number of <b>kinds</b> of candies the sister could gain. \n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> candies = [1,1,2,2,3,3]\n<b>Output:</b> 3\n<b>Explanation:</b>\nThere are three different kinds of candies (1, 2 and 3), and two candies for each kind.\nOptimal distribution: The sister has candies [1,2,3] and the brother has candies [1,2,3], too. \nThe sister has three different kinds of candies. \n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> candies = [1,1,2,3]\n<b>Output:</b> 2\n<b>Explanation:</b> For example, the sister has candies [2,3] and the brother has candies [1,1]. \nThe sister has two different kinds of candies, the brother has only one kind of candies. \n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><ol>\n<li>The length of the given array is in range [2, 10,000], and will be even.</li>\n<li>The number in given array is in range [-100,000, 100,000].</li>\n<ol>\n<p></p>\n          </ol></ol>',
    tags: ['LiveRamp'],
  },
  {
    id: '576',
    name: 'Out of Boundary Paths',
    acceptance: '30.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>There is an <b>m</b> by <b>n</b> grid with a ball. Given the start coordinate <b>(i,j)</b> of the ball, you can move the ball to <b>adjacent</b> cell or cross the grid boundary in four directions (up, down, left, right). However, you can <b>at most</b> move <b>N</b> times. Find out the number of paths to move the ball out of grid boundary. The answer may be very large, return it after mod 10<sup>9</sup> + 7.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>m = 2, n = 2, N = 2, i = 0, j = 0\n<b>Output:</b> 6\n<b>Explanation:</b>\n<img src="https://leetcode.com/static/images/problemset/out_of_boundary_paths_1.png" width="40%">\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>m = 1, n = 3, N = 3, i = 0, j = 1\n<b>Output:</b> 12\n<b>Explanation:</b>\n<img src="https://leetcode.com/static/images/problemset/out_of_boundary_paths_2.png" width="37%">\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>Once you move the ball out of boundary, you cannot move it back.</li>\n<li>The length and height of the grid is in range [1,50].</li>\n<li>N is in range [0,50].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Baidu'],
  },
  {
    id: '577',
    name: 'Employee Bonus ',
    acceptance: '50.0%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nSelect all employee's name and bonus whose bonus is &lt; 1000.\n</p>\n<p>\nTable:<code>Employee </code>\n</p>\n\n<pre>+-------+--------+-----------+--------+\n| empId |  name  | supervisor| salary |\n+-------+--------+-----------+--------+\n|   1   | John   |  3        | 1000   |\n|   2   | Dan    |  3        | 2000   |\n|   3   | Brad   |  null     | 4000   |\n|   4   | Thomas |  3        | 4000   |\n+-------+--------+-----------+--------+\nempId is the primary key column for this table.\n</pre>\n\n<p>\nTable: <code>Bonus</code></p>\n<pre>+-------+-------+\n| empId | bonus |\n+-------+-------+\n| 2     | 500   |\n| 4     | 2000  |\n+-------+-------+\nempId is the primary key column for this table.\n</pre>\n<p>\nExample ouput: \n</p>\n<pre>+-------+-------+\n| name  | bonus |\n+-------+-------+\n| John  | null  |\n| Dan   | 500   |\n| Brad  | null  |\n+-------+-------+\n</pre>\n          ",
    tags: ['Netsuite'],
  },
  {
    id: '578',
    name: 'Get Highest Answer Rate Question ',
    acceptance: '28.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGet the highest answer rate question from a table <code>survey_log</code> with these columns:\n<b>uid</b>, <b>action</b>, <b>question_id</b>, <b>answer_id</b>, <b>q_num</b>, <b>timestamp</b>.\n</p>\n\n<p>\nuid means user id; action has these kind of values: "show", "answer", "skip";\nanswer_id is not null when action column is "answer", while is null for "show" and "skip";\nq_num is the numeral order of the question in current session.\n</p>\n\n<p>Write a sql query to identify the question which has the highest answer rate.</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b>\n+------+-----------+--------------+------------+-----------+------------+\n| uid  | action    | question_id  | answer_id  | q_num     | timestamp  |\n+------+-----------+--------------+------------+-----------+------------+\n| 5    | show      | 285          | null       | 1         | 123        |\n| 5    | answer    | 285          | 124124     | 1         | 124        |\n| 5    | show      | 369          | null       | 2         | 125        |\n| 5    | skip      | 369          | null       | 2         | 126        |\n+------+-----------+--------------+------------+-----------+------------+\n<b>Output:</b>\n+-------------+\n| survey_log  |\n+-------------+\n|    285      |\n+-------------+\n<b>Explanation:</b>\nquestion 285 has answer rate 1/1, while question 369 has 0/1 answer rate, so output 285.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe highest answer rate meaning is: answer number\'s ratio in show number in the same question.\n</p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '579',
    name: 'Find Cumulative Salary of an Employee ',
    acceptance: '27.2%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>The <b>Employee</b> table holds the salary information in a year.</p>\n\n<p>Write a SQL to get the cumulative sum of an employee's salary over a period of 3 months but exclude the most recent month.</p>\n\n<p>The result should be displayed by 'Id' ascending, and then by 'Month' descending.</p> \n\n<p><b>Example</b><br>\n<b>Input</b>\n</p><pre>| Id | Month | Salary |\n|----|-------|--------|\n| 1  | 1     | 20     |\n| 2  | 1     | 20     |\n| 1  | 2     | 30     |\n| 2  | 2     | 30     |\n| 3  | 2     | 40     |\n| 1  | 3     | 40     |\n| 3  | 3     | 60     |\n| 1  | 4     | 60     |\n| 3  | 4     | 70     |\n</pre>\n\n<b>Output</b>\n<pre>\n| Id | Month | Salary |\n|----|-------|--------|\n| 1  | 3     | 90     |\n| 1  | 2     | 50     |\n| 1  | 1     | 20     |\n| 2  | 1     | 20     |\n| 3  | 3     | 100    |\n| 3  | 2     | 40     |\n</pre>\n<p></p>\n\n<b>Explanation</b>\n<p>Employee '1' has 3 salary records for the following 3 months except the most recent month '4': salary 40 for month '3', 30 for month '2' and 20 for month '1'<br>\nSo the cumulative sum of salary of this employee over 3 months is 90(40+30+20), 50(30+20) and 20 respectively.</p> \n<pre>| Id | Month | Salary |\n|----|-------|--------|\n| 1  | 3     | 90     |\n| 1  | 2     | 50     |\n| 1  | 1     | 20     |\n</pre>\n\nEmployee '2' only has one salary record (month '1') except its most recent month '2'.\n<pre>| Id | Month | Salary |\n|----|-------|--------|\n| 2  | 1     | 20     |\n</pre><p></p>\nEmploy '3' has two salary records except its most recent pay month '4': month '3' with 60 and month '2' with 40. So the cumulative salary is as following.\n<pre>| Id | Month | Salary |\n|----|-------|--------|\n| 3  | 3     | 100    |\n| 3  | 2     | 40     |\n</pre><p></p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '580',
    name: 'Count Student Number in Departments ',
    acceptance: '38.5%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>A university uses 2 data tables, <b><i>student</i></b> and <b><i>department</i></b>, to store data about its students and the departments associated with each major. </p>\n\n<p>Write a query to print the respective department name and number of students majoring in each department for all departments in the <b><i>department</i></b> table (even ones with no current students).</p>\n\n<p>Sort your results by descending number of students; if two or more departments have the same number of students, then sort those departments alphabetically by department name.</p>\n\n<p>The <b><i>student</i></b> is described as follow:</p>\n\n<pre>| Column Name  | Type      |\n|--------------|-----------|\n| student_id   | Integer   |\n| student_name | String    |\n| gender       | Character |\n| dept_id      | Integer   |\n</pre>\n\n<p>where student_id is the student's ID number, student_name is the student's name, gender is their gender, and dept_id is the department ID associated with their declared major.</p>\n\n<p>And the <b><i>department</i></b> table is described as below:</p>\n<pre>| Column Name | Type    |\n|-------------|---------|\n| dept_id     | Integer |\n| dept_name   | String  |\n</pre>\n\n<p>where dept_id is the department's ID number and dept_name is the department name.</p>\n\n<p>Here is an example <b>input</b>:<br>\n\n<b><i>student</i></b> table:</p>\n\n<pre>| student_id | student_name | gender | dept_id |\n|------------|--------------|--------|---------|\n| 1          | Jack         | M      | 1       |\n| 2          | Jane         | F      | 1       |\n| 3          | Mark         | M      | 2       |\n</pre>\n\n<p><b><i>department</i></b> table:</p>\n<pre>| dept_id | dept_name   |\n|---------|-------------|\n| 1       | Engineering |\n| 2       | Science     |\n| 3       | Law         |\n</pre>\n\n<p>The <b>Output</b> should be:</p>\n<pre>| dept_name   | student_number |\n|-------------|----------------|\n| Engineering | 2              |\n| Science     | 1              |\n| Law         | 0              |\n</pre>\n          ",
    tags: ['Twitter'],
  },
  {
    id: '581',
    name: 'Shortest Unsorted Continuous Subarray',
    acceptance: '29.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an integer array, you need to find one <b>continuous subarray</b> that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too. </p> \n\n<p>You need to find the <b>shortest</b> such subarray and output its length.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [2, 6, 4, 8, 10, 9, 15]\n<b>Output:</b> 5\n<b>Explanation:</b> You need to sort [6, 4, 8, 10, 9] in ascending order to make the whole array sorted in ascending order.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>Then length of the input array is in range [1, 10,000].</li>\n<li>The input array may contain duplicates, so ascending order here means <b>&lt;=</b>. </li>\n</ol>\n<p></p>\n          ',
    tags: ['Google', 'LiveRamp'],
  },
  {
    id: '582',
    name: 'Kill Process ',
    acceptance: '50.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given <b>n</b> processes, each process has a unique <b>PID (process id)</b> and its <b>PPID (parent process id)</b>. \n\n</p><p>Each process only has one parent process, but may have one or more children processes. This is just like a tree structure.  Only one process has PPID that is 0, which means this process has no parent process. All the PIDs will be distinct positive integers.</p>\n\n<p>We use two list of integers to represent a list of processes, where the first list contains PID for each process and the second list contains the corresponding PPID. </p>\n \n<p>Now given the two lists, and a PID representing a process you want to kill, return a list of PIDs of processes that will be killed in the end. You should assume that when a process is killed, all its children processes will be killed. No order is required for the final answer.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \npid =  [1, 3, 10, 5]\nppid = [3, 0, 5, 3]\nkill = 5\n<b>Output:</b> [5,10]\n<b>Explanation:</b> \n           3\n         /   \\\n        1     5\n             /\n            10\nKill 5 will also kill 10.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The given kill id is guaranteed to be one of the given PIDs.</li>\n<li>n &gt;= 1.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '583',
    name: 'Delete Operation for Two Strings',
    acceptance: '44.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two words <i>word1</i> and <i>word2</i>, find the minimum number of steps required to make <i>word1</i> and <i>word2</i> the same, where in each step you can delete one character in either string.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "sea", "eat"\n<b>Output:</b> 2\n<b>Explanation:</b> You need one step to make "sea" to "ea" and another step to make "eat" to "ea".\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of given words won\'t exceed 500.</li>\n<li>Characters in given words can only be lower-case letters.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '584',
    name: 'Find Customer Referee ',
    acceptance: '60.6%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given a table <code>customer</code> holding customers information and the referee.</p>\n\n<pre>+------+------+-----------+\n| id   | name | referee_id|\n+------+------+-----------+\n|    1 | Will |      NULL |\n|    2 | Jane |      NULL |\n|    3 | Alex |         2 |\n|    4 | Bill |      NULL |\n|    5 | Zack |         1 |\n|    6 | Mark |         2 |\n+------+------+-----------+\n</pre>\n\n<p>Write a query to return the list of customers <b>NOT</b> referred by the person with id '2'.</p>\n\n<p>For the sample data above, the result is:</p>\n<pre>+------+\n| name |\n+------+\n| Will |\n| Jane |\n| Bill |\n| Zack |\n+------+\n</pre>\n          ",
    tags: [],
  },
  {
    id: '585',
    name: 'Investments in 2016 ',
    acceptance: '44.9%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Write a query to print the sum of all total investment values in 2016 (<b>TIV_2016</b>), to a scale of 2 decimal places, for all policy holders who meet the following criteria:</p>\n\n<ol>\n<li>Have the same <b>TIV_2015</b> value as one or more other policyholders.</li>\n<li>Are not located in the same city as any other policyholder (i.e.: the (latitude, longitude) attribute pairs must be unique).</li>\n</ol>\n\n<p><b>Input Format:</b><br>\nThe <b><i>insurance</i></b> table is described as follows:</p>\n\n<pre>| Column Name | Type          |\n|-------------|---------------|\n| PID         | INTEGER(11)   |\n| TIV_2015    | NUMERIC(15,2) |\n| TIV_2016    | NUMERIC(15,2) |\n| LAT         | NUMERIC(5,2)  |\n| LON         | NUMERIC(5,2)  |\n</pre>\n\n<p>where <b>PID</b> is the policyholder's policy ID, <b>TIV_2015</b> is the total investment value in 2015, <b>TIV_2016</b> is the total investment value in 2016, <b>LAT</b> is the latitude of the policy holder's city, and <b>LON</b> is the longitude of the policy holder's city.</p>\n\n<p><b>Sample Input</b></p>\n\n<pre>| PID | TIV_2015 | TIV_2016 | LAT | LON |\n|-----|----------|----------|-----|-----|\n| 1   | 10       | 5        | 10  | 10  |\n| 2   | 20       | 20       | 20  | 20  |\n| 3   | 10       | 30       | 20  | 20  |\n| 4   | 10       | 40       | 40  | 40  |\n</pre>\n\n<p><b>Sample Output</b></p>\n<pre>| TIV_2016 |\n|----------|\n| 45.00    |\n</pre>\n\n<p><b>Explanation</b></p>\n\n<pre>The first record in the table, like the last record, meets both of the two criteria.\nThe <b>TIV_2015</b> value '10' is as the same as the third and forth record, and its location unique.\n\nThe second record does not meet any of the two criteria. Its <b>TIV_2015</b> is not like any other policyholders.\n\nAnd its location is the same with the third record, which makes the third record fail, too.\n\nSo, the result is the sum of <b>TIV_2016</b> of the first and last record, which is 45.</pre>\n          ",
    tags: ['Twitter'],
  },
  {
    id: '586',
    name: 'Customer Placing the Largest Number of Orders ',
    acceptance: '56.8%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Query the <b>customer_number</b> from the <b><i>orders</i></b> table for the customer who has placed the largest number of orders.</p>\n\n<p>It is guaranteed that exactly one customer will have placed more orders than any other customer.</p>\n\n<p>The <b><i>orders</i></b> table is defined as follows:</p>\n\n<pre>| Column            | Type      |\n|-------------------|-----------|\n| order_number (PK) | int       |\n| customer_number   | int       |\n| order_date        | date      |\n| required_date     | date      |\n| shipped_date      | date      |\n| status            | char(15)  |\n| comment           | char(200) |\n</pre>\n\n<p><b>Sample Input</b></p>\n<pre>| order_number | customer_number | order_date | required_date | shipped_date | status | comment |\n|--------------|-----------------|------------|---------------|--------------|--------|---------|\n| 1            | 1               | 2017-04-09 | 2017-04-13    | 2017-04-12   | Closed |         |\n| 2            | 2               | 2017-04-15 | 2017-04-20    | 2017-04-18   | Closed |         |\n| 3            | 3               | 2017-04-16 | 2017-04-25    | 2017-04-20   | Closed |         |\n| 4            | 3               | 2017-04-18 | 2017-04-28    | 2017-04-25   | Closed |         |\n</pre>\n\n<p><b>Sample Output</b></p>\n<pre>| customer_number |\n|-----------------|\n| 3               |\n</pre>\n\n<p><b>Explanation</b></p>\n<pre>The customer with number '3' has two orders, which is greater than either customer '1' or '2' because each of them  only has one order. <br>So the result is customer_number '3'.\n</pre>\n\n<p><i><b>Follow up:</b> What if more than one customer have the largest number of orders, can you find all the customer_number in this case?</i></p>\n          ",
    tags: ['Twitter'],
  },
  {
    id: '587',
    name: 'Erect the Fence',
    acceptance: '32.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>There are some trees, where each tree is represented by (x,y) coordinate in a two-dimensional garden. Your job is to fence the entire garden using the <b>minimum length</b> of rope as it is expensive. The garden is well fenced only if all the trees are enclosed. Your task is to help find the coordinates of trees which are exactly located on the fence perimeter.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [[1,1],[2,2],[2,0],[2,4],[3,3],[4,2]]\n<b>Output:</b> [[1,1],[2,0],[4,2],[3,3],[2,4]]\n<b>Explanation:</b>\n<img src="https://leetcode.com/static/images/problemset/erect_the_fence_1.png" width="30%">\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [[1,2],[2,2],[4,2]]\n<b>Output:</b> [[1,2],[2,2],[4,2]]\n<b>Explanation:</b>\n<img src="https://leetcode.com/static/images/problemset/erect_the_fence_2.png" width="30%">\nEven you only have trees in a line, you need to use rope to enclose them. \n</pre>\n<p></p>\n\n<p> Note: \n</p><ol>\n<li>All trees should be enclosed together. You cannot cut the rope to enclose trees that will separate them in more than one group.</li>\n<li>All input integers will range from 0 to 100. </li>\n<li>The garden has at least one tree. </li>\n<li>All coordinates are distinct. </li>\n<li>Input points have <b>NO</b> order. No order required for output.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '588',
    name: 'Design In-Memory File System ',
    acceptance: '35.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Design an in-memory file system to simulate the following functions:</p>\n\n<p><code>ls</code>: Given a path in string format. If it is a file path, return a list that only contains this file\'s name. If it is a directory path, return the list of file and directory names <b>in this directory</b>. Your output (file and directory names together) should in <b>lexicographic order</b>.</p>\n\n<p><code>mkdir</code>: Given a <b>directory path</b> that does not exist, you should make a new directory according to the path. If the middle directories in the path don\'t exist either, you should create them as well. This function has void return type. </p>\n\n<p><code>addContentToFile</code>: Given a <b>file path</b> and <b>file content</b> in string format. If the file doesn\'t exist, you need to create that file containing given content. If the file already exists, you need to <b>append</b> given content to original content. This function has void return type.</p>\n\n<p><code>readContentFromFile</code>: Given a <b>file path</b>, return its <b>content</b> in string format.</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> \n["FileSystem","ls","mkdir","addContentToFile","ls","readContentFromFile"]\n[[],["/"],["/a/b/c"],["/a/b/c/d","hello"],["/"],["/a/b/c/d"]]\n<b>Output:</b>\n[null,[],null,null,["a"],"hello"]\n<b>Explanation:</b>\n<img src="https://leetcode.com/static/images/problemset/filesystem.png" width="66%" alt="filesystem">\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You can assume all file or directory paths are absolute paths which begin with <code>/</code> and do not end with <code>/</code> except that the path is just <code>"/"</code>.</li>\n<li>You can assume that all operations will be passed valid parameters and users will not attempt to retrieve file content or list a directory or file that does not exist.</li>\n<li>You can assume that all directory names and file names only contain lower-case letters, and same names won\'t exist in the same directory.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Baidu'],
  },
  {
    id: '591',
    name: 'Tag Validator',
    acceptance: '30.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a string representing a code snippet, you need to implement a tag validator to parse the code and return whether it is valid. A code snippet is valid if all the following rules hold:</p><p>\n</p><ol>\n<li>The code must be wrapped in a <b>valid closed tag</b>. Otherwise, the code is invalid.</li>\n<li>A <b>closed tag</b> (not necessarily valid) has exactly the following format : <code>&lt;TAG_NAME&gt;TAG_CONTENT&lt;/TAG_NAME&gt;</code>. Among them, <code>&lt;TAG_NAME&gt;</code> is the start tag, and <code>&lt;/TAG_NAME&gt;</code> is the end tag. The TAG_NAME in start and end tags should be the same. A closed tag is <b>valid</b> if and only if the TAG_NAME and TAG_CONTENT are valid.</li>\n<li>A <b>valid</b> <code>TAG_NAME</code> only contain <b>upper-case letters</b>, and has length in range [1,9]. Otherwise, the <code>TAG_NAME</code> is <b>invalid</b>.</li>\n<li>A <b>valid</b> <code>TAG_CONTENT</code> may contain other <b>valid closed tags</b>, <b>cdata</b> and any characters (see note1) <b>EXCEPT</b> unmatched <code>&lt;</code>, unmatched start and end tag, and unmatched or closed tags with invalid TAG_NAME. Otherwise, the <code>TAG_CONTENT</code> is <b>invalid</b>.</li>\n<li>A start tag is unmatched if no end tag exists with the same TAG_NAME, and vice versa. However, you also need to consider the issue of unbalanced when tags are nested.</li>\n<li>A <code>&lt;</code> is unmatched if you cannot find a subsequent <code>&gt;</code>. And when you find a <code>&lt;</code> or <code>&lt;/</code>, all the subsequent characters until the next <code>&gt;</code> should be parsed as TAG_NAME  (not necessarily valid).</li>\n<li>The cdata has the following format : <code>&lt;![CDATA[CDATA_CONTENT]]&gt;</code>. The range of <code>CDATA_CONTENT</code> is defined as the characters between <code>&lt;![CDATA[</code> and the <b>first subsequent</b> <code>]]&gt;</code>. </li>\n<li><code>CDATA_CONTENT</code> may contain <b>any characters</b>. The function of cdata is to forbid the validator to parse <code>CDATA_CONTENT</code>, so even it has some characters that can be parsed as tag (no matter valid or invalid), you should treat it as <b>regular characters</b>. </li>\n</ol>\n\n<p><b>Valid Code Examples:</b><br>\n</p><pre><b>Input:</b> "&lt;DIV&gt;This is the first line &lt;![CDATA[&lt;div&gt;]]&gt;&lt;/DIV&gt;"<br>\n<b>Output:</b> True<br>\n<b>Explanation:</b> <br>\nThe code is wrapped in a closed tag : &lt;DIV&gt; and &lt;/DIV&gt;. <br>\nThe TAG_NAME is valid, the TAG_CONTENT consists of some characters and cdata. <br>\nAlthough CDATA_CONTENT has unmatched start tag with invalid TAG_NAME, it should be considered as plain text, not parsed as tag.<br>\nSo TAG_CONTENT is valid, and then the code is valid. Thus return true.<br>\n\n<b>Input:</b> "&lt;DIV&gt;&gt;&gt;  ![cdata[]] &lt;![CDATA[&lt;div&gt;]&gt;]]&gt;]]&gt;&gt;]&lt;/DIV&gt;"<br>\n<b>Output:</b> True<br>\n<b>Explanation:</b><br>\nWe first separate the code into : start_tag|tag_content|end_tag.<br>\nstart_tag -&gt; <b>"&lt;DIV&gt;"</b><br>\nend_tag -&gt; <b>"&lt;/DIV&gt;"</b><br>\ntag_content could also be separated into : text1|cdata|text2.<br>\ntext1 -&gt; <b>"&gt;&gt;  ![cdata[]] "</b><br>\ncdata -&gt; <b>"&lt;![CDATA[&lt;div&gt;]&gt;]]&gt;"</b>, where the CDATA_CONTENT is <b>"&lt;div&gt;]&gt;"</b><br>\ntext2 -&gt; <b>"]]&gt;&gt;]"</b><br>\n\nThe reason why start_tag is NOT <b>"&lt;DIV&gt;&gt;&gt;"</b> is because of the rule 6.\nThe reason why cdata is NOT <b>"&lt;![CDATA[&lt;div&gt;]&gt;]]&gt;]]&gt;"</b> is because of the rule 7.\n</pre>\n<p></p>\n\n<p><b>Invalid Code Examples:</b><br>\n</p><pre><b>Input:</b> "&lt;A&gt;  &lt;B&gt; &lt;/A&gt;   &lt;/B&gt;"\n<b>Output:</b> False\n<b>Explanation:</b> Unbalanced. If "&lt;A&gt;" is closed, then "&lt;B&gt;" must be unmatched, and vice versa.\n\n<b>Input:</b> "&lt;DIV&gt;  div tag is not closed  &lt;DIV&gt;"\n<b>Output:</b> False\n\n<b>Input:</b> "&lt;DIV&gt;  unmatched &lt;  &lt;/DIV&gt;"\n<b>Output:</b> False\n\n<b>Input:</b> "&lt;DIV&gt; closed tags with invalid tag name  &lt;b&gt;123&lt;/b&gt; &lt;/DIV&gt;"\n<b>Output:</b> False\n\n<b>Input:</b> "&lt;DIV&gt; unmatched tags with invalid tag name  &lt;/1234567890&gt; and &lt;CDATA[[]]&gt;  &lt;/DIV&gt;"\n<b>Output:</b> False\n\n<b>Input:</b> "&lt;DIV&gt;  unmatched start tag &lt;B&gt;  and unmatched end tag &lt;/C&gt;  &lt;/DIV&gt;"\n<b>Output:</b> False\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>For simplicity, you could assume the input code (including the <b>any characters</b> mentioned above) only contain <code>letters</code>, <code>digits</code>, <code>\'&lt;\'</code>,<code>\'&gt;\'</code>,<code>\'/\'</code>,<code>\'!\'</code>,<code>\'[\'</code>,<code>\']\'</code> and <code>\' \'</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '592',
    name: 'Fraction Addition and Subtraction',
    acceptance: '46.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a string representing an expression of fraction addition and subtraction, you need to return the calculation result in string format. The final result should be <a href="https://en.wikipedia.org/wiki/Irreducible_fraction">irreducible fraction</a>. If your final result is an integer, say <code>2</code>, you need to change it to the format of fraction that has denominator <code>1</code>. So in this case, <code>2</code> should be converted to <code>2/1</code>.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>"-1/2+1/2"\n<b>Output:</b> "0/1"\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>"-1/2+1/2+1/3"\n<b>Output:</b> "1/3"\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b>"1/3-1/2"\n<b>Output:</b> "-1/6"\n</pre>\n<p></p>\n\n<p><b>Example 4:</b><br>\n</p><pre><b>Input:</b>"5/3+1/3"\n<b>Output:</b> "2/1"\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The input string only contains <code>\'0\'</code> to <code>\'9\'</code>, <code>\'/\'</code>, <code>\'+\'</code> and <code>\'-\'</code>. So does the output.</li>\n<li>Each fraction (input and output) has format <code>±numerator/denominator</code>. If the first input fraction or the output is positive, then <code>\'+\'</code> will be omitted.</li>\n<li>The input only contains valid <b>irreducible fractions</b>, where the <b>numerator</b> and <b>denominator</b> of each fraction will always be in the range [1,10]. If the denominator is 1, it means this fraction is actually an integer in a fraction format defined above.</li> \n<li>The number of given fractions will be in the range [1,10].</li>\n<li>The numerator and denominator of the <b>final result</b> are guaranteed to be valid and in the range of 32-bit int.</li>\n</ol>\n<p></p>\n          ',
    tags: ['IXL'],
  },
  {
    id: '593',
    name: 'Valid Square',
    acceptance: '40.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given the coordinates of four points in 2D space, return whether the four points could construct a square.</p>\n\n<p>The coordinate (x,y) of a point is represented by an integer array with two integers.</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]\n<b>Output:</b> True\n</pre>\n<p></p>\n\n<p> Note: \n</p><ol>\n<li>All the input integers are in the range [-10000, 10000].</li>\n<li>A valid square has four equal sides with positive length and four equal angles (90-degree angles).</li>\n<li>Input points have no order.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Pure Storage'],
  },
  {
    id: '594',
    name: 'Longest Harmonious Subsequence',
    acceptance: '40.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>We define a harmonious array is an array where the difference between its maximum value and its minimum value is <b>exactly</b> 1.</p>\n\n<p>Now, given an integer array, you need to find the length of its longest harmonious subsequence among all its possible <a href="https://en.wikipedia.org/wiki/Subsequence">subsequences</a>.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,3,2,2,5,2,3,7]\n<b>Output:</b> 5\n<b>Explanation:</b> The longest harmonious subsequence is [3,2,2,2,3].\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe length of the input array will not exceed 20,000.\n</p>\n\n\n          ',
    tags: ['LiveRamp'],
  },
  {
    id: '595',
    name: 'Big Countries',
    acceptance: '71.8%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>There is a table <code>World</code> </p>\n<pre>+-----------------+------------+------------+--------------+---------------+\n| name            | continent  | area       | population   | gdp           |\n+-----------------+------------+------------+--------------+---------------+\n| Afghanistan     | Asia       | 652230     | 25500100     | 20343000      |\n| Albania         | Europe     | 28748      | 2831741      | 12960000      |\n| Algeria         | Africa     | 2381741    | 37100000     | 188681000     |\n| Andorra         | Europe     | 468        | 78115        | 3712000       |\n| Angola          | Africa     | 1246700    | 20609294     | 100990000     |\n+-----------------+------------+------------+--------------+---------------+\n</pre>\n<p>\nA country is big if it has an area of bigger than 3 million square km or a population of more than 25 million.\n</p><p>\nWrite a SQL solution to output big countries' name, population and area.\n</p>\n<p>\nFor example, according to the above table, we should output:\n</p><pre>+--------------+-------------+--------------+\n| name         | population  | area         |\n+--------------+-------------+--------------+\n| Afghanistan  | 25500100    | 652230       |\n| Algeria      | 37100000    | 2381741      |\n+--------------+-------------+--------------+\n</pre>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '596',
    name: 'Classes More Than 5 Students',
    acceptance: '27.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nThere is a table <code>courses</code> with columns: <b>student</b> and <b>class</b>\n</p><p>\nPlease list out all classes which have more than or equal to 5 students.\n</p>\n<p>\nFor example, the table:\n</p>\n<pre>+---------+------------+\n| student | class      |\n+---------+------------+\n| A       | Math       |\n| B       | English    |\n| C       | Math       |\n| D       | Biology    |\n| E       | Math       |\n| F       | Computer   |\n| G       | Math       |\n| H       | Math       |\n| I       | Math       |\n+---------+------------+\n</pre>\n<p>\nShould output:\n</p><pre>+---------+\n| class   |\n+---------+\n| Math    |\n+---------+\n</pre>\n<p></p>\n<p>\n<b>Note:</b><br>\nThe students should not be counted duplicate in each course.\n</p>\n          ',
    tags: [],
  },
  {
    id: '597',
    name: 'Friend Requests I: Overall Acceptance Rate ',
    acceptance: '37.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            In social network like Facebook or Twitter, people send friend requests and accept others’ requests as well. Now given two tables as below:<p></p>\n\nTable: <code>friend_request</code>\n<pre>| sender_id | send_to_id |request_date|\n|-----------|------------|------------|\n| 1         | 2          | 2016_06-01 |\n| 1         | 3          | 2016_06-01 |\n| 1         | 4          | 2016_06-01 |\n| 2         | 3          | 2016_06-02 |\n| 3         | 4          | 2016-06-09 |\n</pre><p></p>\n\nTable: <code>request_accepted</code>\n<pre>| requester_id | accepter_id |accept_date |\n|--------------|-------------|------------|\n| 1            | 2           | 2016_06-03 |\n| 1            | 3           | 2016-06-08 |\n| 2            | 3           | 2016-06-08 |\n| 3            | 4           | 2016-06-09 |\n| 3            | 4           | 2016-06-10 |\n</pre><p></p>\n\nWrite a query to find the overall acceptance rate of requests rounded to 2 decimals, which is the number of acceptance divide the number of requests.<p></p>\n\nFor the sample data above, your query should return the following result.<p></p>\n<pre>|accept_rate|\n|-----------|\n|       0.80|\n</pre><p></p>\n\n<b>Note:</b>\n<li>The accepted requests are not necessarily from the table <code>friend_request</code>. In this case, you just need to simply count the total accepted requests (no matter whether they are in the original requests), and divide it by the number of requests to get the acceptance rate.</li>\n<li>It is possible that a sender sends multiple requests to the same receiver, and a request could be accepted more than once. In this case, the ‘duplicated’ requests or acceptances are only counted once.</li>\n<li>If there is no requests at all, you should return 0.00 as the accept_rate. </li>\n<p></p>\n\n<b>Explanation:</b> There are 4 unique accepted requests, and there are 5 requests in total. So the rate is 0.80.<p></p>\n\n<b>Follow-up:</b><br>\n<li>Can you write a query to return the accept rate but for every month?</li>\n<li>How about the cumulative accept rate for every day?</li>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '598',
    name: 'Range Addition II',
    acceptance: '48.3%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given an m * n matrix <b>M</b> initialized with all <b>0</b>'s and several update operations.</p>\n<p>Operations are represented by a 2D array, and each operation is represented by an array with two <b>positive</b> integers <b>a</b> and <b>b</b>, which means <b>M[i][j]</b> should be <b>added by one</b> for all <b>0 &lt;= i &lt; a</b> and <b>0 &lt;= j &lt; b</b>. </p>\n<p>You need to count and return the number of maximum integers in the matrix after performing all the operations.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nm = 3, n = 3\noperations = [[2,2],[3,3]]\n<b>Output:</b> 4\n<b>Explanation:</b> \nInitially, M = \n[[0, 0, 0],\n [0, 0, 0],\n [0, 0, 0]]\n\nAfter performing [2,2], M = \n[[1, 1, 0],\n [1, 1, 0],\n [0, 0, 0]]\n\nAfter performing [3,3], M = \n[[2, 2, 1],\n [2, 2, 1],\n [1, 1, 1]]\n\nSo the maximum integer in M is 2, and there are four of it in M. So return 4.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The range of m and n is [1,40000].</li>\n<li>The range of a is [1,m], and the range of b is [1,n].</li>\n<li>The range of operations size won't exceed 10,000.</li>\n</ol>\n<p></p>\n          ",
    tags: ['IXL'],
  },
  {
    id: '599',
    name: 'Minimum Index Sum of Two Lists',
    acceptance: '46.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nSuppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings. \n</p>\n<p>\nYou need to help them find out their <b>common interest</b> with the <b>least list index sum</b>. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.\n</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\n["Shogun", "Tapioca Express", "Burger King", "KFC"]\n["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]\n<b>Output:</b> ["Shogun"]\n<b>Explanation:</b> The only restaurant they both like is "Shogun".\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>\n["Shogun", "Tapioca Express", "Burger King", "KFC"]\n["KFC", "Shogun", "Burger King"]\n<b>Output:</b> ["Shogun"]\n<b>Explanation:</b> The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of both lists will be in the range of [1, 1000].</li>\n<li>The length of strings in both lists will be in the range of [1, 30].</li>\n<li>The index is starting from 0 to the list length minus 1.</li>\n<li>No duplicates in both lists.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Yelp'],
  },
  {
    id: '600',
    name: 'Non-negative Integers without Consecutive Ones',
    acceptance: '31.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given a positive integer n, find the number of <b>non-negative</b> integers less than or equal to n, whose binary representations do NOT contain <b>consecutive ones</b>.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 5\n<b>Output:</b> 5\n<b>Explanation:</b> \nHere are the non-negative integers &lt;= 5 with their corresponding binary representations:\n0 : 0\n1 : 1\n2 : 10\n3 : 11\n4 : 100\n5 : 101\nAmong them, only integer 3 disobeys the rule (two consecutive ones) and the other 5 satisfy the rule. \n</pre>\n<p></p>\n\n<p><b>Note:</b>\n1 &lt;= n &lt;= 10<sup>9</sup>\n</p>\n\n          ',
    tags: ['Pocket Gems'],
  },
  {
    id: '601',
    name: 'Human Traffic of Stadium',
    acceptance: '34.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>X city built a new stadium, each day many people visit it and the stats are saved as these columns: <b>id</b>, <b>date</b>, <b>people</b>\n</p><p>\nPlease write a query to display the records which have 3 or more consecutive rows and the  amount of people more than 100(inclusive).\n</p>\n \nFor example, the table <code>stadium</code>:\n<pre>+------+------------+-----------+\n| id   | date       | people    |\n+------+------------+-----------+\n| 1    | 2017-01-01 | 10        |\n| 2    | 2017-01-02 | 109       |\n| 3    | 2017-01-03 | 150       |\n| 4    | 2017-01-04 | 99        |\n| 5    | 2017-01-05 | 145       |\n| 6    | 2017-01-06 | 1455      |\n| 7    | 2017-01-07 | 199       |\n| 8    | 2017-01-08 | 188       |\n+------+------------+-----------+\n</pre>\n<p>\nFor the sample data above, the output is:\n</p>\n<pre>+------+------------+-----------+\n| id   | date       | people    |\n+------+------------+-----------+\n| 5    | 2017-01-05 | 145       |\n| 6    | 2017-01-06 | 1455      |\n| 7    | 2017-01-07 | 199       |\n| 8    | 2017-01-08 | 188       |\n+------+------------+-----------+\n</pre>\n<p>\n<b>Note:</b><br>\nEach day only have one row record, and the dates are increasing with id increasing.\n</p> \n          ',
    tags: [],
  },
  {
    id: '602',
    name: 'Friend Requests II: Who Has the Most Friends ',
    acceptance: '42.1%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            In social network like Facebook or Twitter, people send friend requests and accept others' requests as well.<p></p>\nTable <code>request_accepted</code> holds the data of friend acceptance, while <b>requester_id</b> and <b>accepter_id</b> both are the id of a person.\n<p></p>\n<pre>| requester_id | accepter_id | accept_date|\n|--------------|-------------|------------|\n| 1            | 2           | 2016_06-03 |\n| 1            | 3           | 2016-06-08 |\n| 2            | 3           | 2016-06-08 |\n| 3            | 4           | 2016-06-09 |\n</pre>\n \nWrite a query to find the the people who has most friends and the most friends number. For the sample data above, the result is:\n<pre>| id | num |\n|----|-----|\n| 3  | 3   |\n</pre>\n \n<b>Note:</b>\n<li>It is guaranteed there is only 1 people having the most friends.</li>\n<li>The friend request could only been accepted once, which mean there is no multiple records with the same <b>requester_id</b> and <b>accepter_id</b> value.\n<p></p>\n \n<b>Explanation:</b><br>\nThe person with id '3' is a friend of people '1', '2' and '4', so he has 3 friends in total, which is the most number than any others.<p></p>\n \n<b>Follow-up:</b><br> In the real world, multiple people could have the same most number of friends, can you find all these people in this case?\n\n          </li>",
    tags: ['Facebook'],
  },
  {
    id: '603',
    name: 'Consecutive Available Seats ',
    acceptance: '54.8%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            Several friends at a cinema ticket office would like to reserve consecutive available seats.<br>\nCan you help to query all the consecutive available seats order by the seat_id using the following <code>cinema</code> table?\n\n<pre>| seat_id | free |\n|---------|------|\n| 1       | 1    |\n| 2       | 0    |\n| 3       | 1    |\n| 4       | 1    |\n| 5       | 1    |\n</pre><p></p>\n\nYour query should return the following result for the sample case above.<p></p>\n<pre>| seat_id |\n|---------|\n| 3       |\n| 4       |\n| 5       |\n</pre>\n\n<b>Note</b>:\n<li>The seat_id is an auto increment int, and free is bool ('1' means free, and '0' means occupied.).</li>\n<li>Consecutive available seats are more than 2(inclusive) seats consecutively available.</li>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '604',
    name: 'Design Compressed String Iterator ',
    acceptance: '32.6%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nDesign and implement a data structure for a compressed string iterator. It should support the following operations: <code>next</code> and <code>hasNext</code>.\n</p>\n\n<p>\nThe given compressed string will be in the form of each letter followed by a positive integer representing the number of this letter existing in the original uncompressed string.\n</p>\n\n<p>\n<code>next()</code> - if the original string still has uncompressed characters, return the next letter; Otherwise return a white space.<br>\n<code>hasNext()</code> - Judge whether there is any letter needs to be uncompressed.\n</p>\n\n<p>\n<b>Note:</b><br>\nPlease remember to <b>RESET</b> your class variables declared in StringIterator, as static/class variables are <b>persisted across multiple test cases</b>. Please see <a href=\"https://leetcode.com/faq/#different-output\">here</a> for more details.\n</p>\n\n\n<p><b>Example:</b>\n</p><pre>StringIterator iterator = new StringIterator(\"L1e2t1C1o1d1e1\");\n\niterator.next(); // return 'L'\niterator.next(); // return 'e'\niterator.next(); // return 'e'\niterator.next(); // return 't'\niterator.next(); // return 'C'\niterator.next(); // return 'o'\niterator.next(); // return 'd'\niterator.hasNext(); // return true\niterator.next(); // return 'e'\niterator.hasNext(); // return false\niterator.next(); // return ' '\n</pre>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '605',
    name: 'Can Place Flowers',
    acceptance: '30.2%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Suppose you have a long flowerbed in which some of the plots are planted and some are not. However, flowers cannot be planted in adjacent plots - they would compete for water and both would die.</p>\n\n<p>Given a flowerbed (represented as an array containing 0 and 1, where 0 means empty and 1 means not empty), and a number <b>n</b>, return if <b>n</b> new flowers can be planted in it without violating the no-adjacent-flowers rule.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> flowerbed = [1,0,0,0,1], n = 1\n<b>Output:</b> True\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> flowerbed = [1,0,0,0,1], n = 2\n<b>Output:</b> False\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The input array won't violate no-adjacent-flowers rule.</li>\n<li>The input array size is in the range of [1, 20000].</li>\n<li><b>n</b> is a non-negative integer which won't exceed the input array size.</li>\n</ol>\n<p></p>\n          ",
    tags: ['LinkedIn'],
  },
  {
    id: '606',
    name: 'Construct String from Binary Tree',
    acceptance: '49.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>You need to construct a string consists of parenthesis and integers from a binary tree with the preorder traversing way.</p>\n\n<p>The null node needs to be represented by empty parenthesis pair "()". And you need to omit all the empty parenthesis pairs that don\'t affect the one-to-one mapping relationship between the string and the original binary tree.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> Binary tree: [1,2,3,4]\n       1\n     /   \\\n    2     3\n   /    \n  4     \n\n<b>Output:</b> "1(2(4))(3)"\n<br><b>Explanation:</b> Originallay it needs to be "1(2(4)())(3()())", <br>but you need to omit all the unnecessary empty parenthesis pairs. <br>And it will be "1(2(4))(3)".\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> Binary tree: [1,2,3,null,4]\n       1\n     /   \\\n    2     3\n     \\  \n      4 \n\n<b>Output:</b> "1(2()(4))(3)"\n<br><b>Explanation:</b> Almost the same as the first example, <br>except we can\'t omit the first parenthesis pair to break the one-to-one mapping relationship between the input and the output.\n</pre>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '607',
    name: 'Sales Person ',
    acceptance: '49.7%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p><b>Description</b></p>\n<p>\nGiven three tables: <code>salesperson</code>, <code>company</code>, <code>orders</code>.<br>\nOutput all the <b>names</b> in the table <code>salesperson</code>, who didn’t have sales to company 'RED'.\n</p><p>\n<b>Example</b><br>\n<b>Input</b>\n</p><p>\nTable: <code>salesperson</code>\n</p>\n<pre>+----------+------+--------+-----------------+-----------+\n| sales_id | name | salary | commission_rate | hire_date |\n+----------+------+--------+-----------------+-----------+\n|   1      | John | 100000 |     6           | 4/1/2006  |\n|   2      | Amy  | 120000 |     5           | 5/1/2010  |\n|   3      | Mark | 65000  |     12          | 12/25/2008|\n|   4      | Pam  | 25000  |     25          | 1/1/2005  |\n|   5      | Alex | 50000  |     10          | 2/3/2007  |\n+----------+------+--------+-----------------+-----------+\n</pre>\nThe table <code>salesperson</code> holds the salesperson information. Every salesperson has a <b>sales_id</b> and a <b>name</b>.<br>\n<p>\nTable: <code>company</code>\n</p>\n<pre>+---------+--------+------------+\n| com_id  |  name  |    city    |\n+---------+--------+------------+\n|   1     |  RED   |   Boston   |\n|   2     | ORANGE |   New York |\n|   3     | YELLOW |   Boston   |\n|   4     | GREEN  |   Austin   |\n+---------+--------+------------+\n</pre>\nThe table <code>company</code> holds the company information. Every company has a <b>com_id</b> and a <b>name</b>.<br>\n<p>\nTable: <code>orders</code>\n</p>\n<pre>+----------+----------+---------+----------+--------+\n| order_id |  date    | com_id  | sales_id | amount |\n+----------+----------+---------+----------+--------+\n| 1        | 1/1/2014 |    3    |    4     | 100000 |\n| 2        | 2/1/2014 |    4    |    5     | 5000   |\n| 3        | 3/1/2014 |    1    |    1     | 50000  |\n| 4        | 4/1/2014 |    1    |    4     | 25000  |\n+----------+----------+---------+----------+--------+\n</pre>\nThe table <code>orders</code> holds the sales record information, salesperson and customer  company are represented by <b>sales_id</b> and <b>com_id</b>.<br>\n\n<p>\n<b>output</b> \n</p>\n<pre>+------+\n| name | \n+------+\n| Amy  | \n| Mark | \n| Alex |\n+------+\n</pre>\n<p>\n<b>Explanation</b>\n</p><p>\nAccording to order '3' and '4' in table <code>orders</code>, it is easy to tell only salesperson 'John' and 'Alex' have sales to company 'RED',<br>so we need to output all the other <b>names</b> in table <code>salesperson</code>.\n</p>\n          ",
    tags: [],
  },
  {
    id: '608',
    name: 'Tree Node ',
    acceptance: '54.3%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a table <code>tree</code>, <b>id</b> is identifier of the tree node and <b>p_id</b> is its parent node's <b>id</b>.\n</p>\n \n<pre>+----+------+\n| id | p_id |\n+----+------+\n| 1  | null |\n| 2  | 1    |\n| 3  | 1    |\n| 4  | 2    |\n| 5  | 2    |\n+----+------+\n</pre>\n \nEach node in the tree can be one of three types:<br>\n<li>Leaf: if the node is a leaf node.</li>\n<li>Root: if the node is the root of the tree.</li>\n<li>Inner: If the node is neither a leaf node nor a root node.</li><p></p>\n \nWrite a query to print the node id and the type of the node. Sort your output by the node id. The result for the above sample is:<p></p>\n \n<pre>+----+------+\n| id | Type |\n+----+------+\n| 1  | Root |\n| 2  | Inner|\n| 3  | Leaf |\n| 4  | Leaf |\n| 5  | Leaf |\n+----+------+\n</pre>\n<p></p>\n \n<p>\n<b>Explanation</b>\n</p>\n<p>\n</p><li>Node '1' is root node, because its parent node is NULL and it has child node '2' and '3'.</li>\n<li>Node '2' is inner node, because it has parent node '1' and child node '4' and '5'.</li>\n<li>Node '3', '4' and '5' is Leaf node, because they have parent node and they don't have child node.</li>\n<br>\nAnd here is the image of the sample tree as below:\n<p></p>\n<pre>\t\t\t  1\n\t\t\t/   \\\n                      2       3\n                    /   \\\n                  4       5\n</pre>\n\n<p>\n<b>Note</b>\n</p>\n<p>\nIf there is only one node on the tree, you only need to output its root attributes.\n</p>\n\n          ",
    tags: ['Twitter'],
  },
  {
    id: '609',
    name: 'Find Duplicate File in System',
    acceptance: '52.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a list of directory info including directory path, and all the files with contents in this directory, you need to find out all the groups of duplicate files in the file system in terms of their paths.</p>\n\n<p>A group of duplicate files consists of at least <b>two</b> files that have exactly the same content.</p>\n\n<p>A single directory info string in the <b>input</b> list has the following format: </p>\n<p><code>"root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ... fn.txt(fn_content)"</code><br></p>\n<p>It means there are <b>n</b> files (<code>f1.txt</code>, <code>f2.txt</code> ... <code>fn.txt</code> with content <code>f1_content</code>, <code>f2_content</code> ... <code>fn_content</code>, respectively) in directory <code>root/d1/d2/.../dm</code>. Note that n &gt;= 1 and m &gt;= 0. If m = 0, it means the directory is just the root directory.</p>\n\n<p>The <b>output</b> is a list of group of duplicate file paths. For each group, it contains all the file paths of the files that have the same content. A file path is a string that has the following format: </p>\n<p><code>"directory_path/file_name.txt"</code></p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\n["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d 4.txt(efgh)", "root 4.txt(efgh)"]\n<b>Output:</b>  \n[["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>No order is required for the final output.</li>\n<li>You may assume the directory name, file name and file content only has letters and digits, and the length of file content is in the range of [1,50].</li>\n<li>The number of files given is in the range of [1,20000].</li>\n<li>You may assume no files or directories share the same name in the same directory.</li>\n<li>You may assume each given directory info represents a unique directory. Directory path and file info are separated by a single blank space.</li>\n</ol>\n<p></p>\n\n\n<b>Follow-up beyond contest:</b> \n<ol>\n<li> Imagine you are given a real file system, how will you search files? DFS or BFS?</li>\n<li> If the file content is very large (GB level), how will you modify your solution?</li>\n<li> If you can only read the file by 1kb each time, how will you modify your solution?</li>\n<li> What is the time complexity of your modified solution? What is the most time-consuming part and memory consuming part of it? How to optimize?</li>\n<li> How to make sure the duplicated files you find are not false positive?</li>\n</ol>\n          ',
    tags: ['Dropbox'],
  },
  {
    id: '610',
    name: 'Triangle Judgement ',
    acceptance: '58.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            A pupil Tim gets homework to identify whether three line segments could possibly form a triangle.<p></p> However, this assignment is very heavy because there are hundreds of records to calculate.<p></p>\n \nCould you help Tim by writing a query to judge whether these three sides can form a triangle, assuming table <code>triangle</code> holds the length of the three sides x, y and z.<p></p>\n \n<pre>| x  | y  | z  |\n|----|----|----|\n| 13 | 15 | 30 |\n| 10 | 20 | 15 |\n</pre>\n \nFor the sample data above, your query should return the follow result:\n<pre>| x  | y  | z  | triangle |\n|----|----|----|----------|\n| 13 | 15 | 30 | No       |\n| 10 | 20 | 15 | Yes      |\n</pre>\n          ',
    tags: [],
  },
  {
    id: '611',
    name: 'Valid Triangle Number',
    acceptance: '42.2%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            Given an array consists of non-negative integers,  your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [2,2,3,4]\n<b>Output:</b> 3\n<b>Explanation:</b>\nValid combinations are: \n2,3,4 (using the first 2)\n2,3,4 (using the second 2)\n2,2,3\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the given array won't exceed 1000.</li>\n<li>The integers in the given array are in the range of [0, 1000].</li>\n</ol>\n<p></p>\n\n          ",
    tags: ['Expedia'],
  },
  {
    id: '612',
    name: 'Shortest Distance in a Plane ',
    acceptance: '52.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            Table <code>point_2d</code> holds the coordinates (x,y) of some unique points (more than two) in a plane.<p></p>\nWrite a query to find the shortest distance between these points rounded to  2 decimals.<p></p>\n \n<pre>| x  | y  |\n|----|----|\n| -1 | -1 |\n| 0  | 0  |\n| -1 | -2 |\n</pre><p></p>\n \nThe shortest distance is 1.00 from point (-1,-1) to (-1,2). So the output should be:<p></p>\n<pre>| shortest |\n|----------|\n| 1.00     |\n</pre><p></p>\n \n<b>Note:</b> The longest distance among all the points are less than 10000.<p></p>\n          ',
    tags: [],
  },
  {
    id: '613',
    name: 'Shortest Distance in a Line ',
    acceptance: '69.5%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            Table <code>point</code> holds the x coordinate of some points on x-axis in a plane, which are all integers.<p></p>\nWrite a query to find the shortest distance between two points in these points.<p></p>\n \n<pre>| x   |\n|-----|\n| -1  |\n| 0   |\n| 2   |\n</pre><p></p>\n \nThe shortest distance is '1' obviously, which is from point '-1' to '0'. So the output is as below:<p></p>\n<pre>| shortest|\n|---------|\n| 1       |\n</pre><p></p>\n \n<b>Note:</b> Every point is unique, which means there is no duplicates in table <code>point</code>.<p></p>\n \n<b>Follow-up:</b> What if all these points have an id and are arranged from the left most to the right most of x axis?<p></p>\n          ",
    tags: [],
  },
  {
    id: '614',
    name: 'Second Degree Follower ',
    acceptance: '23.4%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nIn facebook, there is a <code>follow</code> table with two columns: <b>followee</b>, <b>follower</b>.\n</p><p>\nPlease write a sql query to get the amount of each follower’s follower if he/she has one.\n</p>\n<p>\nFor example:\n</p><pre>+-------------+------------+\n| followee    | follower   |\n+-------------+------------+\n|     A       |     B      |\n|     B       |     C      |\n|     B       |     D      |\n|     D       |     E      |\n+-------------+------------+\n</pre>\nshould output:\n<pre>+-------------+------------+\n| follower    | num        |\n+-------------+------------+\n|     B       |  2         |\n|     D       |  1         |\n+-------------+------------+\n</pre>\n<b>Explaination:</b><br>\nBoth B and D exist  in the follower list, when as a followee, B's follower is C and D, and D's follower is E.  A does not exist in follower list.\n<p></p>\n<p></p>\n<b>Note:</b><br>\nFollowee would not follow himself/herself in all cases.<br>\nPlease display the result in follower's alphabet order.\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '615',
    name: 'Average Salary: Departments VS Company ',
    acceptance: '31.8%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            Given two tables as below, write a query to display the comparison result (higher/lower/same) of the average salary of employees in a department to the company's average salary.<p></p>\n\nTable: <code>salary</code>\n<pre>| id | employee_id | amount | pay_date   |\n|----|-------------|--------|------------|\n| 1  | 1           | 9000   | 2017-03-31 |\n| 2  | 2           | 6000   | 2017-03-31 |\n| 3  | 3           | 10000  | 2017-03-31 |\n| 4  | 1           | 7000   | 2017-02-28 |\n| 5  | 2           | 6000   | 2017-02-28 |\n| 6  | 3           | 8000   | 2017-02-28 |\n</pre><p></p>\n\nThe <b>employee_id</b> column refers to the <b>employee_id</b> in the following table <code>employee</code>.<p></p>\n<pre>| employee_id | department_id |\n|-------------|---------------|\n| 1           | 1             |\n| 2           | 2             |\n| 3           | 2             |\n</pre><p></p>\n\nSo for the sample data above, the result is:<p></p>\n<pre>| pay_month | department_id | comparison  |\n|-----------|---------------|-------------|\n| 2017-03   | 1             | higher      |\n| 2017-03   | 2             | lower       |\n| 2017-02   | 1             | same        |\n| 2017-02   | 2             | same        |\n</pre><p></p>\n\n<b>Explanation</b><p></p>\nIn March, the company's average salary is (9000+6000+10000)/3 = 8333.33...<p></p>\nThe average salary for department '1' is 9000, which is the salary of <b>employee_id</b> '1' since there is only one employee in this department. So the comparison result is 'higher' since 9000 &gt; 8333.33 obviously.<p></p>\nThe average salary of department '2' is (6000 + 10000)/2 = 8000, which is the average of <b>employee_id</b> '2' and '3'. So the comparison result is 'lower' since 8000 &lt; 8333.33.<p></p>\nWith he same formula for the average salary comparison in February, the result is 'same' since both the department '1' and '2' have the same average salary with the company, which is 7000.<p></p>\n          ",
    tags: [],
  },
  {
    id: '616',
    name: 'Add Bold Tag in String ',
    acceptance: '39.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            Given a string <b>s</b> and a list of strings <b>dict</b>, you need to add a closed pair of bold tag <code>&lt;b&gt;</code> and <code>&lt;/b&gt;</code> to wrap the substrings in s that exist in dict. If two such substrings overlap, you need to wrap them together by only one pair of closed bold tag. Also, if two substrings wrapped by bold tags are consecutive, you need to combine them. \n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \ns = "abcxyz123"\ndict = ["abc","123"]\n<b>Output:</b>\n"&lt;b&gt;abc&lt;/b&gt;xyz&lt;b&gt;123&lt;/b&gt;"\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \ns = "aaabbcc"\ndict = ["aaa","aab","bc"]\n<b>Output:</b>\n"&lt;b&gt;aaabbc&lt;/b&gt;c"\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The given dict won\'t contain duplicates, and its length won\'t exceed 100.</li>\n<li>All the strings in input have length in range [1, 1000]. </li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '617',
    name: 'Merge Two Binary Trees',
    acceptance: '67.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two binary trees and imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not. \n</p>\n<p>\nYou need to merge them into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as the new value of the merged node. Otherwise, the NOT null node will be used as the node of new tree.\n</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \n\tTree 1                     Tree 2                  \n          1                         2                             \n         / \\                       / \\                            \n        3   2                     1   3                        \n       /                           \\   \\                      \n      5                             4   7                  \n<b>Output:</b> \nMerged tree:\n\t     3\n\t    / \\\n\t   4   5\n\t  / \\   \\ \n\t 5   4   7\n</pre>\n<p></p>\n\n\n<p><b>Note:</b>\nThe merging process must start from the root nodes of both trees.\n</p>\n\n          ',
    tags: ['Amazon'],
  },
  {
    id: '618',
    name: 'Students Report By Geography ',
    acceptance: '43.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            A U.S graduate school has students from Asia, Europe and America. The students\' location information are stored in table <code>student</code> as below.<p></p>\n \n<pre>| name   | continent |\n|--------|-----------|\n| Jack   | America   |\n| Pascal | Europe    |\n| Xi     | Asia      |\n| Jane   | America   |\n</pre><p></p>\n \n<a href="https://en.wikipedia.org/wiki/Pivot_table"> Pivot</a> the continent column in this table so that each name is sorted alphabetically and displayed underneath its corresponding continent. The output headers should be America, Asia and Europe respectively. It is guaranteed that the student number from America is no less than either Asia or Europe.<p></p>\n \nFor the sample input, the output is:<p></p>\n<pre>| America | Asia | Europe |\n|---------|------|--------|\n| Jack    | Xi   | Pascal |\n| Jane    |      |        |\n</pre><p></p>\n \n<b>Follow-up:</b> If it is unknown which continent has the most students, can you write a query to generate the student report?<p></p>\n          ',
    tags: [],
  },
  {
    id: '619',
    name: 'Biggest Single Number ',
    acceptance: '35.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nTable <code>number</code> contains many numbers in column <b>num</b> including duplicated ones.<br>\nCan you write a SQL query to find the biggest number, which only appears once.<br>\n</p>\n<pre>+---+\n|num|\n+---+\n| 8 |\n| 8 |\n| 3 |\n| 3 |\n| 1 |\n| 4 |\n| 5 |\n| 6 | \n</pre>\nFor the sample data above, your query should return the following result:\n<pre>+---+\n|num|\n+---+\n| 6 |\n</pre>\n<b>Note:</b><br> If there is no such number, just output <b>null</b>.<p></p>\n          ',
    tags: [],
  },
  {
    id: '620',
    name: 'Not Boring Movies',
    acceptance: '59.4%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            X city opened a new cinema, many people would like to go to this cinema.\nThe cinema also gives out a poster indicating the movies’ ratings and descriptions. <p>\n \nPlease write a SQL query to output movies with an odd numbered ID and a description that is not 'boring'. Order the result by rating.\n</p><p>\n</p><p>\nFor example, table <code>cinema</code>:\n</p><pre>+---------+-----------+--------------+-----------+\n|   id    | movie     |  description |  rating   |\n+---------+-----------+--------------+-----------+\n|   1     | War       |   great 3D   |   8.9     |\n|   2     | Science   |   fiction    |   8.5     |\n|   3     | irish     |   boring     |   6.2     |\n|   4     | Ice song  |   Fantacy    |   8.6     |\n|   5     | House card|   Interesting|   9.1     |\n+---------+-----------+--------------+-----------+\n</pre>\nFor the example above, the output should be:\n<pre>+---------+-----------+--------------+-----------+\n|   id    | movie     |  description |  rating   |\n+---------+-----------+--------------+-----------+\n|   5     | House card|   Interesting|   9.1     |\n|   1     | War       |   great 3D   |   8.9     |\n+---------+-----------+--------------+-----------+\n</pre>\n<p></p>\n          ",
    tags: [],
  },
  {
    id: '621',
    name: 'Task Scheduler',
    acceptance: '42.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a char array representing tasks CPU need to do. It contains capital letters A to Z where different letters represent different tasks.Tasks could be done without original order. Each task could be done in one interval. For each interval, CPU could finish one task or just be idle.</p>\n\n<p>However, there is a non-negative cooling interval <b>n</b> that means between two <b>same tasks</b>, there must be at least n intervals that CPU are doing different tasks or just be idle. </p>\n\n<p>You need to return the <b>least</b> number of intervals the CPU will take to finish all the given tasks.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> tasks = ["A","A","A","B","B","B"], n = 2\n<b>Output:</b> 8\n<b>Explanation:</b> A -&gt; B -&gt; idle -&gt; A -&gt; B -&gt; idle -&gt; A -&gt; B.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The number of tasks is in the range [1, 10000].</li>\n<li>The integer n is in the range [0, 100].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '623',
    name: 'Add One Row to Tree',
    acceptance: '46.7%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given the root of a binary tree, then value <code>v</code> and depth <code>d</code>, you need to add a row of nodes with value <code>v</code> at the given depth <code>d</code>. The root node is at depth 1. </p>\n\n<p>The adding rule is: given a positive integer depth <code>d</code>, for each NOT null tree nodes <code>N</code> in depth <code>d-1</code>, create two tree nodes with value <code>v</code> as <code>N's</code> left subtree root and right subtree root. And <code>N's</code> <b>original left subtree</b> should be the left subtree of the new left subtree root, its <b>original right subtree</b> should be the right subtree of the new right subtree root. If depth <code>d</code> is 1 that means there is no depth d-1 at all, then create a tree node with value <b>v</b> as the new root of the whole original tree, and the original tree is the new root's left subtree.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nA binary tree as following:\n       4\n     /   \\\n    2     6\n   / \\   / \n  3   1 5   \n\n<b>v = 1</b>\n\n<b>d = 2</b>\n\n<b>Output:</b> \n       4\n      / \\\n     1   1\n    /     \\\n   2       6\n  / \\     / \n 3   1   5   \n\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nA binary tree as following:\n      4\n     /   \n    2    \n   / \\   \n  3   1    \n\n<b>v = 1</b>\n\n<b>d = 3</b>\n\n<b>Output:</b> \n      4\n     /   \n    2\n   / \\    \n  1   1\n /     \\  \n3       1\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The given d is in range [1, maximum depth of the given tree + 1].</li>\n<li>The given binary tree has at least one tree node.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Gilt Groupe'],
  },
  {
    id: '624',
    name: 'Maximum Distance in Arrays ',
    acceptance: '34.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven <code>m</code> arrays, and each array is sorted in ascending order. Now you can pick up two integers from two different arrays (each array picks one) and calculate the distance. We define the distance between two integers <code>a</code> and <code>b</code> to be their absolute difference <code>|a-b|</code>. Your task is to find the maximum distance.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \n[[1,2,3],\n [4,5],\n [1,2,3]]\n<b>Output:</b> 4\n<b>Explanation:</b> \nOne way to reach the maximum distance 4 is to pick 1 in the first or third array and pick 5 in the second array.\n</pre>\n<p></p>\n\t\n<p><b>Note:</b><br>\n</p><ol>\n<li>Each given array will have at least 1 number. There will be at least two non-empty arrays.</li>\n<li>The total number of the integers in <b>all</b> the <code>m</code> arrays will be in the range of [2, 10000].</li>\n<li>The integers in the <code>m</code> arrays will be in the range of [-10000, 10000].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Yahoo'],
  },
  {
    id: '625',
    name: 'Minimum Factorization ',
    acceptance: '30.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a positive integer <code>a</code>, find the smallest positive integer <code>b</code> whose multiplication of each digit equals to <code>a</code>. </p>\n\n<p>\nIf there is no answer or the answer is not fit in 32-bit signed integer, then return 0.</p>\n\n<p>\n<b>Example 1</b><br>\nInput:\n</p><pre>48 </pre>\nOutput:\n<pre>68</pre>\n<p></p>\n\n<p>\n<b>Example 2</b><br>\nInput: \n</p><pre>15</pre>\n\nOutput:\n<pre>35</pre>\n<p></p>\n          ',
    tags: ['Tencent'],
  },
  {
    id: '626',
    name: 'Exchange Seats',
    acceptance: '47.7%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Mary is a teacher in a middle school and she has a table <code>seat</code> storing students' names and their corresponding seat ids.</p>\nThe column <b>id</b> is continuous increment.<p></p>\nMary wants to change seats for the adjacent students.<p></p>\nCan you write a SQL query to output the result for Mary?<p></p>\n<pre>+---------+---------+\n|    id   | student |\n+---------+---------+\n|    1    | Abbot   |\n|    2    | Doris   |\n|    3    | Emerson |\n|    4    | Green   |\n|    5    | Jeames  |\n+---------+---------+\n</pre>\nFor the sample input, the output is:<p></p>\n<pre>+---------+---------+\n|    id   | student |\n+---------+---------+\n|    1    | Doris   |\n|    2    | Abbot   |\n|    3    | Green   |\n|    4    | Emerson |\n|    5    | Jeames  |\n+---------+---------+\n</pre>\n<p>\n<b>Note:</b><br>\nIf the number of students is odd, there is no need to change the last one's seat.\n</p>\n          ",
    tags: [],
  },
  {
    id: '627',
    name: 'Swap Salary',
    acceptance: '66.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            Given a table <code>salary</code>, such as the one below, that has m=male and  f=female values. Swap all f and m values (i.e., change all f values to m and vice versa) with a single update query and no intermediate temp table.<p></p>\n \nFor example:<p></p>\n \n<pre>| id | name | sex | salary |\n|----|------|-----|--------|\n| 1  | A    | m   | 2500   |\n| 2  | B    | f   | 1500   |\n| 3  | C    | m   | 5500   |\n| 4  | D    | f   | 500    |\n</pre>\nAfter running your query, the above salary table should have the following rows:\n<pre>| id | name | sex | salary |\n|----|------|-----|--------|\n| 1  | A    | f   | 2500   |\n| 2  | B    | m   | 1500   |\n| 3  | C    | f   | 5500   |\n| 4  | D    | m   | 500    |\n</pre>\n\n          ',
    tags: [],
  },
  {
    id: '628',
    name: 'Maximum Product of Three Numbers',
    acceptance: '45.1%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>Given an integer array, find three numbers whose product is maximum and output the maximum product.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,2,3]\n<b>Output:</b> 6\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1,2,3,4]\n<b>Output:</b> 24\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the given array will be in range [3,10<sup>4</sup>] and all elements are in the range [-1000, 1000].</li>\n<li>Multiplication of any three numbers in the input won't exceed the range of 32-bit signed integer.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Intuit'],
  },
  {
    id: '629',
    name: 'K Inverse Pairs Array',
    acceptance: '26.8%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nGiven two integers <code>n</code> and <code>k</code>, find how many different arrays consist of numbers from <code>1</code> to <code>n</code> such that there are exactly <code>k</code> inverse pairs. \n</p>\n<p>\nWe define an inverse pair as following:\nFor <code>i<sub>th</sub></code> and <code>j<sub>th</sub></code> element in the array, if <code>i</code> &lt; <code>j</code> and <code>a[i]</code> &gt; <code>a[j]</code> then it's an inverse pair; Otherwise, it's not.\n</p>\n\n<p>\nSince the answer may be very large, the answer should be modulo 10<sup>9</sup> + 7.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> n = 3, k = 0\n<b>Output:</b> 1\n<b>Explanation:</b> \nOnly the array [1,2,3] which consists of numbers from 1 to 3 has exactly 0 inverse pair.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> n = 3, k = 1\n<b>Output:</b> 2\n<b>Explanation:</b> \nThe array [1,3,2] and [2,1,3] have exactly 1 inverse pair.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The integer <code>n</code> is in the range [1, 1000] and <code>k</code> is in the range [0, 1000].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Works Applications'],
  },
  {
    id: '630',
    name: 'Course Schedule III',
    acceptance: '28.6%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nThere are <code>n</code> different online courses numbered from <code>1</code> to <code>n</code>. Each course has some duration(course length)  <code>t</code> and closed on <code>d<sub>th</sub></code> day. A course should be taken <b>continuously</b> for <code>t</code> days and must be finished before or on the <code>d<sub>th</sub></code> day. You will start at the <code>1<sub>st</sub></code> day.\n</p>\n\n<p>\nGiven <code>n</code> online courses represented by pairs <code>(t,d)</code>, your task is to find the maximal number of courses that can be taken.\n</p>\n\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> [[100, 200], [200, 1300], [1000, 1250], [2000, 3200]]\n<b>Output:</b> 3\n<b>Explanation:</b> \nThere're totally 4 courses, but you can take 3 courses at most:\nFirst, take the 1st course, it costs 100 days so you will finish it on the 100th day, and ready to take the next course on the 101st day.\nSecond, take the 3rd course, it costs 1000 days so you will finish it on the 1100th day, and ready to take the next course on the 1101st day. \nThird, take the 2nd course, it costs 200 days so you will finish it on the 1300th day. \nThe 4th course cannot be taken now, since you will finish it on the 3300th day, which exceeds the closed date.\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The integer 1 &lt;= d, t, n &lt;= 10,000. </li>\n<li>You can't take two courses simultaneously.</li>\n</ol>\n<p></p>\n          ",
    tags: ['WAP'],
  },
  {
    id: '631',
    name: 'Design Excel Sum Formula ',
    acceptance: '27.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Your task is to design the basic function of Excel and implement the function of sum formula.  Specifically, you need to implement the following functions:</p>\n\n\n\n<p><code>Excel(int H, char W):</code> This is the constructor. The inputs represents the height and width of the Excel form. <b>H</b> is a positive integer, range from 1 to 26. It represents the height. <b>W</b> is a character range from \'A\' to \'Z\'. It represents that the width is the number of characters from \'A\' to <b>W</b>. The Excel form content is represented by a height * width 2D integer array <code>C</code>, it should be initialized to zero. You should assume that the first row of <code>C</code> starts from 1, and the first column of <code>C</code> starts from \'A\'.</p>\n\n<br>\n\n<p><code>void Set(int row, char column, int val):</code> Change the value at <code>C(row, column)</code> to be val.</p>\n<br>\n<p><code>int Get(int row, char column):</code> Return the value at <code>C(row, column)</code>.</p>\n<br>\n<p><code>int Sum(int row, char column, List of Strings : numbers):</code> This function calculate and set the value at <code>C(row, column)</code>, where the value should be the sum of cells represented by <code>numbers</code>. This function return the sum result at <code>C(row, column)</code>. This sum formula should exist until this cell is overlapped by another value or another sum formula.</p>\n\n<p><code>numbers</code> is a list of strings that each string represent a cell or a range of cells. If the string represent a single cell, then it has the following format : <code>ColRow</code>. For example, "F7" represents the cell at (7, F). </p>\n\n<p>If the string represent a range of cells, then it has the following format : <code>ColRow1:ColRow2</code>. The range will always be a rectangle, and ColRow1 represent the position of the top-left cell, and ColRow2 represents the position of the bottom-right cell. </p>\n<br>\n<p><b>Example 1:</b><br>\n</p><pre>Excel(3,"C"); \n// construct a 3*3 2D array with all zero.\n//   A B C\n// 1 0 0 0\n// 2 0 0 0\n// 3 0 0 0\n\nSet(1, "A", 2);\n// set C(1,"A") to be 2.\n//   A B C\n// 1 2 0 0\n// 2 0 0 0\n// 3 0 0 0\n\nSum(3, "C", ["A1", "A1:B2"]);\n// set C(3,"C") to be the sum of value at C(1,"A") and the values sum of the rectangle range whose top-left cell is C(1,"A") and bottom-right cell is C(2,"B"). Return 4. \n//   A B C\n// 1 2 0 0\n// 2 0 0 0\n// 3 0 0 4\n\nSet(2, "B", 2);\n// set C(2,"B") to be 2. Note C(3, "C") should also be changed.\n//   A B C\n// 1 2 0 0\n// 2 0 2 0\n// 3 0 0 6\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You could assume that there won\'t be any circular sum reference. For example, A1 = sum(B1) and B1 = sum(A1).</li>\n<li> The test cases are using double-quotes to represent a character.</li>\n<li>Please remember to <b>RESET</b> your class variables declared in class Excel, as static/class variables are <b>persisted across multiple test cases</b>. Please see <a href="https://leetcode.com/faq/#different-output">here</a> for more details.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '632',
    name: 'Smallest Range',
    acceptance: '42.1%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>You have <code>k</code> lists of sorted integers in ascending order. Find the <b>smallest</b> range that includes at least one number from each of the <code>k</code> lists. </p>\n\n<p>We define the range [a,b] is smaller than range [c,d] if <code>b-a &lt; d-c</code> or <code>a &lt; c</code> if <code>b-a == d-c</code>.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>[[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]\n<b>Output:</b> [20,24]\n<b>Explanation:</b> \nList 1: [4, 10, 15, 24,26], 24 is in range [20,24].\nList 2: [0, 9, 12, 20], 20 is in range [20,24].\nList 3: [5, 18, 22, 30], 22 is in range [20,24].\n</pre>\n<p></p>\n\n<p>\n<b>Note:</b><br>\n</p><ol>\n<li>The given list may contain duplicates, so ascending order means &gt;= here.</li>\n<li>1 &lt;= <code>k</code> &lt;= 3500</li>\n<li> -10<sup>5</sup> &lt;= <code>value of elements</code> &lt;= 10<sup>5</sup>.</li>\n<li><b>For Java users, please note that the input type has been changed to List&lt;List&lt;Integer&gt;&gt;. And after you reset the code template, you'll see this point.</b></li>\n</ol>\n<br>\n<p></p>\n          ",
    tags: ['Lyft'],
  },
  {
    id: '633',
    name: 'Sum of Square Numbers',
    acceptance: '32.3%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a non-negative integer <code>c</code>, your task is to decide whether there're two integers <code>a</code> and <code>b</code> such that a<sup>2</sup> + b<sup>2</sup> = c.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 5\n<b>Output:</b> True\n<b>Explanation:</b> 1 * 1 + 2 * 2 = 5\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> 3\n<b>Output:</b> False\n</pre>\n<p></p>\n\n          ",
    tags: ['LinkedIn'],
  },
  {
    id: '634',
    name: 'Find the Derangement of An Array ',
    acceptance: '34.9%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nIn combinatorial mathematics, a derangement is a permutation of the elements of a set, such that no element appears in its original position.\n</p>\n\n<p>\nThere's originally an array consisting of <code>n</code> integers from 1 to <code>n</code> in ascending order, you need to find the number of derangement it can generate.\n</p>\n\n<p>\nAlso, since the answer may be very large, you should return the output mod 10<sup>9</sup> + 7.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 3\n<b>Output:</b> 2\n<b>Explanation:</b> The original array is [1,2,3]. The two derangements are [2,3,1] and [3,1,2].\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n<code>n</code> is in the range of [1, 10<sup>6</sup>].\n</p>\n          ",
    tags: ['IXL'],
  },
  {
    id: '635',
    name: 'Design Log Storage System ',
    acceptance: '48.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>You are given several logs that each log contains a unique id and timestamp. Timestamp is a string that has the following format: <code>Year:Month:Day:Hour:Minute:Second</code>, for example, <code>2017:01:01:23:59:59</code>. All domains are zero-padded decimal numbers. </p>\n\n<p>Design a log storage system to implement the following functions:</p>\n\n<p><code>void Put(int id, string timestamp)</code>: Given a log\'s unique id and timestamp, store the log in your storage system.</p>\n<br>\n<p><code>int[] Retrieve(String start, String end, String granularity)</code>: Return the id of logs whose timestamps are within the range from start to end. Start and end all have the same format as timestamp. However, granularity means the time level for consideration. For example, start = "2017:01:01:23:59:59", end = "2017:01:02:23:59:59", granularity = "Day", it means that we need to find the logs within the range from Jan. 1st 2017 to Jan. 2nd 2017.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>put(1, "2017:01:01:23:59:59");\nput(2, "2017:01:01:22:59:59");\nput(3, "2016:01:01:00:00:00");\nretrieve("2016:01:01:01:01:01","2017:01:01:23:00:00","Year"); // return [1,2,3], because you need to return all logs within 2016 and 2017.\nretrieve("2016:01:01:01:01:01","2017:01:01:23:00:00","Hour"); // return [1,2], because you need to return all logs start from 2016:01:01:01 to 2017:01:01:23, where log 3 is left outside the range.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>There will be at most 300 operations of Put or Retrieve.</li>\n<li>Year ranges from [2000,2017]. Hour ranges from [00,23].</li>\n<li>Output for Retrieve has no order required.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Snapchat'],
  },
  {
    id: '636',
    name: 'Exclusive Time of Functions',
    acceptance: '44.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given the running logs of <b>n</b> functions that are executed in a nonpreemptive single threaded CPU, find the exclusive time of these functions. </p>\n\n<p>Each function has a unique id, start from <b>0</b> to <b>n-1</b>. A function may be called recursively or by another function.</p>\n\n<p>A log is a string has this format : <code>function_id:start_or_end:timestamp</code>. For example, <code>"0:start:0"</code> means function 0 starts from the very beginning of time 0. <code>"0:end:0"</code> means function 0 ends to the very end of time 0. </p>\n\n<p>Exclusive time of a function is defined as the time spent within this function, the time spent by calling other functions should not be considered as this function\'s exclusive time. You should return the exclusive time of each function sorted by their function id.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\nn = 2\nlogs = \n["0:start:0",\n "1:start:2",\n "1:end:5",\n "0:end:6"]\n<b>Output:</b>[3, 4]\n<b>Explanation:</b>\nFunction 0 starts at time 0, then it executes 2 units of time and reaches the end of time 1. \nNow function 0 <b>calls function 1</b>, function 1 starts at time 2, executes 4 units of time and end at time 5.\nFunction 0 is running again at time 6, and also end at the time 6, thus executes 1 unit of time. \nSo function 0 totally execute 2 + 1 = 3 units of time, and function 1 totally execute 4 units of time.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>Input logs will be sorted by timestamp, NOT log id.</li>\n<li>Your output should be sorted by function id, which means the 0th element of your output corresponds to the exclusive time of function 0.</li>\n<li>Two functions won\'t start or end at the same time.</li>\n<li>Functions could be called recursively, and will always end.</li>\n<li>1 &lt;= n &lt;= 100</li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook', 'Uber'],
  },
  {
    id: '637',
    name: 'Average of Levels in Binary Tree',
    acceptance: '55.7%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\n    3\n   / \\\n  9  20\n    /  \\\n   15   7\n<b>Output:</b> [3, 14.5, 11]\n<b>Explanation:</b>\nThe average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The range of node's value is in the range of 32-bit signed integer.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Facebook'],
  },
  {
    id: '638',
    name: 'Shopping Offers',
    acceptance: '43.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nIn LeetCode Store, there are some kinds of items to sell. Each item has a price.\n</p>\n\n<p>\nHowever, there are some special offers, and a special offer consists of one or more different kinds of items with a sale price.\n</p>\n\n<p>\nYou are given the each item's price, a set of special offers, and the number we need to buy for each item.\nThe job is to output the lowest price you have to pay for <b>exactly</b> certain items as given, where you could make optimal use of the special offers.\n</p>\n\n<p>\nEach special offer is represented in the form of an array, the last number represents the price you need to pay for this special offer, other numbers represents how many specific items you could get if you buy this offer.\n</p>\n\n<p>You could use any of special offers as many times as you want.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [2,5], [[3,0,5],[1,2,10]], [3,2]\n<b>Output:</b> 14\n<b>Explanation:</b> \nThere are two kinds of items, A and B. Their prices are $2 and $5 respectively. \nIn special offer 1, you can pay $5 for 3A and 0B\nIn special offer 2, you can pay $10 for 1A and 2B. \nYou need to buy 3A and 2B, so you may pay $10 for 1A and 2B (special offer #2), and $4 for 2A.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [2,3,4], [[1,1,0,4],[2,2,1,9]], [1,2,1]\n<b>Output:</b> 11\n<b>Explanation:</b> \nThe price of A is $2, and $3 for B, $4 for C. \nYou may pay $4 for 1A and 1B, and $9 for 2A ,2B and 1C. \nYou need to buy 1A ,2B and 1C, so you may pay $4 for 1A and 1B (special offer #1), and $3 for 1B, $4 for 1C. \nYou cannot add more items, though only $9 for 2A ,2B and 1C.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>There are at most 6 kinds of items, 100 special offers.</li>\n<li>For each item, you need to buy at most 6 of them.</li>\n<li>You are <b>not</b> allowed to buy more items than you want, even if that would lower the overall price.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '639',
    name: 'Decode Ways II',
    acceptance: '24.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nA message containing letters from <code>A-Z</code> is being encoded to numbers using the following mapping way:\n</p>\n\n<pre>\'A\' -&gt; 1\n\'B\' -&gt; 2\n...\n\'Z\' -&gt; 26\n</pre>\n\n<p>\nBeyond that, now the encoded string can also contain the character \'*\', which can be treated as one of the numbers from 1 to 9.\n</p>\n\n\n<p>\nGiven the encoded message containing digits and the character \'*\', return the total number of ways to decode it.\n</p>\n\n<p>\nAlso, since the answer may be very large, you should return the output mod 10<sup>9</sup> + 7.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "*"\n<b>Output:</b> 9\n<b>Explanation:</b> The encoded message can be decoded to the string: "A", "B", "C", "D", "E", "F", "G", "H", "I".\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "1*"\n<b>Output:</b> 9 + 9 = 18\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the input string will fit in range [1, 10<sup>5</sup>].</li>\n<li>The input string will only contain the character \'*\' and digits \'0\' - \'9\'.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '640',
    name: 'Solve the Equation',
    acceptance: '38.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nSolve a given equation and return the value of <code>x</code> in the form of string "x=#value". The equation contains only \'+\', \'-\' operation, the variable <code>x</code> and its coefficient.\n</p>\n\n<p>\nIf there is no solution for the equation, return "No solution".\n</p>\n<p>\nIf there are infinite solutions for the equation, return "Infinite solutions".\n</p>\n<p>\nIf there is exactly one solution for the equation, we ensure that the value of <code>x</code> is an integer.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "x+5-3+x=6+x-2"\n<b>Output:</b> "x=2"\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "x=x"\n<b>Output:</b> "Infinite solutions"\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> "2x=x"\n<b>Output:</b> "x=0"\n</pre>\n<p></p>\n\n<p><b>Example 4:</b><br>\n</p><pre><b>Input:</b> "2x+3x-6x=x+2"\n<b>Output:</b> "x=-1"\n</pre>\n<p></p>\n\n<p><b>Example 5:</b><br>\n</p><pre><b>Input:</b> "x=x+2"\n<b>Output:</b> "No solution"\n</pre>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '642',
    name: 'Design Search Autocomplete System ',
    acceptance: '31.0%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Design a search autocomplete system for a search engine. Users may input a sentence (at least one word and end with a special character <code>\'#\'</code>). For <b>each character</b> they type <b>except \'#\'</b>, you need to return the <b>top 3</b> historical hot sentences that have prefix the same as the part of sentence already typed. Here are the specific rules:</p>\n<ol>\n<li>The hot degree for a sentence is defined as the number of times a user typed the exactly same sentence before. </li>\n<li>The returned top 3 hot sentences should be sorted by hot degree (The first is the hottest one). If several sentences have the same degree of hot, you need to use ASCII-code order (smaller one appears first). </li>\n<li>If less than 3 hot sentences exist, then just return as many as you can.</li>\n<li>When the input is a special character, it means the sentence ends, and in this case, you need to return an empty list.</li>\n</ol>\n\n<p>Your job is to implement the following functions:</p>\n\n<p>The constructor function:</p>\n\n<p><code>AutocompleteSystem(String[] sentences, int[] times):</code> This is the constructor. The input is <b>historical data</b>. <code>Sentences</code> is a string array consists of previously typed sentences. <code>Times</code> is the corresponding times a sentence has been typed. Your system should record these historical data.</p>\n\n<p>Now, the user wants to input a new sentence. The following function will provide the next character the user types: </p>\n\n<p><code>List&lt;String&gt; input(char c):</code> The input <code>c</code> is the next character typed by the user. The character will only be lower-case letters (<code>\'a\'</code> to <code>\'z\'</code>), blank space (<code>\' \'</code>) or a special character (<code>\'#\'</code>). Also, the previously typed sentence should be recorded in your system. The output will be the <b>top 3</b> historical hot sentences that have prefix the same as the part of sentence already typed.</p>\n\n<br>\n<p><b>Example:</b><br>\n\n<b>Operation:</b> AutocompleteSystem(["i love you", "island","ironman", "i love leetcode"], [5,3,2,2])\n<br>\nThe system have already tracked down the following sentences and their corresponding times:\n<br>\n<code>"i love you"</code> : <code>5</code> times\n<br>\n<code>"island"</code> : <code>3</code> times\n<br>\n<code>"ironman"</code> : <code>2</code> times\n<br>\n<code>"i love leetcode"</code> : <code>2</code> times\n<br>\nNow, the user begins another search:\n<br><br>\n<b>Operation:</b> input(\'i\')\n<br>\n<b>Output:</b> ["i love you", "island","i love leetcode"]\n<br>\n<b>Explanation:</b> \n<br>\nThere are four sentences that have prefix <code>"i"</code>. Among them, "ironman" and "i love leetcode" have same hot degree. Since <code>\' \'</code> has ASCII code 32 and <code>\'r\'</code> has ASCII code 114, "i love leetcode" should be in front of "ironman". Also we only need to output top 3 hot sentences, so "ironman" will be ignored.\n<br><br>\n<b>Operation:</b> input(\' \')\n<br>\n<b>Output:</b> ["i love you","i love leetcode"]\n<br>\n<b>Explanation:</b> \n<br>\nThere are only two sentences that have prefix <code>"i "</code>.\n<br><br>\n<b>Operation:</b> input(\'a\')\n<br>\n<b>Output:</b> []\n<br>\n<b>Explanation:</b> \n<br>\nThere are no sentences that have prefix <code>"i a"</code>.\n<br><br>\n<b>Operation:</b> input(\'#\')\n<br>\n<b>Output:</b> []\n<br>\n<b>Explanation:</b> \n<br>\nThe user finished the input, the sentence <code>"i a"</code> should be saved as a historical sentence in system. And the following input will be counted as a new search.\n<br>\n\n</p>\n<br>\n<p><b>Note:</b><br>\n\n</p><ol>\n\n<li>The input sentence will always start with a letter and end with \'#\', and only one blank space will exist between two words. </li>\n<li>The number of <b>complete sentences</b> that to be searched won\'t exceed 100. The length of each sentence including those in the historical data won\'t exceed 100. </li>\n<li>Please use double-quote instead of single-quote when you write test cases even for a character input.</li>\n<li>Please remember to <b>RESET</b> your class variables declared in class AutocompleteSystem, as static/class variables are <b>persisted across multiple test cases</b>. Please see <a href="https://leetcode.com/faq/#different-output">here</a> for more details.</li>\n</ol>\n\n<p></p>\n          ',
    tags: ['Facebook', 'Microsoft'],
  },
  {
    id: '643',
    name: 'Maximum Average Subarray I',
    acceptance: '37.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array consisting of <code>n</code> integers, find the contiguous subarray of given length <code>k</code> that has the maximum average value. And you need to output the maximum average value.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,12,-5,-6,50,3], k = 4\n<b>Output:</b> 12.75\n<b>Explanation:</b> Maximum average is (12-5-6+50)/4 = 51/4 = 12.75\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>1 &lt;= <code>k</code> &lt;= <code>n</code> &lt;= 30,000.</li>\n<li>Elements of the given array will be in the range [-10,000, 10,000].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '644',
    name: 'Maximum Average Subarray II ',
    acceptance: '23.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an array consisting of <code>n</code> integers, find the contiguous subarray whose <b>length is greater than or equal to</b> <code>k</code> that has the maximum average value. And you need to output the maximum average value.\n</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,12,-5,-6,50,3], k = 4\n<b>Output:</b> 12.75\n<b>Explanation:</b>\nwhen length is 5, maximum average value is 10.8,\nwhen length is 6, maximum average value is 9.16667.\nThus return 12.75.\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>1 &lt;= <code>k</code> &lt;= <code>n</code> &lt;= 10,000.</li>\n<li>Elements of the given array will be in range [-10,000, 10,000].</li>\n<li>The answer with the calculation error less than 10<sup>-5</sup> will be accepted.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '645',
    name: 'Set Mismatch',
    acceptance: '39.9%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nThe set <code>S</code> originally contains numbers from 1 to <code>n</code>. But unfortunately, due to the data error, one of the numbers in the set got duplicated to <b>another</b> number in the set, which results in repetition of one number and loss of another number. \n</p>\n\n<p>\nGiven an array <code>nums</code> representing the data status of this set after the error. Your task is to firstly find the number occurs twice and then find the number that is missing. Return them in the form of an array.\n</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> nums = [1,2,2,4]\n<b>Output:</b> [2,3]\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The given array size will in the range [2, 10000].</li>\n<li>The given array's numbers won't have any order.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '646',
    name: 'Maximum Length of Pair Chain',
    acceptance: '47.6%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nYou are given <code>n</code> pairs of numbers. In every pair, the first number is always smaller than the second number.\n</p>\n\n<p>\nNow, we define a pair <code>(c, d)</code> can follow another pair <code>(a, b)</code> if and only if <code>b &lt; c</code>. Chain of pairs can be formed in this fashion. \n</p>\n\n<p>\nGiven a set of pairs, find the length longest chain which can be formed. You needn't use up all the given pairs. You can select pairs in any order.\n</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [[1,2], [2,3], [3,4]]\n<b>Output:</b> 2\n<b>Explanation:</b> The longest chain is [1,2] -&gt; [3,4]\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The number of given pairs will be in the range [1, 1000].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '647',
    name: 'Palindromic Substrings',
    acceptance: '55.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a string, your task is to count how many palindromic substrings in this string.\n</p>\n\n<p>\nThe substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters. \n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "abc"\n<b>Output:</b> 3\n<b>Explanation:</b> Three palindromic strings: "a", "b", "c".\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "aaa"\n<b>Output:</b> 6\n<b>Explanation:</b> Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The input string length won\'t exceed 1000.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook', 'LinkedIn'],
  },
  {
    id: '648',
    name: 'Replace Words',
    acceptance: '47.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nIn English, we have a concept called <code>root</code>, which can be followed by some other words to form another longer word - let\'s call this word <code>successor</code>. For example, the root <code>an</code>, followed by <code>other</code>, which can form another word <code>another</code>.\n</p>\n\n\n<p>\nNow, given a dictionary consisting of many roots and a sentence. You need to replace all the <code>successor</code> in the sentence with the <code>root</code> forming it. If a <code>successor</code> has many <code>roots</code> can form it, replace it with the root with the shortest length.\n</p>\n\n<p>\nYou need to output the sentence after the replacement.\n</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> dict = ["cat", "bat", "rat"]\nsentence = "the cattle was rattled by the battery"\n<b>Output:</b> "the cat was rat by the bat"\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The input will only have lower-case letters.</li>\n<li> 1 &lt;= dict words number &lt;= 1000 </li>\n<li> 1 &lt;= sentence words number &lt;= 1000  </li>\n<li> 1 &lt;= root length &lt;= 100 </li>\n<li> 1 &lt;= sentence words length &lt;= 1000 </li>\n</ol>\n<p></p>\n          ',
    tags: ['Uber'],
  },
  {
    id: '649',
    name: 'Dota2 Senate',
    acceptance: '36.0%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nIn the world of Dota2, there are two parties: the <code>Radiant</code> and the <code>Dire</code>.\n</p>\n\n<p>\nThe Dota2 senate consists of senators coming from two parties. Now the senate wants to make a decision about a change in the Dota2 game. The voting for this change is a round-based procedure. In each round, each senator can exercise <code>one</code> of the two rights:\n</p><ol>\n<li><code>Ban one senator's right</code>: <br>A senator can make another senator lose <b>all his rights</b> in this and all the following rounds.</li>\n<li><code>Announce the victory</code>: <br>If this senator found the senators who still have rights to vote are all from <b>the same party</b>, he can announce the victory and make the decision about the change in the game.</li>\n</ol>\n<p></p>\n\n<p>\nGiven a string representing each senator's party belonging. The character 'R' and 'D' represent the <code>Radiant</code> party and the <code>Dire</code> party respectively. Then if there are <code>n</code> senators, the size of the given string will be <code>n</code>.\n</p>\n\n<p>\nThe round-based procedure starts from the first senator to the last senator in the given order. This procedure will last until the end of voting. All the senators who have lost their rights will be skipped during the procedure.\n</p>\n\n<p>\nSuppose every senator is smart enough and will play the best strategy for his own party, you need to predict which party will finally announce the victory and make the change in the Dota2 game. The output should be <code>Radiant</code> or <code>Dire</code>.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \"RD\"\n<b>Output:</b> \"Radiant\"\n<b>Explanation:</b> The first senator comes from Radiant and he can just ban the next senator's right in the round 1. <br>And the second senator can't exercise any rights any more since his right has been banned. <br>And in the round 2, the first senator can just announce the victory since he is the only guy in the senate who can vote.\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \"RDD\"\n<b>Output:</b> \"Dire\"\n<b>Explanation:</b> \nThe first senator comes from Radiant and he can just ban the next senator's right in the round 1. <br>And the second senator can't exercise any rights anymore since his right has been banned. <br>And the third senator comes from Dire and he can ban the first senator's right in the round 1. <br>And in the round 2, the third senator can just announce the victory since he is the only guy in the senate who can vote.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the given string will in the range [1, 10,000].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Valve'],
  },
  {
    id: '650',
    name: '2 Keys Keyboard',
    acceptance: '44.9%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nInitially on a notepad only one character 'A' is present. You can perform two operations on this notepad for each step: \n</p><ol>\n<li><code>Copy All</code>: You can copy all the characters present on the notepad (partial copy is not allowed).</li>\n<li><code>Paste</code>: You can paste the characters which are copied <b>last time</b>.</li>\n</ol>\n<p></p>\n\n<p>\nGiven a number <code>n</code>. You have to get <b>exactly</b> <code>n</code> 'A' on the notepad by performing the minimum number of steps permitted. Output the minimum number of steps to get <code>n</code> 'A'. \n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 3\n<b>Output:</b> 3\n<b>Explanation:</b>\nIntitally, we have one character 'A'.\nIn step 1, we use <b>Copy All</b> operation.\nIn step 2, we use <b>Paste</b> operation to get 'AA'.\nIn step 3, we use <b>Paste</b> operation to get 'AAA'.\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The <code>n</code> will be in the range [1, 1000].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Microsoft'],
  },
  {
    id: '651',
    name: '4 Keys Keyboard ',
    acceptance: '49.1%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Imagine you have a special keyboard with the following keys: </p>\n<p><code>Key 1: (A)</code>:  Print one 'A' on screen.</p>\n<p><code>Key 2: (Ctrl-A)</code>: Select the whole screen.</p>\n<p><code>Key 3: (Ctrl-C)</code>: Copy selection to buffer.</p>\n<p><code>Key 4: (Ctrl-V)</code>: Print buffer on screen appending it after what has already been printed. </p>\n\n\n\n<p>Now, you can only press the keyboard for <b>N</b> times (with the above four keys), find out the maximum numbers of 'A' you can print on screen.</p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> N = 3\n<b>Output:</b> 3\n<b>Explanation:</b> \nWe can at most get 3 A's on screen by pressing following key sequence:\nA, A, A\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> N = 7\n<b>Output:</b> 9\n<b>Explanation:</b> \nWe can at most get 9 A's on screen by pressing following key sequence:\nA, A, A, Ctrl A, Ctrl C, Ctrl V, Ctrl V\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>1 &lt;= N &lt;= 50 </li>\n<li>Answers will be in the range of 32-bit signed integer.</li>\n</ol>\n<p></p>\n\n          ",
    tags: ['Google', 'Microsoft'],
  },
  {
    id: '652',
    name: 'Find Duplicate Subtrees',
    acceptance: '36.3%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a binary tree, return all duplicate subtrees. For each kind of duplicate subtrees, you only need to return the root node of any <b>one</b> of them. </p>\n\n<p>\nTwo trees are duplicate if they have the same structure with same node values.\n</p>\n\n<p><b>Example 1: </b><br>\n</p><pre>        1\n       / \\\n      2   3\n     /   / \\\n    4   2   4\n       /\n      4\n</pre>\nThe following are two duplicate subtrees:\n<pre>      2\n     /\n    4\n</pre>\nand\n<pre>    4\n</pre>\nTherefore, you need to return above trees' root in the form of a list.\n<p></p>\n\n\n          ",
    tags: ['Google'],
  },
  {
    id: '653',
    name: 'Two Sum IV - Input is a BST',
    acceptance: '50.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a Binary Search Tree and a target number, return true if there exist two elements in the BST such that their sum is equal to the given target.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \n    5\n   / \\\n  3   6\n / \\   \\\n2   4   7\n\nTarget = 9\n\n<b>Output:</b> True\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \n    5\n   / \\\n  3   6\n / \\   \\\n2   4   7\n\nTarget = 28\n\n<b>Output:</b> False\n</pre>\n<p></p>\n\n\n          ',
    tags: ['Facebook', 'Samsung'],
  },
  {
    id: '654',
    name: 'Maximum Binary Tree',
    acceptance: '70.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven an integer array with no duplicates. A maximum tree building on this array is defined as follow:\n</p><ol>\n<li>The root is the maximum number in the array. </li>\n<li>The left subtree is the maximum tree constructed from left part subarray divided by the maximum number.</li>\n<li>The right subtree is the maximum tree constructed from right part subarray divided by the maximum number.</li> \n</ol>\n<p></p>\n\n<p>\nConstruct the maximum tree by the given array and output the root node of this tree.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [3,2,1,6,0,5]\n<b>Output:</b> return the tree root node representing the following tree:\n\n      6\n    /   \\\n   3     5\n    \\    / \n     2  0   \n       \\\n        1\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The size of the given array will be in the range [1,1000].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '655',
    name: 'Print Binary Tree',
    acceptance: '49.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Print a binary tree in an m*n 2D string array following these rules: </p>\n\n<ol>\n<li>The row number <code>m</code> should be equal to the height of the given binary tree.</li>\n<li>The column number <code>n</code> should always be an odd number.</li>\n<li>The root node\'s value (in string format) should be put in the exactly middle of the first row it can be put. The column and the row where the root node belongs will separate the rest space into two parts (<b>left-bottom part and right-bottom part</b>). You should print the left subtree in the left-bottom part and print the right subtree in the right-bottom part. The left-bottom part and the right-bottom part should have the same size. Even if one subtree is none while the other is not, you don\'t need to print anything for the none subtree but still need to leave the space as large as that for the other subtree. However, if two subtrees are none, then you don\'t need to leave space for both of them. </li>\n<li>Each unused space should contain an empty string <code>""</code>.</li>\n<li>Print the subtrees following the same rules.</li>\n</ol>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\n     1\n    /\n   2\n<b>Output:</b>\n[["", "1", ""],\n ["2", "", ""]]\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>\n     1\n    / \\\n   2   3\n    \\\n     4\n<b>Output:</b>\n[["", "", "", "1", "", "", ""],\n ["", "2", "", "", "", "3", ""],\n ["", "", "4", "", "", "", ""]]\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b>\n      1\n     / \\\n    2   5\n   / \n  3 \n / \n4 \n<b>Output:</b>\n\n[["",  "",  "", "",  "", "", "", "1", "",  "",  "",  "",  "", "", ""]\n ["",  "",  "", "2", "", "", "", "",  "",  "",  "",  "5", "", "", ""]\n ["",  "3", "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]\n ["4", "",  "", "",  "", "", "", "",  "",  "",  "",  "",  "", "", ""]]\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe height of binary tree is in the range of [1, 10].\n</p>\n          ',
    tags: ['Poynt'],
  },
  {
    id: '656',
    name: 'Coin Path ',
    acceptance: '25.5%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nGiven an array <code>A</code> (index starts at <code>1</code>) consisting of N integers: A<sub>1</sub>, A<sub>2</sub>, ..., A<sub>N</sub>&nbsp;and an integer <code>B</code>. The integer <code>B</code> denotes that from any place (suppose the index is <code>i</code>) in the array <code>A</code>, you can jump to any one of the place in the array <code>A</code> indexed <code>i+1</code>, <code>i+2</code>, …, <code>i+B</code> if this place can be jumped to. Also, if you step on the index <code>i</code>, you have to pay A<sub>i</sub>&nbsp;coins. If A<sub>i</sub>&nbsp;is -1, it means you can’t jump to the place indexed <code>i</code> in the array.\n</p>\n\n<p>\nNow, you start from the place indexed <code>1</code> in the array <code>A</code>, and your aim is to reach the place indexed <code>N</code> using the minimum coins. You need to return the path of indexes (starting from 1 to N) in the array you should take to get to the place indexed <code>N</code> using minimum coins.\n</p>\n\n<p>\nIf there are multiple paths with the same cost, return the lexicographically smallest such path.\n</p>\n<p>\nIf it's not possible to reach the place indexed N then you need to return an empty array.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,2,4,-1,2], 2\n<b>Output:</b> [1,3,5]\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1,2,4,-1,2], 1\n<b>Output:</b> []\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>Path Pa<sub>1</sub>, Pa<sub>2</sub>, ..., Pa<sub>n</sub>&nbsp;is lexicographically smaller than Pb<sub>1</sub>, Pb<sub>2</sub>, ..., Pb<sub>m</sub>, if and only if at the first <code>i</code> where Pa<sub>i</sub>&nbsp;and Pb<sub>i</sub>&nbsp;differ, Pa<sub>i</sub>&nbsp;&lt; Pb<sub>i</sub>; when no such&nbsp;<code>i</code>&nbsp;exists, then&nbsp;<code>n</code> &lt; <code>m</code>.</li>\n<li>A<sub>1</sub> &gt;= 0. A<sub>2</sub>, ..., A<sub>N</sub> (if exist) will in the range of [-1, 100]. </li>\n<li>Length of A is in the range of [1, 1000].</li>\n<li>B is in the range of [1, 100].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '657',
    name: 'Judge Route Circle',
    acceptance: '68.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nInitially, there is a Robot at position (0, 0). Given a sequence of its moves, judge if this robot makes a circle, which means it moves back to <b>the original place</b>. \n</p>\n\n<p>\nThe move sequence is represented by a string. And each move is represent by a character. The valid robot moves are <code>R</code> (Right), <code>L</code> (Left), <code>U</code> (Up) and <code>D</code> (down). The output should be true or false representing whether the robot makes a circle.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "UD"\n<b>Output:</b> true\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "LL"\n<b>Output:</b> false\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '658',
    name: 'Find K Closest Elements',
    acceptance: '35.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a sorted array, two integers <code>k</code> and <code>x</code>, find the <code>k</code> closest elements to <code>x</code> in the array.  The result should also be sorted in ascending order.\nIf there is a tie,  the smaller elements are always preferred.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,2,3,4,5], k=4, x=3\n<b>Output:</b> [1,2,3,4]\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1,2,3,4,5], k=4, x=-1\n<b>Output:</b> [1,2,3,4]\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The value k is positive and will always be smaller than the length of the sorted array.</li>\n<li> Length of the given array is positive and will not exceed 10<sup>4</sup></li>\n<li> Absolute value of elements in the array and x will not exceed 10<sup>4</sup></li>\n</ol>\n<p></p>\n\n<hr>\n\n<p>\n<b><font color="red">UPDATE (2017/9/19):</font></b><br>\nThe <i>arr</i> parameter had been changed to an <b>array of integers</b> (instead of a list of integers). <b><i>Please reload the code definition to get the latest changes</i></b>.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '659',
    name: 'Split Array into Consecutive Subsequences',
    acceptance: '36.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>You are given an integer array sorted in ascending order (may contain duplicates), you need to split them into several subsequences, where each subsequences consist of at least 3 consecutive integers. Return whether you can make such a split.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,2,3,3,4,5]\n<b>Output:</b> True\n<b>Explanation:</b>\nYou can split them into two consecutive subsequences : \n1, 2, 3\n3, 4, 5\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1,2,3,3,4,4,5,5]\n<b>Output:</b> True\n<b>Explanation:</b>\nYou can split them into two consecutive subsequences : \n1, 2, 3, 4, 5\n3, 4, 5\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> [1,2,3,4,4,5]\n<b>Output:</b> False\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of the input is in range of [1, 10000]</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '660',
    name: 'Remove 9 ',
    acceptance: '48.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Start from integer 1, remove any integer that contains 9 such as 9, 19, 29... </p>\n\n<p>So now, you will have a new integer sequence: 1, 2, 3, 4, 5, 6, 7, 8, 10, 11, ...</p>\n\n<p>Given a positive integer <code>n</code>, you need to return the n-th integer after removing. Note that 1 will be the first integer.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 9\n<b>Output:</b> 10\n</pre>\n<p></p>\n\n<p>\n<b> Hint</b>: n will not exceed <code>9 x 10^8</code>.\n</p>\n          ',
    tags: ['Houzz'],
  },
  {
    id: '661',
    name: 'Image Smoother',
    acceptance: '45.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a 2D integer matrix M representing the gray scale of an image, you need to design a smoother to make the gray scale of each cell becomes the average gray scale (rounding down) of all the 8 surrounding cells and itself.  If a cell has less than 8 surrounding cells, then use as many as you can.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\n[[1,1,1],\n [1,0,1],\n [1,1,1]]\n<b>Output:</b>\n[[0, 0, 0],\n [0, 0, 0],\n [0, 0, 0]]\n<b>Explanation:</b>\nFor the point (0,0), (0,2), (2,0), (2,2): floor(3/4) = floor(0.75) = 0\nFor the point (0,1), (1,0), (1,2), (2,1): floor(5/6) = floor(0.83333333) = 0\nFor the point (1,1): floor(8/9) = floor(0.88888889) = 0\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The value in the given matrix is in the range of [0, 255].</li>\n<li>The length and width of the given matrix are in the range of [1, 150].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '662',
    name: 'Maximum Width of Binary Tree',
    acceptance: '37.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, write a function to get the maximum width of the given tree. The width of a tree is the maximum width among all levels. The binary tree has the same structure as a <b>full binary tree</b>, but some nodes are null. </p>\n\n<p>The width of one level is defined as the length between the end-nodes (the leftmost and right most non-null nodes in the level, where the <code>null</code> nodes between the end-nodes are also counted into the length calculation.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \n\n           1\n         /   \\\n        3     2\n       / \\     \\  \n      5   3     9 \n\n<b>Output:</b> 4\n<b>Explanation:</b> The maximum width existing in the third level with the length 4 (5,3,null,9).\n</pre>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \n\n          1\n         /  \n        3    \n       / \\       \n      5   3     \n\n<b>Output:</b> 2\n<b>Explanation:</b> The maximum width existing in the third level with the length 2 (5,3).\n</pre>\n\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> \n\n          1\n         / \\\n        3   2 \n       /        \n      5      \n\n<b>Output:</b> 2\n<b>Explanation:</b> The maximum width existing in the second level with the length 2 (3,2).\n</pre>\n\n<p><b>Example 4:</b><br>\n</p><pre><b>Input:</b> \n\n          1\n         / \\\n        3   2\n       /     \\  \n      5       9 \n     /         \\\n    6           7\n<b>Output:</b> 8\n<b>Explanation:</b>The maximum width existing in the fourth level with the length 8 (6,null,null,null,null,null,null,7).\n\n\n</pre>\n\n<p><b>Note:</b>\nAnswer will in the range of 32-bit signed integer.\n</p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '663',
    name: 'Equal Tree Partition ',
    acceptance: '36.5%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a binary tree with <code>n</code> nodes, your task is to check if it's possible to partition the tree to two trees which have the equal sum of values after removing <b>exactly</b> one edge on the original tree.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>     \n    5\n   / \\\n  10 10\n    /  \\\n   2   3\n\n<b>Output:</b> True\n<b>Explanation:</b> \n    5\n   / \n  10\n      \nSum: 15\n\n   10\n  /  \\\n 2    3\n\nSum: 15\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b>     \n    1\n   / \\\n  2  10\n    /  \\\n   2   20\n\n<b>Output:</b> False\n<b>Explanation:</b> You can't split the tree into two trees with equal sum after removing exactly one edge on the tree.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The range of tree node value is in the range of [-100000, 100000].</li>\n<li>1 &lt;= n &lt;= 10000</li>\n</ol>\n<p></p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '664',
    name: 'Strange Printer',
    acceptance: '33.0%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThere is a strange printer with the following two special requirements:\n\n</p><ol>\n<li>The printer can only print a sequence of the same character each time.</li>\n<li>At each turn, the printer can print new characters starting from and ending at any places, and will cover the original existing characters.</li>\n</ol>\n\n<p></p>\n\n<p>\nGiven a string consists of lower English letters only, your job is to count the minimum number of turns the printer needed in order to print it.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "aaabbb"\n<b>Output:</b> 2\n<b>Explanation:</b> Print "aaa" first and then print "bbb".\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "aba"\n<b>Output:</b> 2\n<b>Explanation:</b> Print "aaa" first and then print "b" from the second place of the string, which will cover the existing character \'a\'.\n</pre>\n<p></p>\n\n<p><b>Hint</b>: Length of the given string will not exceed 100.</p>\n          ',
    tags: ['NetEase'],
  },
  {
    id: '665',
    name: 'Non-decreasing Array',
    acceptance: '20.9%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nGiven an array with <code>n</code> integers, your task is to check if it could become non-decreasing by modifying <b>at most</b> <code>1</code> element.\n</p>\n\n<p>\nWe define an array is non-decreasing if <code>array[i] &lt;= array[i + 1]</code> holds for every <code>i</code> (1 &lt;= i &lt; n).\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [4,2,3]\n<b>Output:</b> True\n<b>Explanation:</b> You could modify the first <code>4</code> to <code>1</code> to get a non-decreasing array.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [4,2,1]\n<b>Output:</b> False\n<b>Explanation:</b> You can't get a non-decreasing array by modify at most one element.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe <code>n</code> belongs to [1, 10,000].\n</p>\n          ",
    tags: ['Google'],
  },
  {
    id: '666',
    name: 'Path Sum IV ',
    acceptance: '49.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nIf the depth of a tree is smaller than <code>5</code>, then this tree can be represented by a list of three-digits integers.\n</p>\n\n<p>\nFor each integer in this list:<br>\n</p><ol>\n<li>The hundreds digit represents the depth <code>D</code> of this node, <code>1 &lt;= D &lt;= 4.</code></li>\n<li>The tens digit represents the position <code>P</code> of this node in the level it belongs to, <code>1 &lt;= P &lt;= 8</code>. The position is the same as that in a full binary tree. </li>\n<li>The units digit represents the value <code>V</code> of this node, <code>0 &lt;= V &lt;= 9.</code></li>\n</ol>\n<p></p>\n\n<p>\nGiven a list of <code>ascending</code> three-digits integers representing a binary with the depth smaller than 5. You need to return the sum of all paths from the root towards the leaves.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [113, 215, 221]\n<b>Output:</b> 12\n<b>Explanation:</b> \nThe tree that the list represents is:\n    3\n   / \\\n  5   1\n\nThe path sum is (3 + 5) + (3 + 1) = 12.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [113, 221]\n<b>Output:</b> 4\n<b>Explanation:</b> \nThe tree that the list represents is: \n    3\n     \\\n      1\n\nThe path sum is (3 + 1) = 4.\n</pre>\n<p></p>\n          ',
    tags: ['Alibaba'],
  },
  {
    id: '667',
    name: 'Beautiful Arrangement II',
    acceptance: '51.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two integers <code>n</code> and <code>k</code>, you need to construct a list which contains <code>n</code> different positive integers ranging from <code>1</code> to <code>n</code> and obeys the following requirement: <br>\n\nSuppose this list is [a<sub>1</sub>, a<sub>2</sub>, a<sub>3</sub>, ... , a<sub>n</sub>], then the list [|a<sub>1</sub> - a<sub>2</sub>|, |a<sub>2</sub> - a<sub>3</sub>|, |a<sub>3</sub> - a<sub>4</sub>|, ... , |a<sub>n-1</sub> - a<sub>n</sub>|] has exactly <code>k</code> distinct integers.\n</p>\n\n<p>\nIf there are multiple answers, print any of them.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> n = 3, k = 1\n<b>Output:</b> [1, 2, 3]\n<b>Explanation:</b> The [1, 2, 3] has three different positive integers ranging from 1 to 3, and the [1, 1] has exactly 1 distinct integer: 1.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> n = 3, k = 2\n<b>Output:</b> [1, 3, 2]\n<b>Explanation:</b> The [1, 3, 2] has three different positive integers ranging from 1 to 3, and the [2, 1] has exactly 2 distinct integers: 1 and 2.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The <code>n</code> and <code>k</code> are in the range 1 &lt;= k &lt; n &lt;= 10<sup>4</sup>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '668',
    name: 'Kth Smallest Number in Multiplication Table',
    acceptance: '38.1%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nNearly every one have used the <a href="https://en.wikipedia.org/wiki/Multiplication_table">Multiplication Table</a>. But could you find out the <code>k-th</code> smallest number quickly from the multiplication table?\n</p>\n\n<p>\nGiven the height <code>m</code> and the length <code>n</code> of a <code>m * n</code> Multiplication Table, and a positive integer <code>k</code>, you need to return the <code>k-th</code> smallest number in this table.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> m = 3, n = 3, k = 5\n<b>Output:</b> \n<b>Explanation:</b> \nThe Multiplication Table:\n1\t2\t3\n2\t4\t6\n3\t6\t9\n\nThe 5-th smallest number is 3 (1, 2, 2, 3, 3).\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> m = 2, n = 3, k = 6\n<b>Output:</b> \n<b>Explanation:</b> \nThe Multiplication Table:\n1\t2\t3\n2\t4\t6\n\nThe 6-th smallest number is 6 (1, 2, 2, 3, 4, 6).\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The <code>m</code> and <code>n</code> will be in the range [1, 30000].</li>\n<li>The <code>k</code> will be in the range [1, m * n]</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '669',
    name: 'Trim a Binary Search Tree',
    acceptance: '58.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a binary search tree and the lowest and highest boundaries as <code>L</code> and <code>R</code>, trim the tree so that all its elements lies in <code>[L, R]</code> (R &gt;= L). You might need to change the root of the tree, so the result should return the new root of the trimmed binary search tree.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \n    1\n   / \\\n  0   2\n\n  L = 1\n  R = 2\n\n<b>Output:</b> \n    1\n      \\\n       2\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \n    3\n   / \\\n  0   4\n   \\\n    2\n   /\n  1\n\n  L = 1\n  R = 3\n\n<b>Output:</b> \n      3\n     / \n   2   \n  /\n 1\n</pre>\n<p></p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '670',
    name: 'Maximum Swap',
    acceptance: '38.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a non-negative integer, you could swap two digits <b>at most</b> once to get the maximum valued number. Return the maximum valued number you could get.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 2736\n<b>Output:</b> 7236\n<b>Explanation:</b> Swap the number 2 and the number 7.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> 9973\n<b>Output:</b> 9973\n<b>Explanation:</b> No swap.\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The given number is in the range [0, 10<sup>8</sup>]</li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '671',
    name: 'Second Minimum Node In a Binary Tree',
    acceptance: '41.9%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a non-empty special binary tree consisting of nodes with the non-negative value, where each node in this tree has exactly <code>two</code> or <code>zero</code> sub-node. If the node has two sub-nodes, then this node's value is the smaller value among its two sub-nodes. \n</p>\n\n<p>\nGiven such a binary tree, you need to output the <b>second minimum</b> value in the set made of all the nodes' value in the whole tree. \n</p>\n\n<p>\nIf no such second minimum value exists, output -1 instead.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \n    2\n   / \\\n  2   5\n     / \\\n    5   7\n\n<b>Output:</b> 5\n<b>Explanation:</b> The smallest value is 2, the second smallest value is 5.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \n    2\n   / \\\n  2   2\n\n<b>Output:</b> -1\n<b>Explanation:</b> The smallest value is 2, but there isn't any second smallest value.\n</pre>\n<p></p>\n          ",
    tags: ['LinkedIn'],
  },
  {
    id: '672',
    name: 'Bulb Switcher II',
    acceptance: '48.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nThere is a room with <code>n</code> lights which are turned on initially and 4 buttons on the wall. After performing exactly <code>m</code> unknown operations towards buttons, you need to return how many different kinds of status of the <code>n</code> lights could be.\n</p>\n\n<p>\nSuppose <code>n</code> lights are labeled as number [1, 2, 3 ..., n], function of these 4 buttons are given below:\n\n</p><ol>\n<li>Flip all the lights.</li>\n<li>Flip lights with even numbers.</li>\n<li>Flip lights with odd numbers.</li>\n<li>Flip lights with (3k + 1) numbers, k = 0, 1, 2, ...</li>\n</ol>\n<p></p>\n\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> n = 1, m = 1.\n<b>Output:</b> 2\n<b>Explanation:</b> Status can be: [on], [off]\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> n = 2, m = 1.\n<b>Output:</b> 3\n<b>Explanation:</b> Status can be: [on, off], [off, on], [off, off]\n</pre>\n<p></p>\n\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> n = 3, m = 1.\n<b>Output:</b> 4\n<b>Explanation:</b> Status can be: [off, on, off], [on, off, on], [off, off, off], [off, on, on].\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n<code>n</code> and <code>m</code> both fit in range [0, 1000].\n</p>\n\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '673',
    name: 'Number of Longest Increasing Subsequence',
    acceptance: '31.2%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven an unsorted array of integers, find the number of longest increasing subsequence.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,3,5,4,7]\n<b>Output:</b> 2\n<b>Explanation:</b> The two longest increasing subsequence are [1, 3, 4, 7] and [1, 3, 5, 7].\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [2,2,2,2,2]\n<b>Output:</b> 5\n<b>Explanation:</b> The length of longest continuous increasing subsequence is 1, and there are 5 subsequences' length is 1, so output 5.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nLength of the given array will be not exceed 2000 and the answer is guaranteed to be fit in 32-bit signed int.\n</p>\n          ",
    tags: ['Facebook'],
  },
  {
    id: '674',
    name: 'Longest Continuous Increasing Subsequence',
    acceptance: '42.7%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nGiven an unsorted array of integers, find the length of longest <code>continuous</code> increasing subsequence (subarray).\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1,3,5,4,7]\n<b>Output:</b> 3\n<b>Explanation:</b> The longest continuous increasing subsequence is [1,3,5], its length is 3. \nEven though [1,3,5,7] is also an increasing subsequence, it's not a continuous one where 5 and 7 are separated by 4. \n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [2,2,2,2,2]\n<b>Output:</b> 1\n<b>Explanation:</b> The longest continuous increasing subsequence is [2], its length is 1. \n</pre>\n<p></p>\n\n<p><b>Note:</b>\nLength of the array will not exceed 10,000.\n</p>\n          ",
    tags: ['Facebook'],
  },
  {
    id: '675',
    name: 'Cut Off Trees for Golf Event',
    acceptance: '26.7%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nYou are asked to cut off trees in a forest for a golf event. The forest is represented as a non-negative 2D map, in this map:\n</p><ol>\n<li><code>0</code> represents the <code>obstacle</code> can't be reached.</li>\n<li><code>1</code> represents the <code>ground</code> can be walked through.</li>\n<li><code>The place with number bigger than 1</code> represents a <code>tree</code> can be walked through, and this positive number represents the tree's height.</li>\n</ol>\n<p></p>\n\n<p>\nYou are asked to cut off <b>all</b> the trees in this forest in the order of tree's height - always cut off the tree with lowest height first. And after cutting, the original place has the tree will become a grass (value 1). \n</p>\n\n<p>\nYou will start from the point (0, 0) and you should output the minimum steps <b>you need to walk</b> to cut off all the trees. If you can't cut off all the trees, output -1 in that situation.\n</p>\n\n<p>\nYou are guaranteed that no two <code>trees</code> have the same height and there is at least one tree needs to be cut off.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \n[\n [1,2,3],\n [0,0,4],\n [7,6,5]\n]\n<b>Output:</b> 6\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \n[\n [1,2,3],\n [0,0,0],\n [7,6,5]\n]\n<b>Output:</b> -1\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> \n[\n [2,3,4],\n [0,0,5],\n [8,7,6]\n]\n<b>Output:</b> 6\n<b>Explanation:</b> You started from the point (0,0) and you can cut off the tree in (0,0) directly without walking.\n</pre>\n<p></p>\n\n<p>\n<b>Hint</b>: size of the given matrix will not exceed 50x50.\n</p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '676',
    name: 'Implement Magic Dictionary',
    acceptance: '49.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nImplement a magic directory with <code>buildDict</code>, and <code>search</code> methods.\n</p>\n\n<p>\nFor the method <code>buildDict</code>, you\'ll be given a list of non-repetitive words to build a dictionary.\n</p>\n\n<p>\nFor the method <code>search</code>, you\'ll be given a word, and judge whether if you modify <b>exactly</b> one character into <b>another</b> character in this word, the modified word is in the dictionary you just built.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>Input: buildDict(["hello", "leetcode"]), Output: Null\nInput: search("hello"), Output: False\nInput: search("hhllo"), Output: True\nInput: search("hell"), Output: False\nInput: search("leetcoded"), Output: False\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume that all the inputs are consist of lowercase letters <code>a-z</code>.</li>\n<li>For contest purpose, the test data is rather small by now. You could think about highly efficient algorithm after the contest.</li>\n<li>Please remember to <b>RESET</b> your class variables declared in class MagicDictionary, as static/class variables are <b>persisted across multiple test cases</b>. Please see <a href="https://leetcode.com/faq/#different-output">here</a> for more details.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '677',
    name: 'Map Sum Pairs',
    acceptance: '52.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nImplement a MapSum class with <code>insert</code>, and <code>sum</code> methods.\n</p>\n\n<p>\nFor the method <code>insert</code>, you\'ll be given a pair of (string, integer). The string represents the key and the integer represents the value. If the key already existed, then the original key-value pair will be overridden to the new one.\n</p>\n\n<p>\nFor the method <code>sum</code>, you\'ll be given a string representing the prefix, and you need to return the sum of all the pairs\' value whose key starts with the prefix.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>Input: insert("apple", 3), Output: Null\nInput: sum("ap"), Output: 3\nInput: insert("app", 2), Output: Null\nInput: sum("ap"), Output: 5\n</pre>\n<p></p>\n\n          ',
    tags: ['Akuna Capital'],
  },
  {
    id: '678',
    name: 'Valid Parenthesis String',
    acceptance: '29.1%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a string containing only three types of characters: '(', ')' and '*', write a function to check whether this string is valid. We define the validity of a string by these rules:\n</p><ol>\n<li>Any left parenthesis <code>'('</code> must have a corresponding right parenthesis <code>')'</code>.</li>\n<li>Any right parenthesis <code>')'</code> must have a corresponding left parenthesis <code>'('</code>.</li>\n<li>Left parenthesis <code>'('</code> must go before the corresponding right parenthesis <code>')'</code>.</li>\n<li><code>'*'</code> could be treated as a single right parenthesis <code>')'</code> or a single left parenthesis <code>'('</code> or an empty string.</li>\n<li>An empty string is also valid.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \"()\"\n<b>Output:</b> True\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \"(*)\"\n<b>Output:</b> True\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> \"(*))\"\n<b>Output:</b> True\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The string size will be in the range [1, 100].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Alibaba'],
  },
  {
    id: '679',
    name: '24 Game',
    acceptance: '38.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nYou have 4 cards each containing a number from 1 to 9.  You need to judge whether they could operated through <code>*</code>, <code>/</code>, <code>+</code>, <code>-</code>, <code>(</code>, <code>)</code> to get the value of 24.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [4, 1, 8, 7]\n<b>Output:</b> True\n<b>Explanation:</b> (8-4) * (7-1) = 24\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1, 2, 1, 2]\n<b>Output:</b> False\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The division operator <code>/</code> represents real division, not integer division.  For example, 4 / (1 - 2/3) = 12.</li>\n<li>Every operation done is between two numbers.  In particular, we cannot use <code>-</code> as a unary operator.  For example, with <code>[1, 1, 1, 1]</code> as input, the expression <code>-1 - 1 - 1 - 1</code> is not allowed.</li>\n<li>You cannot concatenate numbers together.  For example, if the input is <code>[1, 2, 1, 2]</code>, we cannot write this as 12 + 12.</li>\n</ol>\n<p></p>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '680',
    name: 'Valid Palindrome II',
    acceptance: '32.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a non-empty string <code>s</code>, you may delete <b>at most</b> one character.  Judge whether you can make it a palindrome.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "aba"\n<b>Output:</b> True\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "abca"\n<b>Output:</b> True\n<b>Explanation:</b> You could delete the character \'c\'.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The string will only contain lowercase characters a-z.\nThe maximum length of the string is 50000.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '681',
    name: 'Next Closest Time ',
    acceptance: '43.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a time represented in the format "HH:MM", form the next closest time by reusing the current digits. There is no limit on how many times a digit can be reused.</p>\n\n<p>You may assume the given input string is always valid. For example, "01:34", "12:09" are all valid. "1:34", "12:9" are all invalid.</p>\n\n<p><b>Example 1:</b>\n</p><pre><b>Input:</b> "19:34"\n<b>Output:</b> "19:39"\n<b>Explanation:</b> The next closest time choosing from digits <b>1</b>, <b>9</b>, <b>3</b>, <b>4</b>, is <b>19:39</b>, which occurs 5 minutes later.  It is not <b>19:33</b>, because this occurs 23 hours and 59 minutes later.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b>\n</p><pre><b>Input:</b> "23:59"\n<b>Output:</b> "22:22"\n<b>Explanation:</b> The next closest time choosing from digits <b>2</b>, <b>3</b>, <b>5</b>, <b>9</b>, is <b>22:22</b>. It may be assumed that the returned time is next day\'s time since it is smaller than the input time numerically.\n</pre>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '682',
    name: 'Baseball Game',
    acceptance: '58.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nYou\'re now a baseball game point recorder.\n</p>\n\n<p>\nGiven a list of strings, each string can be one of the 4 following types:\n</p><ol>\n<li><code>Integer</code> (one round\'s score): Directly represents the number of points you get in this round.</li>\n<li><code>"+"</code> (one round\'s score): Represents that the points you get in this round are the sum of the last two <code>valid</code> round\'s points.</li>\n<li><code>"D"</code> (one round\'s score): Represents that the points you get in this round are the doubled data of the last <code>valid</code> round\'s points.</li>\n<li><code>"C"</code> (an operation, which isn\'t a round\'s score): Represents the last <code>valid</code> round\'s points you get were invalid and should be removed.</li>\n</ol>\n<p></p>\n\n<p>\nEach round\'s operation is permanent and could have an impact on the round before and the round after.\n</p>\n\n<p>\nYou need to return the sum of the points you could get in all the rounds.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> ["5","2","C","D","+"]\n<b>Output:</b> 30\n<b>Explanation:</b> \nRound 1: You could get 5 points. The sum is: 5.\nRound 2: You could get 2 points. The sum is: 7.\nOperation 1: The round 2\'s data was invalid. The sum is: 5.  \nRound 3: You could get 10 points (the round 2\'s data has been removed). The sum is: 15.\nRound 4: You could get 5 + 10 = 15 points. The sum is: 30.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> ["5","-2","4","C","D","9","+","+"]\n<b>Output:</b> 27\n<b>Explanation:</b> \nRound 1: You could get 5 points. The sum is: 5.\nRound 2: You could get -2 points. The sum is: 3.\nRound 3: You could get 4 points. The sum is: 7.\nOperation 1: The round 3\'s data is invalid. The sum is: 3.  \nRound 4: You could get -4 points (the round 3\'s data has been removed). The sum is: -1.\nRound 5: You could get 9 points. The sum is: 8.\nRound 6: You could get -4 + 9 = 5 points. The sum is 13.\nRound 7: You could get 9 + 5 = 14 points. The sum is 27.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><li>The size of the input list will be between 1 and 1000.</li>\n<li>Every integer represented in the list will be between -30000 and 30000.</li>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '683',
    name: 'K Empty Slots ',
    acceptance: '36.4%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nThere is a garden with <code>N</code> slots. In each slot, there is a flower. The <code>N</code> flowers will bloom one by one in <code>N</code> days. In each day, there will be <code>exactly</code> one flower blooming and it will be in the status of blooming since then.\n</p>\n\n<p>\nGiven an array <code>flowers</code> consists of number from <code>1</code> to <code>N</code>. Each number in the array represents the place where the flower will open in that day.\n</p>\n\n<p>\nFor example, <code>flowers[i] = x</code> means that the unique flower that blooms at day <code>i</code> will be at position <code>x</code>, where <code>i</code> and <code>x</code> will be in the range from <code>1</code> to <code>N</code>.\n</p>\n\n<p>\nAlso given an integer <code>k</code>, you need to output in which day there exists two flowers in the status of blooming, and also the number of flowers between them is <code>k</code> and these flowers are not blooming.\n</p>\n\n<p>\nIf there isn't such day, output -1.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nflowers: [1,3,2]\nk: 1\n<b>Output:</b> 2\n<b>Explanation:</b> In the second day, the first and the third flower have become blooming.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nflowers: [1,2,3]\nk: 1\n<b>Output:</b> -1\n</pre>\n<p></p>\n\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The given array will be in the range [1, 20000].</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '684',
    name: 'Redundant Connection',
    acceptance: '40.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nIn this problem, a tree is an <b>undirected</b> graph that is connected and has no cycles.\n</p><p>\nThe given input is a graph that started as a tree with N nodes (with distinct values 1, 2, ..., N), with one additional edge added.  The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.\n</p><p>\nThe resulting graph is given as a 2D-array of <code>edges</code>.  Each element of <code>edges</code> is a pair <code>[u, v]</code> with <code>u &lt; v</code>, that represents an <b>undirected</b> edge connecting nodes <code>u</code> and <code>v</code>.\n</p><p>\nReturn an edge that can be removed so that the resulting graph is a tree of N nodes.  If there are multiple answers, return the answer that occurs last in the given 2D-array.  The answer edge <code>[u, v]</code> should be in the same format, with <code>u &lt; v</code>.\n</p><p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [[1,2], [1,3], [2,3]]\n<b>Output:</b> [2,3]\n<b>Explanation:</b> The given undirected graph will be like this:\n  1\n / \\\n2 - 3\n</pre>\n<p></p>\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [[1,2], [2,3], [3,4], [1,4], [1,5]]\n<b>Output:</b> [1,4]\n<b>Explanation:</b> The given undirected graph will be like this:\n5 - 1 - 2\n    |   |\n    4 - 3\n</pre>\n<p></p>\n<p><b>Note:</b><br>\n</p><li>The size of the input 2D-array will be between 3 and 1000.</li>\n<li>Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.</li>\n<p></p>\n\n<br>\n\n<p>\n<b><font color="red">Update (2017-09-26):</font></b><br>\nWe have overhauled the problem description + test cases and specified clearly the graph is an <b><i>undirected</i></b> graph. For the <b><i>directed</i></b> graph follow up please see <b><a href="https://leetcode.com/problems/redundant-connection-ii/description/">Redundant Connection II</a></b>). We apologize for any inconvenience caused.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '685',
    name: 'Redundant Connection II',
    acceptance: '28.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nIn this problem, a rooted tree is a <b>directed</b> graph such that, there is exactly one node (the root) for which all other nodes are descendants of this node, plus every node has exactly one parent, except for the root node which has no parents.\n</p><p>\nThe given input is a directed graph that started as a rooted tree with N nodes (with distinct values 1, 2, ..., N), with one additional directed edge added.  The added edge has two different vertices chosen from 1 to N, and was not an edge that already existed.\n</p><p>\nThe resulting graph is given as a 2D-array of <code>edges</code>.  Each element of <code>edges</code> is a pair <code>[u, v]</code> that represents a <b>directed</b> edge connecting nodes <code>u</code> and <code>v</code>, where <code>u</code> is a parent of child <code>v</code>.\n</p><p>\nReturn an edge that can be removed so that the resulting graph is a rooted tree of N nodes.  If there are multiple answers, return the answer that occurs last in the given 2D-array.\n</p><p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [[1,2], [1,3], [2,3]]\n<b>Output:</b> [2,3]\n<b>Explanation:</b> The given directed graph will be like this:\n  1\n / \\\nv   v\n2--&gt;3\n</pre>\n<p></p>\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [[1,2], [2,3], [3,4], [4,1], [1,5]]\n<b>Output:</b> [4,1]\n<b>Explanation:</b> The given directed graph will be like this:\n5 &lt;- 1 -&gt; 2\n     ^    |\n     |    v\n     4 &lt;- 3\n</pre>\n<p></p>\n<p><b>Note:</b><br>\n</p><li>The size of the input 2D-array will be between 3 and 1000.</li>\n<li>Every integer represented in the 2D-array will be between 1 and N, where N is the size of the input array.</li>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '686',
    name: 'Repeated String Match',
    acceptance: '34.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given two strings A and B, find the minimum number of times A has to be repeated such that B is a substring of it. If no such solution, return -1.</p>\n\n<p>\nFor example, with A = "abcd" and B = "cdabcdab". </p>\n\n<p>\nReturn 3, because by repeating A three times (“abcdabcdabcd”), B is a substring of it; and B is not a substring of A repeated two times ("abcdabcd").\n</p>\n\n<p><b>Note:</b><br>\nThe length of <code>A</code> and <code>B</code> will be between 1 and 10000.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '687',
    name: 'Longest Univalue Path',
    acceptance: '34.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree, find the length of the longest path where each node in the path has the same value. This path may or may not pass through the root.</p>\n\n<p><b>Note:</b> The length of path between two nodes is represented by the number of edges between them.</p>\n\n<p>\n<b>Example 1:</b>\n</p>\n\n\n<p>\nInput:\n</p><pre>              5\n             / \\\n            4   5\n           / \\   \\\n          1   1   5\n</pre>\n<p></p>\n\n<p>\nOutput:\n</p><pre>2\n</pre>\n<p></p>\n\n<p>\n<b>Example 2:</b>\n</p>\n\n\n<p>\nInput:\n</p><pre>              1\n             / \\\n            4   5\n           / \\   \\\n          4   4   5\n</pre>\n<p></p>\n\n<p>\nOutput:\n</p><pre>2\n</pre>\n<p></p>\n\n<p><b>Note:</b>\nThe given binary tree has not more than 10000 nodes.  The height of the tree is not more than 1000.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '688',
    name: 'Knight Probability in Chessboard',
    acceptance: '39.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nOn an <code>N</code>x<code>N</code> chessboard, a knight starts at the <code>r</code>-th row and <code>c</code>-th column and attempts to make exactly <code>K</code> moves.  The rows and columns are 0 indexed, so the top-left square is <code>(0, 0)</code>, and the bottom-right square is <code>(N-1, N-1)</code>.\n</p>\n\n<p>\nA chess knight has 8 possible moves it can make, as illustrated below.  Each move is two squares in a cardinal direction, then one square in an orthogonal direction.\n</p>\n\n<img src="https://leetcode.com/static/images/problemset/knight.png" style="width:200px; height:200px">\n\n<p>\nEach time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.\n</p>\n\n<p>\nThe knight continues moving until it has made exactly <code>K</code> moves or has moved off the chessboard.  Return the probability that the knight remains on the board after it has stopped moving.\n</p>\n\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> 3, 2, 0, 0\n<b>Output:</b> 0.0625\n<b>Explanation:</b> There are two moves (to (1,2), (2,1)) that will keep the knight on the board.\nFrom each of those positions, there are also two moves that will keep the knight on the board.\nThe total probability the knight stays on the board is 0.0625.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><li><code>N</code> will be between 1 and 25.</li>\n<li><code>K</code> will be between 0 and 100.</li>\n<li>The knight always initially starts on the board.</li>\n<p></p>\n          ',
    tags: ['Goldman Sachs'],
  },
  {
    id: '689',
    name: 'Maximum Sum of 3 Non-Overlapping Subarrays',
    acceptance: '41.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nIn a given array <code>nums</code> of positive integers, find three non-overlapping subarrays with maximum sum.\n</p>\n<p>\nEach subarray will be of size <code>k</code>, and we want to maximize the sum of all <code>3*k</code> entries.\n</p>\n<p>\nReturn the result as a list of indices representing the starting position of each interval (0-indexed).  If there are multiple answers, return the lexicographically smallest one.\n</p>\n<p><b>Example:</b><br>\n</p><pre><b>Input:</b> [1,2,1,2,6,7,5,1], 2\n<b>Output:</b> [0, 3, 5]\n<b>Explanation:</b> Subarrays [1, 2], [2, 6], [7, 5] correspond to the starting indices [0, 3, 5].\nWe could have also taken [2, 1], but an answer of [1, 3, 5] would be lexicographically larger.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><li><code>nums.length</code> will be between 1 and 20000.</li>\n<li><code>nums[i]</code> will be between 1 and 65535.</li>\n<li><code>k</code> will be between 1 and floor(nums.length / 3).</li>\n<p></p>\n          ',
    tags: ['Google', 'Facebook'],
  },
  {
    id: '690',
    name: 'Employee Importance',
    acceptance: '52.5%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>You are given a data structure of employee information, which includes the employee's <b>unique id</b>, his <b>importance value</b> and his <b>direct</b> subordinates' id. </p>\n\n<p>For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is <b>not direct</b>.</p>\n\n<p>Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all his subordinates.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1\n<b>Output:</b> 11\n<b>Explanation:</b>\nEmployee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>One employee has at most one <b>direct</b> leader and may have several subordinates.</li>\n<li>The maximum number of employees won't exceed 2000.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Uber'],
  },
  {
    id: '691',
    name: 'Stickers to Spell Word',
    acceptance: '33.9%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nWe are given N different types of stickers.  Each sticker has a lowercase English word on it.\n</p><p>\nYou would like to spell out the given <code>target</code> string by cutting individual letters from your collection of stickers and rearranging them.\n</p><p>\nYou can use each sticker more than once if you want, and you have infinite quantities of each sticker.\n</p><p>\nWhat is the minimum number of stickers that you need to spell out the <code>target</code>?  If the task is impossible, return -1.\n</p>\n\n<p><b>Example 1:</b></p>\n<p>Input:</p><pre>["with", "example", "science"], "thehat"\n</pre><p></p>\n\n<p>Output:</p><pre>3\n</pre><p></p>\n\n<p>Explanation:</p><pre>We can use 2 "with" stickers, and 1 "example" sticker.\nAfter cutting and rearrange the letters of those stickers, we can form the target "thehat".\nAlso, this is the minimum number of stickers necessary to form the target string.\n</pre><p></p>\n\n<p><b>Example 2:</b></p>\n<p>Input:</p><pre>["notice", "possible"], "basicbasic"\n</pre><p></p>\n\n<p>Output:</p><pre>-1\n</pre><p></p>\n\n<p>Explanation:</p><pre>We can\'t form the target "basicbasic" from cutting letters from the given stickers.\n</pre><p></p>\n\n<p><b>Note:</b>\n</p><li><code>stickers</code> has length in the range <code>[1, 50]</code>.</li>\n<li><code>stickers</code> consists of lowercase English words (without apostrophes).</li>\n<li><code>target</code> has length in the range <code>[1, 15]</code>, and consists of lowercase English letters.</li>\n<li>In all test cases, all words were chosen <u>randomly</u> from the 1000 most common US English words, and the target was chosen as a concatenation of two random words.</li>\n<li>The time limit may be more challenging than usual.  It is expected that a 50 sticker test case can be solved within 35ms on average.</li>\n<p></p>\n          ',
    tags: ['IXL'],
  },
  {
    id: '692',
    name: 'Top K Frequent Words',
    acceptance: '40.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a non-empty list of words, return the <i>k</i> most frequent elements.</p>\n<p>Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> ["i", "love", "leetcode", "i", "love", "coding"], k = 2\n<b>Output:</b> ["i", "love"]\n<b>Explanation:</b> "i" and "love" are the two most frequent words.\n    Note that "i" comes before "love" due to a lower alphabetical order.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4\n<b>Output:</b> ["the", "is", "sunny", "day"]\n<b>Explanation:</b> "the", "is", "sunny" and "day" are the four most frequent words,\n    with the number of occurrence being 4, 3, 2 and 1 respectively.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>You may assume <i>k</i> is always valid, 1 ≤ <i>k</i> ≤ number of unique elements.</li>\n<li>Input words contain only lowercase letters.</li>\n</ol>\n<p></p>\n\n<p><b>Follow up:</b><br>\n</p><ol>\n<li>Try to solve it in <i>O</i>(<i>n</i> log <i>k</i>) time and <i>O</i>(<i>n</i>) extra space.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Amazon', 'Bloomberg', 'Uber', 'Yelp', 'Pocket Gems'],
  },
  {
    id: '693',
    name: 'Binary Number with Alternating Bits',
    acceptance: '54.8%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> 5\n<b>Output:</b> True\n<b>Explanation:</b>\nThe binary representation of 5 is: 101\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> 7\n<b>Output:</b> False\n<b>Explanation:</b>\nThe binary representation of 7 is: 111.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> 11\n<b>Output:</b> False\n<b>Explanation:</b>\nThe binary representation of 11 is: 1011.\n</pre>\n<p></p>\n\n<p><b>Example 4:</b><br>\n</p><pre><b>Input:</b> 10\n<b>Output:</b> True\n<b>Explanation:</b>\nThe binary representation of 10 is: 1010.\n</pre>\n<p></p>\n          ',
    tags: ['Yahoo'],
  },
  {
    id: '694',
    name: 'Number of Distinct Islands ',
    acceptance: '44.7%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given a non-empty 2D array <code>grid</code> of 0's and 1's, an <b>island</b> is a group of <code>1</code>'s (representing land) connected 4-directionally (horizontal or vertical.)  You may assume all four edges of the grid are surrounded by water.</p>\n\n<p>Count the number of <b>distinct</b> islands.  An island is considered to be the same as another if and only if one island can be translated (and not rotated or reflected) to equal the other.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>11000\n11000\n00011\n00011\n</pre>\nGiven the above grid map, return <code>1</code>.\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>11011\n10000\n00001\n11011</pre>\nGiven the above grid map, return <code>3</code>.<br><br>\nNotice that:\n<pre>11\n1\n</pre>\nand\n<pre> 1\n11\n</pre>\nare considered different island shapes, because we do not consider reflection / rotation.\n<p></p>\n\n<p><b>Note:</b>\nThe length of each dimension in the given <code>grid</code> does not exceed 50.\n</p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '695',
    name: 'Max Area of Island',
    acceptance: '52.3%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p></p><p>Given a non-empty 2D array <code>grid</code> of 0's and 1's, an <b>island</b> is a group of <code>1</code>'s (representing land) connected 4-directionally (horizontal or vertical.)  You may assume all four edges of the grid are surrounded by water.</p>\n<p>\nFind the maximum area of an island in the given 2D array.\n(If there is no island, the maximum area is 0.)\n</p>\n<p><b>Example 1:</b><br>\n</p><pre>[[0,0,1,0,0,0,0,1,0,0,0,0,0],\n [0,0,0,0,0,0,0,1,1,1,0,0,0],\n [0,1,1,0,1,0,0,0,0,0,0,0,0],\n [0,1,0,0,1,1,0,0,<b>1</b>,0,<b>1</b>,0,0],\n [0,1,0,0,1,1,0,0,<b>1</b>,<b>1</b>,<b>1</b>,0,0],\n [0,0,0,0,0,0,0,0,0,0,<b>1</b>,0,0],\n [0,0,0,0,0,0,0,1,1,1,0,0,0],\n [0,0,0,0,0,0,0,1,1,0,0,0,0]]\n</pre>\nGiven the above grid, return <code>6</code>.\n\nNote the answer is not 11, because the island must be connected 4-directionally.\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>[[0,0,0,0,0,0,0,0]]</pre>\nGiven the above grid, return <code>0</code>.\n<p></p>\n\n<p><b>Note:</b>\nThe length of each dimension in the given <code>grid</code> does not exceed 50.\n</p>\n          ",
    tags: ['Intuit'],
  },
  {
    id: '696',
    name: 'Count Binary Substrings',
    acceptance: '52.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Give a string <code>s</code>, count the number of non-empty (contiguous) substrings that have the same number of 0\'s and 1\'s, and all the 0\'s and all the 1\'s in these substrings are grouped consecutively. \n</p>\n<p>Substrings that occur multiple times are counted the number of times they occur.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> "00110011"\n<b>Output:</b> 6\n<b>Explanation:</b> There are 6 substrings that have equal number of consecutive 1\'s and 0\'s: "0011", "01", "1100", "10", "0011", and "01".\n<br>Notice that some of these substrings repeat and are counted the number of times they occur.\n<br>Also, "00110011" is not a valid substring because <b>all</b> the 0\'s (and 1\'s) are not grouped together.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> "10101"\n<b>Output:</b> 4\n<b>Explanation:</b> There are 4 substrings: "10", "01", "10", "01" that have equal number of consecutive 1\'s and 0\'s.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li><code>s.length</code> will be between 1 and 50,000.</li>\n<li><code>s</code> will only consist of "0" or "1" characters.</li>\n<p></p>\n          ',
    tags: ['Helix'],
  },
  {
    id: '697',
    name: 'Degree of an Array',
    acceptance: '46.6%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a non-empty array of non-negative integers <code>nums</code>, the <b>degree</b> of this array is defined as the maximum frequency of any one of its elements.</p>\n<p>Your task is to find the smallest possible length of a (contiguous) subarray of <code>nums</code>, that has the same degree as <code>nums</code>.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [1, 2, 2, 3, 1]\n<b>Output:</b> 2\n<b>Explanation:</b> \nThe input array has a degree of 2 because both elements 1 and 2 appear twice.\nOf the subarrays that have the same degree:\n[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]\nThe shortest length is 2. So return 2.\n</pre>\n<p></p>\n\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [1,2,2,3,1,4,2]\n<b>Output:</b> 6\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li><code>nums.length</code> will be between 1 and 50,000.</li>\n<li><code>nums[i]</code> will be an integer between 0 and 49,999.</li>\n<p></p>\n          ',
    tags: ['GE Digital'],
  },
  {
    id: '698',
    name: 'Partition to K Equal Sum Subsets',
    acceptance: '37.5%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>Given an array of integers <code>nums</code> and a positive integer <code>k</code>, find whether it's possible to divide this array into <code>k</code> non-empty subsets whose sums are all equal.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> nums = [4, 3, 2, 3, 5, 2, 1], k = 4\n<b>Output:</b> True\n<b>Explanation:</b> It's possible to divide it into 4 subsets (5), (1, 4), (2,3), (2,3) with equal sums.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li><code>1 &lt;= k &lt;= len(nums) &lt;= 16</code>.</li>\n<li><code>0 &lt; nums[i] &lt; 10000</code>.</li>\n<p></p>\n          ",
    tags: ['LinkedIn'],
  },
  {
    id: '699',
    name: 'Falling Squares',
    acceptance: '37.3%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>On an infinite number line (x-axis), we drop given squares in the order they are given.</p>\n<p>The <code>i</code>-th square dropped (<code>positions[i] = (left, side_length)</code>) is a square with the left-most point being <code>positions[i][0]</code> and sidelength <code>positions[i][1]</code>.</p>\n<p>The square is dropped with the bottom edge parallel to the number line, and from a higher height than all currently landed squares.  We wait for each square to stick before dropping the next.</p>\n<p>The squares are infinitely sticky on their bottom edge, and will remain fixed to any positive length surface they touch (either the number line or another square).  Squares dropped adjacent to each other will not stick together prematurely.</p>\n\n<br>\n<p>Return a list <code>ans</code> of heights.  Each height <code>ans[i]</code> represents the current highest height of any square we have dropped, after dropping squares represented by <code>positions[0], positions[1], ..., positions[i]</code>.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> [[1, 2], [2, 3], [6, 1]]\n<b>Output:</b> [2, 5, 5]\n<b>Explanation:</b>\n<p>\nAfter the first drop of <code>positions[0] = [1, 2]:\n_aa\n_aa\n-------\n</code>The maximum height of any square is 2.\n</p><p>\nAfter the second drop of <code>positions[1] = [2, 3]:\n__aaa\n__aaa\n__aaa\n_aa__\n_aa__\n--------------\n</code>The maximum height of any square is 5.  \nThe larger square stays on top of the smaller square despite where its center\nof gravity is, because squares are infinitely sticky on their bottom edge.\n</p><p>\nAfter the third drop of <code>positions[1] = [6, 1]:\n__aaa\n__aaa\n__aaa\n_aa\n_aa___a\n--------------\n</code>The maximum height of any square is still 5.\n\nThus, we return an answer of <code>[2, 5, 5]</code>.\n</p></pre>\n<p></p>\n\n<br>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> [[100, 100], [200, 100]]\n<b>Output:</b> [100, 100]\n<b>Explanation:</b> Adjacent squares don't get stuck prematurely - only their bottom edge can stick to surfaces.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li><code>1 &lt;= positions.length &lt;= 1000</code>.</li>\n<li><code>1 &lt;= positions[i][0] &lt;= 10^8</code>.</li>\n<li><code>1 &lt;= positions[i][1] &lt;= 10^6</code>.</li>\n<p></p>\n          ",
    tags: ['Uber', 'Square'],
  },
  {
    id: '711',
    name: 'Number of Distinct Islands II ',
    acceptance: '40.2%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>Given a non-empty 2D array <code>grid</code> of 0's and 1's, an <b>island</b> is a group of <code>1</code>'s (representing land) connected 4-directionally (horizontal or vertical.)  You may assume all four edges of the grid are surrounded by water.</p>\n\n<p>Count the number of <b>distinct</b> islands.  An island is considered to be the same as another if they have the same shape, or have the same shape after <b>rotation</b> (90, 180, or 270 degrees only) or <b>reflection</b> (left/right direction or up/down direction).</p>\n\n<p><b>Example 1:</b><br>\n</p><pre>11000\n10000\n00001\n00011\n</pre>\nGiven the above grid map, return <code>1</code>.\n<br><br>\nNotice that:\n<pre>11\n1\n</pre>\nand\n<pre> 1\n11\n</pre>\nare considered <b>same</b> island shapes. Because if we make a 180 degrees clockwise rotation on the first island, then two islands will have the same shapes.\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre>11100\n10001\n01001\n01110</pre>\nGiven the above grid map, return <code>2</code>.<br>\n<br>\nHere are the two distinct islands:\n<pre>111\n1\n</pre>\nand\n<pre>1\n1\n</pre>\n<br>\nNotice that:\n<pre>111\n1\n</pre>\nand\n<pre>1\n111\n</pre>\nare considered <b>same</b> island shapes. Because if we flip the first array in the up/down direction, then they have the same shapes.\n<p></p>\n\n<p><b>Note:</b>\nThe length of each dimension in the given <code>grid</code> does not exceed 50.\n</p>\n          ",
    tags: ['Amazon'],
  },
  {
    id: '712',
    name: 'Minimum ASCII Delete Sum for Two Strings',
    acceptance: '50.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given two strings <code>s1, s2</code>, find the lowest ASCII sum of deleted characters to make two strings equal.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> s1 = "sea", s2 = "eat"\n<b>Output:</b> 231\n<b>Explanation:</b> Deleting "s" from "sea" adds the ASCII value of "s" (115) to the sum.\nDeleting "t" from "eat" adds 116 to the sum.\nAt the end, both strings are equal, and 115 + 116 = 231 is the minimum sum possible to achieve this.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> s1 = "delete", s2 = "leet"\n<b>Output:</b> 403\n<b>Explanation:</b> Deleting "dee" from "delete" to turn the string into "let",\nadds 100[d]+101[e]+101[e] to the sum.  Deleting "e" from "leet" adds 101[e] to the sum.\nAt the end, both strings are equal to "let", and the answer is 100+101+101+101 = 403.\nIf instead we turned both strings into "lee" or "eet", we would get answers of 433 or 417, which are higher.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li><code>0 &lt; s1.length, s2.length &lt;= 1000</code>.</li>\n<li>All elements of each string will have an ASCII value in <code>[97, 122]</code>.</li> \n<p></p>\n          ',
    tags: ['TripleByte'],
  },
  {
    id: '713',
    name: 'Subarray Product Less Than K',
    acceptance: '33.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Your are given an array of positive integers <code>nums</code>.</p>\n<p>Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than <code>k</code>.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> nums = [10, 5, 2, 6], k = 100\n<b>Output:</b> 8\n<b>Explanation:</b> The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].\nNote that [10, 5, 2] is not included as the product of 100 is not strictly less than k.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li><code>0 &lt; nums.length &lt;= 50000</code>.</li>\n<li><code>0 &lt; nums[i] &lt; 1000</code>.</li>\n<li><code>0 &lt;= k &lt; 10^6</code>.</li>\n<p></p>\n          ',
    tags: ['Yatra'],
  },
  {
    id: '714',
    name: 'Best Time to Buy and Sell Stock with Transaction Fee',
    acceptance: '42.2%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Your are given an array of integers <code>prices</code>, for which the <code>i</code>-th element is the price of a given stock on day <code>i</code>; and a non-negative integer <code>fee</code> representing a transaction fee.</p>\n<p>You may complete as many transactions as you like, but you need to pay the transaction fee for each transaction.  You may not buy more than 1 share of a stock at a time (ie. you must sell the stock share before you buy again.)</p>\n<p>Return the maximum profit you can make.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> prices = [1, 3, 2, 8, 4, 9], fee = 2\n<b>Output:</b> 8\n<b>Explanation:</b> The maximum profit can be achieved by:\n<li>Buying at prices[0] = 1</li><li>Selling at prices[3] = 8</li><li>Buying at prices[4] = 4</li><li>Selling at prices[5] = 9</li>The total profit is ((8 - 1) - 2) + ((9 - 4) - 2) = 8.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li><code>0 &lt; prices.length &lt;= 50000</code>.</li>\n<li><code>0 &lt; prices[i] &lt; 50000</code>.</li>\n<li><code>0 &lt;= fee &lt; 50000</code>.</li>\n<p></p>\n          ',
    tags: ['Facebook', 'Bloomberg'],
  },
  {
    id: '715',
    name: 'Range Module',
    acceptance: '30.7%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>A Range Module is a module that tracks ranges of numbers. Your task is to design and implement the following interfaces in an efficient manner.</p>\n\n<p></p><li><code>addRange(int left, int right)</code> Adds the half-open interval <code>[left, right)</code>, tracking every real number in that interval.  Adding an interval that partially overlaps with currently tracked numbers should add any numbers in the interval <code>[left, right)</code> that are not already tracked.</li><p></p>\n\n<p></p><li><code>queryRange(int left, int right)</code> Returns true if and only if every real number in the interval <code>[left, right)</code>\n is currently being tracked.</li><p></p>\n\n<p></p><li><code>removeRange(int left, int right)</code> Stops tracking every real number currently being tracked in the interval <code>[left, right)</code>.</li><p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>addRange(10, 20)</b>: null\n<b>removeRange(14, 16)</b>: null\n<b>queryRange(10, 14)</b>: true (Every number in [10, 14) is being tracked)\n<b>queryRange(13, 15)</b>: false (Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)\n<b>queryRange(16, 17)</b>: true (The number 16 in [16, 17) is still being tracked, despite the remove operation)\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>A half open interval <code>[left, right)</code> denotes all real numbers <code>left &lt;= x &lt; right</code>.</li>\n\n<li><code>0 &lt; left &lt; right &lt; 10^9</code> in all calls to <code>addRange, queryRange, removeRange</code>.</li>\n<li>The total number of calls to <code>addRange</code> in a single test case is at most <code>1000</code>.</li>\n<li>The total number of calls to <code>queryRange</code> in a single test case is at most <code>5000</code>.</li>\n<li>The total number of calls to <code>removeRange</code> in a single test case is at most <code>1000</code>.</li>\n<p></p>\n          ',
    tags: ['Coupang', 'Machine Zone'],
  },
  {
    id: '716',
    name: 'Max Stack ',
    acceptance: '35.8%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>Design a max stack that supports push, pop, top, peekMax and popMax.</p>\n\n<p>\n</p><ol>\n<li>push(x) -- Push element x onto stack.</li>\n<li>pop() -- Remove the element on top of the stack and return it.</li>\n<li>top() -- Get the element on the top.</li>\n<li>peekMax() -- Retrieve the maximum element in the stack.</li>\n<li>popMax() -- Retrieve the maximum element in the stack, and remove it. If you find more than one maximum elements, only remove the top-most one.</li>\n</ol>\n<p></p>\n\n<p><b>Example 1:</b><br>\n</p><pre>MaxStack stack = new MaxStack();\nstack.push(5); \nstack.push(1);\nstack.push(5);\nstack.top(); -&gt; 5\nstack.popMax(); -&gt; 5\nstack.top(); -&gt; 1\nstack.peekMax(); -&gt; 5\nstack.pop(); -&gt; 1\nstack.top(); -&gt; 5\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>-1e7 &lt;= x &lt;= 1e7</li>\n<li>Number of operations won't exceed 10000.</li>\n<li>The last four operations won't be called when stack is empty.</li>\n</ol>\n<p></p>\n          ",
    tags: ['LinkedIn'],
  },
  {
    id: '717',
    name: '1-bit and 2-bit Characters',
    acceptance: '50.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>We have two special characters. The first character can be represented by one bit <code>0</code>. The second character can be represented by two bits (<code>10</code> or <code>11</code>).  </p>\n\n<p>Now given a string represented by several bits. Return whether the last character must be a one-bit character or not. The given string will always end with a zero.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nbits = [1, 0, 0]\n<b>Output:</b> True\n<b>Explanation:</b> \nThe only way to decode it is two-bit character and one-bit character. So the last character is one-bit character.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nbits = [1, 1, 1, 0]\n<b>Output:</b> False\n<b>Explanation:</b> \nThe only way to decode it is two-bit character and two-bit character. So the last character is NOT one-bit character.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li><code>1 &lt;= len(bits) &lt;= 1000</code>.</li>\n<li><code>bits[i]</code> is always <code>0</code> or <code>1</code>.</li>\n<p></p>\n          ',
    tags: ['Quora'],
  },
  {
    id: '718',
    name: 'Maximum Length of Repeated Subarray',
    acceptance: '40.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given two integer arrays <code>A</code> and <code>B</code>, return the maximum length of an subarray that appears in both arrays.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\nA: [1,2,3,2,1]\nB: [3,2,1,4,7]\n<b>Output:</b> 3\n<b>Explanation:</b> \nThe repeated subarray with maximum length is [3, 2, 1].\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>1 &lt;= len(A), len(B) &lt;= 1000</li>\n<li>0 &lt;= A[i], B[i] &lt; 100</li>\n</ol>\n<p></p>\n          ',
    tags: ['Citadel'],
  },
  {
    id: '719',
    name: 'Find K-th Smallest Pair Distance',
    acceptance: '26.3%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given an integer array, return the k-th smallest <b>distance</b> among all the pairs. The distance of a pair (A, B) is defined as the absolute difference between A and B. </p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b>\nnums = [1,3,1]\nk = 1\n<b>Output: 0</b> \n<b>Explanation:</b>\nHere are all the pairs:\n(1,3) -&gt; 2\n(1,1) -&gt; 0\n(3,1) -&gt; 2\nThen the 1st smallest distance pair is (1,1), and its distance is 0.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>2 &lt;= len(nums) &lt;= 10000</code>.</li>\n<li><code>0 &lt;= nums[i] &lt; 1000000</code>.</li>\n<li><code>1 &lt;= k &lt;= len(nums) * (len(nums) - 1) / 2</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '720',
    name: 'Longest Word in Dictionary',
    acceptance: '40.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given a list of strings <code>words</code> representing an English Dictionary, find the longest word in <code>words</code> that can be built one character at a time by other words in <code>words</code>.  If there is more than one possible answer, return the longest word with the smallest lexicographical order.</p>  If there is no answer, return the empty string.\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nwords = ["w","wo","wor","worl", "world"]\n<b>Output:</b> "world"\n<b>Explanation:</b> \nThe word "world" can be built one character at a time by "w", "wo", "wor", and "worl".\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nwords = ["a", "banana", "app", "appl", "ap", "apply", "apple"]\n<b>Output:</b> "apple"\n<b>Explanation:</b> \nBoth "apply" and "apple" can be built from other words in the dictionary. However, "apple" is lexicographically smaller than "apply".\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>All the strings in the input will only contain lowercase letters.</li>\n<li>The length of <code>words</code> will be in the range <code>[1, 1000]</code>.</li>\n<li>The length of <code>words[i]</code> will be in the range <code>[1, 30]</code>.</li>\n<p></p>\n          ',
    tags: ['Pinterest'],
  },
  {
    id: '721',
    name: 'Accounts Merge',
    acceptance: '30.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a list <code>accounts</code>, each element <code>accounts[i]</code> is a list of strings, where the first element <code>accounts[i][0]</code> is a <i>name</i>, and the rest of the elements are <i>emails</i> representing emails of the account.</p>\n\n<p>Now, we would like to merge these accounts.  Two accounts definitely belong to the same person if there is some email that is common to both accounts.  Note that even if two accounts have the same name, they may belong to different people as people could have the same name.  A person can have any number of accounts initially, but all of their accounts definitely have the same name.</p>\n\n<p>After merging the accounts, return the accounts in the following format: the first element of each account is the name, and the rest of the elements are emails <b>in sorted order</b>.  The accounts themselves can be returned in any order.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre style="white-space: pre-wrap"><b>Input:</b> \naccounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]]\n<b>Output:</b> [["John", \'john00@mail.com\', \'john_newyork@mail.com\', \'johnsmith@mail.com\'],  ["John", "johnnybravo@mail.com"], ["Mary", "mary@mail.com"]]\n<b>Explanation:</b> \nThe first and third John\'s are the same person as they have the common email "johnsmith@mail.com".\nThe second John and Mary are different people as none of their email addresses are used by other accounts.\nWe could return these lists in any order, for example the answer [[\'Mary\', \'mary@mail.com\'], [\'John\', \'johnnybravo@mail.com\'], \n[\'John\', \'john00@mail.com\', \'john_newyork@mail.com\', \'johnsmith@mail.com\']] would still be accepted.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>accounts</code> will be in the range <code>[1, 1000]</code>.</li>\n<li>The length of <code>accounts[i]</code> will be in the range <code>[1, 10]</code>.</li>\n<li>The length of <code>accounts[i][j]</code> will be in the range <code>[1, 30]</code>.</li>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '722',
    name: 'Remove Comments',
    acceptance: '26.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a C++ program, remove comments from it. The program <code>source</code> is an array where <code>source[i]</code> is the <code>i</code>-th line of the source code.  This represents the result of splitting the original source code string by the newline character <code>\\n</code>.</p>\n\n<p>In C++, there are two types of comments, line comments, and block comments.</p>\n<p>\nThe string <code>//</code> denotes a line comment, which represents that it and rest of the characters to the right of it in the same line should be ignored.\n</p><p>\nThe string <code>/*</code> denotes a block comment, which represents that all characters until the next (non-overlapping) occurrence of <code>*/</code> should be ignored.  (Here, occurrences happen in reading order: line by line from left to right.)  To be clear, the string <code>/*/</code> does not yet end the block comment, as the ending would be overlapping the beginning.\n</p><p>\nThe first effective comment takes precedence over others: if the string <code>//</code> occurs in a block comment, it is ignored. Similarly, if the string <code>/*</code> occurs in a line or block comment, it is also ignored.\n</p><p>\nIf a certain line of code is empty after removing comments, you must not output that line: each string in the answer list will be non-empty.\n</p><p>\nThere will be no control characters, single quote, or double quote characters.  For example, <code>source = "string s = "/* Not a comment. */";"</code> will not be a test case.  (Also, nothing else such as defines or macros will interfere with the comments.)\n</p><p>\nIt is guaranteed that every open block comment will eventually be closed, so <code>/*</code> outside of a line or block comment always starts a new comment.\n</p><p>\nFinally, implicit newline characters can be deleted by block comments.  Please see the examples below for details.\n</p>\n\n<p>After removing the comments from the source code, return the source code in the same format.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre style="white-space: pre-wrap"><b>Input:</b> \nsource = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]\n\nThe line by line code is visualized as below:\n/*Test program */\nint main()\n{ \n  // variable declaration \nint a, b, c;\n/* This is a test\n   multiline  \n   comment for \n   testing */\na = b + c;\n}\n\n<b>Output:</b> ["int main()","{ ","  ","int a, b, c;","a = b + c;","}"]\n\nThe line by line code is visualized as below:\nint main()\n{ \n  \nint a, b, c;\na = b + c;\n}\n\n<b>Explanation:</b> \nThe string <code>/*</code> denotes a block comment, including line 1 and lines 6-9. The string <code>//</code> denotes line 4 as comments.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre style="white-space: pre-wrap"><b>Input:</b> \nsource = ["a/*comment", "line", "more_comment*/b"]\n<b>Output:</b> ["ab"]\n<b>Explanation:</b> The original source string is "a/*comment<b>\\n</b>line<b>\\n</b>more_comment*/b", where we have bolded the newline characters.  After deletion, the <i>implicit</i> newline characters are deleted, leaving the string "ab", which when delimited by newline characters becomes ["ab"].\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>source</code> is in the range <code>[1, 100]</code>.</li>\n<li>The length of <code>source[i]</code> is in the range <code>[0, 80]</code>.</li>\n<li>Every open block comment is eventually closed.</li>\n<li>There are no single-quote, double-quote, or control characters in the source code.</li>\n<p></p>\n          ',
    tags: ['Microsoft'],
  },
  {
    id: '723',
    name: 'Candy Crush ',
    acceptance: '55.8%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>This question is about implementing a basic elimination algorithm for Candy Crush.</p>\n\n<p>Given a 2D integer array <code>board</code> representing the grid of candy, different positive integers <code>board[i][j]</code> represent different types of candies.  A value of <code>board[i][j] = 0</code> represents that the cell at position <code>(i, j)</code> is empty.  The given board represents the state of the game following the player\'s move.  Now, you need to restore the board to a <i>stable state</i> by crushing candies according to the following rules:</p>\n\n<ol>\n<li>If three or more candies of the same type are adjacent vertically or horizontally, "crush" them all at the same time - these positions become empty.</li>\n<li>After crushing all candies simultaneously, if an empty space on the board has candies on top of itself, then these candies will drop until they hit a candy or bottom at the same time. (No new candies will drop outside the top boundary.)</li>\n<li>After the above steps, there may exist more candies that can be crushed.  If so, you need to repeat the above steps.</li>\n<li>If there does not exist more candies that can be crushed (ie. the board is <i>stable</i>), then return the current board.</li>\n</ol>\n\n<p>You need to perform the above rules until the board becomes stable, then return the current board.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre style="white-space: pre-line"><b>Input:</b>\nboard = \n[[110,5,112,113,114],[210,211,5,213,214],[310,311,3,313,314],[410,411,412,5,414],[5,1,512,3,3],[610,4,1,613,614],[710,1,2,713,714],[810,1,2,1,1],[1,1,2,2,2],[4,1,4,4,1014]]\n<b>Output:</b>\n[[0,0,0,0,0],[0,0,0,0,0],[0,0,0,0,0],[110,0,0,0,114],[210,0,0,0,214],[310,0,0,113,314],[410,0,0,213,414],[610,211,112,313,614],[710,311,412,613,714],[810,411,512,713,1014]]\n<b>Explanation:</b> \n<img src="https://leetcode.com/static/images/problemset/candy_crush_example_2.png">\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of <code>board</code> will be in the range [3, 50].</li>\n<li>The length of <code>board[i]</code> will be in the range [3, 50].</li>\n<li>Each <code>board[i][j]</code> will initially start as an integer in the range [1, 2000].</li>\n</ol>\n<p></p>\n          ',
    tags: ['Rubrik'],
  },
  {
    id: '724',
    name: 'Find Pivot Index',
    acceptance: '40.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given an array of integers <code>nums</code>, write a method that returns the "pivot" index of this array.\n</p><p>\nWe define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.\n</p><p>\nIf no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nnums = [1, 7, 3, 6, 5, 6]\n<b>Output:</b> 3\n<b>Explanation:</b> \nThe sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.\nAlso, 3 is the first index where this occurs.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nnums = [1, 2, 3]\n<b>Output:</b> -1\n<b>Explanation:</b> \nThere is no index that satisfies the conditions in the problem statement.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>nums</code> will be in the range <code>[0, 10000]</code>.</li>\n<li>Each element <code>nums[i]</code> will be an integer in the range <code>[-1000, 1000]</code>.</li>\n<p></p>\n          ',
    tags: ['Coupang', 'Radius'],
  },
  {
    id: '725',
    name: 'Split Linked List in Parts',
    acceptance: '49.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a (singly) linked list with head node <code>root</code>, write a function to split the linked list into <code>k</code> consecutive linked list "parts".\n</p><p>\nThe length of each part should be as equal as possible: no two parts should have a size differing by more than 1.  This may lead to some parts being null.\n</p><p>\nThe parts should be in order of occurrence in the input list, and parts occurring earlier should always have a size greater than or equal parts occurring later.\n</p><p>\nReturn a List of ListNode\'s representing the linked list parts that are formed.\n</p>\n\nExamples\n1-&gt;2-&gt;3-&gt;4, k = 5 // 5 equal parts\n[ [1], \n[2],\n[3],\n[4],\nnull ]\n\n<p><b>Example 1:</b><br>\n</p><pre style="white-space: pre-line"><b>Input:</b> \nroot = [1, 2, 3], k = 5\n<b>Output:</b> [[1],[2],[3],[],[]]\n<b>Explanation:</b>\nThe input and each element of the output are ListNodes, not arrays.\nFor example, the input root has root.val = 1, root.next.val = 2, \\root.next.next.val = 3, and root.next.next.next = null.\nThe first element output[0] has output[0].val = 1, output[0].next = null.\nThe last element output[4] is null, but it\'s string representation as a ListNode is [].\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nroot = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], k = 3\n<b>Output:</b> [[1, 2, 3, 4], [5, 6, 7], [8, 9, 10]]\n<b>Explanation:</b>\nThe input has been split into consecutive parts with size difference at most 1, and earlier parts are a larger size than the later parts.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>root</code> will be in the range <code>[0, 1000]</code>.</li>\n<li>Each value of a node in the input will be an integer in the range <code>[0, 999]</code>.</li>\n<li><code>k</code> will be an integer in the range <code>[1, 50]</code>.</li>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '726',
    name: 'Number of Atoms',
    acceptance: '44.9%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>Given a chemical <code>formula</code> (given as a string), return the count of each atom.\n</p><p>\nAn atomic element always starts with an uppercase character, then zero or more lowercase letters, representing the name.\n</p><p>\n1 or more digits representing the count of that element may follow if the count is greater than 1.  If the count is 1, no digits will follow.  For example, H2O and H2O2 are possible, but H1O2 is impossible.\n</p><p>\nTwo formulas concatenated together produce another formula.  For example, H2O2He3Mg4 is also a formula.  \n</p><p>\nA formula placed in parentheses, and a count (optionally added) is also a formula.  For example, (H2O2) and (H2O2)3 are formulas.\n</p><p>\nGiven a formula, output the count of all elements as a string in the following form: the first name (in sorted order), followed by its count (if that count is more than 1), followed by the second name (in sorted order), followed by its count (if that count is more than 1), and so on.</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nformula = \"H2O\"\n<b>Output:</b> \"H2O\"\n<b>Explanation:</b> \nThe count of elements are {'H': 2, 'O': 1}.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nformula = \"Mg(OH)2\"\n<b>Output:</b> \"H2MgO2\"\n<b>Explanation:</b> \nThe count of elements are {'H': 2, 'Mg': 1, 'O': 2}.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> \nformula = \"K4(ON(SO3)2)2\"\n<b>Output:</b> \"K4N2O14S4\"\n<b>Explanation:</b> \nThe count of elements are {'K': 4, 'N': 2, 'O': 14, 'S': 4}.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>All atom names consist of lowercase letters, except for the first character which is uppercase.</li>\n<li>The length of <code>formula</code> will be in the range <code>[1, 1000]</code>.</li>\n<li><code>formula</code> will only consist of letters, digits, and round parentheses, and is a valid formula as defined in the problem.</li>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '727',
    name: 'Minimum Window Subsequence ',
    acceptance: '30.6%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>Given strings <code>S</code> and <code>T</code>, find the minimum (contiguous) <b>substring</b> <code>W</code> of <code>S</code>, so that <code>T</code> is a <b>subsequence</b> of <code>W</code>.\n</p><p>\nIf there is no such window in <code>S</code> that covers all characters in <code>T</code>, return the empty string <code>""</code>.  If there are multiple such minimum-length windows, return the one with the left-most starting index.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nS = "abcdebdde", T = "bde"\n<b>Output:</b> "bcde"\n<b>Explanation:</b> \n"bcde" is the answer because it occurs before "bdde" which has the same length.\n"deb" is not a smaller window because the elements of T in the window must occur in order.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>All the strings in the input will only contain lowercase letters.</li>\n<li>The length of <code>S</code> will be in the range <code>[1, 20000]</code>.</li>\n<li>The length of <code>T</code> will be in the range <code>[1, 100]</code>.</li>\n<p></p>\n          ',
    tags: ['Google', 'eBay'],
  },
  {
    id: '728',
    name: 'Self Dividing Numbers',
    acceptance: '68.1%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nA <i>self-dividing number</i> is a number that is divisible by every digit it contains.\n</p><p>\nFor example, 128 is a self-dividing number because <code>128 % 1 == 0</code>, <code>128 % 2 == 0</code>, and <code>128 % 8 == 0</code>.\n</p><p>\nAlso, a self-dividing number is not allowed to contain the digit zero.\n</p><p>\nGiven a lower and upper number bound, output a list of every possible self dividing number, including the bounds if possible.\n</p>\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nleft = 1, right = 22\n<b>Output:</b> [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12, 15, 22]\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The boundaries of each input argument are <code>1 &lt;= left &lt;= right &lt;= 10000</code>.</li>\n<p></p>\n          ',
    tags: ['Epic Systems'],
  },
  {
    id: '729',
    name: 'My Calendar I',
    acceptance: '40.3%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nImplement a <code>MyCalendar</code> class to store your events. A new event can be added if adding the event will not cause a double booking.\n</p><p>\nYour class will have the method, <code>book(int start, int end)</code>.  Formally, this represents a booking on the half open interval <code>[start, end)</code>, the range of real numbers <code>x</code> such that <code>start &lt;= x &lt; end</code>.\n</p><p>\nA <i>double booking</i> happens when two events have some non-empty intersection (ie., there is some time that is common to both events.)\n</p><p>\nFor each call to the method <code>MyCalendar.book</code>, return <code>true</code> if the event can be added to the calendar successfully without causing a double booking.  Otherwise, return <code>false</code> and do not add the event to the calendar.\n</p>\n\nYour class will be called like this:\n<code>MyCalendar cal = new MyCalendar();</code>\n<code>MyCalendar.book(start, end)</code>\n\n<p><b>Example 1:</b><br>\n</p><pre>MyCalendar();\nMyCalendar.book(10, 20); // returns true\nMyCalendar.book(15, 25); // returns false\nMyCalendar.book(20, 30); // returns true\n<b>Explanation:</b> \nThe first event can be booked.  The second can't because time 15 is already booked by another event.\nThe third event can be booked, as the first event takes every time less than 20, but not including 20.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The number of calls to <code>MyCalendar.book</code> per test case will be at most <code>1000</code>.</li>\n<li>In calls to <code>MyCalendar.book(start, end)</code>, <code>start</code> and <code>end</code> are integers in the range <code>[0, 10^9]</code>.</li>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '730',
    name: 'Count Different Palindromic Subsequences',
    acceptance: '32.5%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nGiven a string S, find the number of different non-empty palindromic subsequences in S, and <b>return that number modulo <code>10^9 + 7</code>.</b>\n</p><p>\nA subsequence of a string S is obtained by deleting 0 or more characters from S.\n</p><p>\nA sequence is palindromic if it is equal to the sequence reversed.\n</p><p>\nTwo sequences <code>A_1, A_2, ...</code> and <code>B_1, B_2, ...</code> are different if there is some <code>i</code> for which <code>A_i != B_i</code>.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nS = 'bccb'\n<b>Output:</b> 6\n<b>Explanation:</b> \nThe 6 different non-empty palindromic subsequences are 'b', 'c', 'bb', 'cc', 'bcb', 'bccb'.\nNote that 'bcb' is counted only once, even though it occurs twice.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nS = 'abcdabcdabcdabcdabcdabcdabcdabcddcbadcbadcbadcbadcbadcbadcbadcba'\n<b>Output:</b> 104860361\n<b>Explanation:</b> \nThere are 3104860382 different non-empty palindromic subsequences, which is 104860361 modulo 10^9 + 7.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>S</code> will be in the range <code>[1, 1000]</code>.</li>\n<li>Each character <code>S[i]</code> will be in the set <code>{'a', 'b', 'c', 'd'}</code>.</li>\n<p></p>\n          ",
    tags: ['LinkedIn'],
  },
  {
    id: '731',
    name: 'My Calendar II',
    acceptance: '35.4%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nImplement a <code>MyCalendarTwo</code> class to store your events. A new event can be added if adding the event will not cause a <b>triple</b> booking.\n</p><p>\nYour class will have one method, <code>book(int start, int end)</code>.  Formally, this represents a booking on the half open interval <code>[start, end)</code>, the range of real numbers <code>x</code> such that <code>start &lt;= x &lt; end</code>.\n</p><p>\nA <i>triple booking</i> happens when <b>three</b> events have some non-empty intersection (ie., there is some time that is common to all 3 events.)\n</p><p>\nFor each call to the method <code>MyCalendar.book</code>, return <code>true</code> if the event can be added to the calendar successfully without causing a <b>triple</b> booking.  Otherwise, return <code>false</code> and do not add the event to the calendar.\n</p>\n\nYour class will be called like this:\n<code>MyCalendar cal = new MyCalendar();</code>\n<code>MyCalendar.book(start, end)</code>\n\n<p><b>Example 1:</b><br>\n</p><pre>MyCalendar();\nMyCalendar.book(10, 20); // returns true\nMyCalendar.book(50, 60); // returns true\nMyCalendar.book(10, 40); // returns true\nMyCalendar.book(5, 15); // returns false\nMyCalendar.book(5, 10); // returns true\nMyCalendar.book(25, 55); // returns true\n<b>Explanation:</b> \nThe first two events can be booked.  The third event can be double booked.\nThe fourth event (5, 15) can't be booked, because it would result in a triple booking.\nThe fifth event (5, 10) can be booked, as it does not use time 10 which is already double booked.\nThe sixth event (25, 55) can be booked, as the time in [25, 40) will be double booked with the third event;\nthe time [40, 50) will be single booked, and the time [50, 55) will be double booked with the second event.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The number of calls to <code>MyCalendar.book</code> per test case will be at most <code>1000</code>.</li>\n<li>In calls to <code>MyCalendar.book(start, end)</code>, <code>start</code> and <code>end</code> are integers in the range <code>[0, 10^9]</code>.</li>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '732',
    name: 'My Calendar III',
    acceptance: '52.8%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nImplement a <code>MyCalendarThree</code> class to store your events. A new event can <b>always</b> be added.\n</p><p>\nYour class will have one method, <code>book(int start, int end)</code>.  Formally, this represents a booking on the half open interval <code>[start, end)</code>, the range of real numbers <code>x</code> such that <code>start &lt;= x &lt; end</code>.\n</p><p>\nA <i>K-booking</i> happens when <b>K</b> events have some non-empty intersection (ie., there is some time that is common to all K events.)\n</p><p>\nFor each call to the method <code>MyCalendar.book</code>, return an integer <code>K</code> representing the largest integer such that there exists a <code>K</code>-booking in the calendar.\n</p>\n\nYour class will be called like this:\n<code>MyCalendarThree cal = new MyCalendarThree();</code>\n<code>MyCalendarThree.book(start, end)</code>\n\n<p><b>Example 1:</b><br>\n</p><pre>MyCalendarThree();\nMyCalendarThree.book(10, 20); // returns 1\nMyCalendarThree.book(50, 60); // returns 1\nMyCalendarThree.book(10, 40); // returns 2\nMyCalendarThree.book(5, 15); // returns 3\nMyCalendarThree.book(5, 10); // returns 3\nMyCalendarThree.book(25, 55); // returns 3\n<b>Explanation:</b> \nThe first two events can be booked and are disjoint, so the maximum K-booking is a 1-booking.\nThe third event [10, 40) intersects the first event, and the maximum K-booking is a 2-booking.\nThe remaining events cause the maximum K-booking to be only a 3-booking.\nNote that the last event locally causes a 2-booking, but the answer is still 3 because\neg. [10, 20), [10, 40), and [5, 15) are still triple booked.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The number of calls to <code>MyCalendarThree.book</code> per test case will be at most <code>400</code>.</li>\n<li>In calls to <code>MyCalendarThree.book(start, end)</code>, <code>start</code> and <code>end</code> are integers in the range <code>[0, 10^9]</code>.</li>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '733',
    name: 'Flood Fill',
    acceptance: '49.3%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nAn <code>image</code> is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).\n</p><p>\nGiven a coordinate <code>(sr, sc)</code> representing the starting pixel (row and column) of the flood fill, and a pixel value <code>newColor</code>, "flood fill" the image.\n</p><p>\nTo perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on.  Replace the color of all of the aforementioned pixels with the newColor.\n</p><p>\nAt the end, return the modified image.\n</p>\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nimage = [[1,1,1],[1,1,0],[1,0,1]]\nsr = 1, sc = 1, newColor = 2\n<b>Output:</b> [[2,2,2],[2,2,0],[2,0,1]]\n<b>Explanation:</b> \nFrom the center of the image (with position (sr, sc) = (1, 1)), all pixels connected \nby a path of the same color as the starting pixel are colored with the new color.\nNote the bottom corner is not colored 2, because it is not 4-directionally connected\nto the starting pixel.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>image</code> and <code>image[0]</code> will be in the range <code>[1, 50]</code>.</li>\n<li>The given starting pixel will satisfy <code>0 &lt;= sr &lt; image.length</code> and <code>0 &lt;= sc &lt; image[0].length</code>.</li>\n<li>The value of each color in <code>image[i][j]</code> and <code>newColor</code> will be an integer in <code>[0, 65535]</code>.</li>\n<p></p>\n          ',
    tags: ['Uber'],
  },
  {
    id: '734',
    name: 'Sentence Similarity ',
    acceptance: '38.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>Given two sentences <code>words1, words2</code> (each represented as an array of strings), and a list of similar word pairs <code>pairs</code>, determine if two sentences are similar.\n</p><p>\nFor example, "great acting skills" and "fine drama talent" are similar, if the similar word pairs are <code>pairs = [["great", "fine"],\n ["acting","drama"], ["skills","talent"]]</code>.\n</p><p>\nNote that the similarity relation is not transitive. For example, if "great" and "fine" are similar, and "fine" and "good" are similar, "great" and "good" are <b>not</b> necessarily similar.\n</p><p>\nHowever, similarity is symmetric.  For example, "great" and "fine" being similar is the same as "fine" and "great" being similar.\n</p><p>\nAlso, a word is always similar with itself.  For example, the sentences <code>words1 = ["great"], words2 = ["great"], pairs = []</code> are similar, even though there are no specified similar word pairs.\n</p><p>\nFinally, sentences can only be similar if they have the same number of words.  So a sentence like <code>words1 = ["great"]</code> can never be similar to <code>words2 = ["doubleplus","good"]</code>.\n</p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>words1</code> and <code>words2</code> will not exceed <code>1000</code>.</li>\n<li>The length of <code>pairs</code> will not exceed <code>2000</code>.</li>\n<li>The length of each <code>pairs[i]</code> will be <code>2</code>.</li>\n<li>The length of each <code>words[i]</code> and <code>pairs[i][j]</code> will be in the range <code>[1, 20]</code>.</li>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '735',
    name: 'Asteroid Collision',
    acceptance: '37.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nWe are given an array <code>asteroids</code> of integers representing asteroids in a row.\n</p><p>\nFor each asteroid, the absolute value represents its size, and the sign represents its direction (positive meaning right, negative meaning left).  Each asteroid moves at the same speed.\n</p><p>\nFind out the state of the asteroids after all collisions.  If two asteroids meet, the smaller one will explode.  If both are the same size, both will explode.  Two asteroids moving in the same direction will never meet.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> \nasteroids = [5, 10, -5]\n<b>Output:</b> [5, 10]\n<b>Explanation:</b> \nThe 10 and -5 collide resulting in 10.  The 5 and 10 never collide.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> \nasteroids = [8, -8]\n<b>Output:</b> []\n<b>Explanation:</b> \nThe 8 and -8 collide exploding each other.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> \nasteroids = [10, 2, -5]\n<b>Output:</b> [10]\n<b>Explanation:</b> \nThe 2 and -5 collide resulting in -5.  The 10 and -5 collide resulting in 10.\n</pre>\n<p></p>\n\n<p><b>Example 4:</b><br>\n</p><pre><b>Input:</b> \nasteroids = [-2, -1, 1, 2]\n<b>Output:</b> [-2, -1, 1, 2]\n<b>Explanation:</b> \nThe -2 and -1 are moving left, while the 1 and 2 are moving right.\nAsteroids moving the same direction never meet, so no asteroids will meet each other.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>asteroids</code> will be at most <code>10000</code>.</li>\n<li>Each asteroid will be a non-zero integer in the range <code>[-1000, 1000].</code>.</li>\n<p></p>\n          ',
    tags: ['Uber'],
  },
  {
    id: '736',
    name: 'Parse Lisp Expression',
    acceptance: '41.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nYou are given a string <code>expression</code> representing a Lisp-like expression to return the integer value of.\n</p><p>\nThe syntax for these expressions is given as follows.\n</p><p>\n</p><li>An expression is either an integer, a let-expression, an add-expression, a mult-expression, or an assigned variable.  Expressions always evaluate to a single integer.</li>\n<p></p><p>\n</p><li>(An integer could be positive or negative.)</li>\n<p></p><p>\n</p><li>A let-expression takes the form <code>(let v1 e1 v2 e2 ... vn en expr)</code>, where <code>let</code> is always the string <code>"let"</code>, then there are 1 or more pairs of alternating variables and expressions, meaning that the first variable <code>v1</code> is assigned the value of the expression <code>e1</code>, the second variable <code>v2</code> is assigned the value of the expression <code>e2</code>, and so on <b>sequentially</b>; and then the value of this let-expression is the value of the expression <code>expr</code>.</li>\n<p></p><p>\n</p><li>An add-expression takes the form <code>(add e1 e2)</code> where <code>add</code> is always the string <code>"add"</code>, there are always two expressions <code>e1, e2</code>, and this expression evaluates to the addition of the evaluation of <code>e1</code> and the evaluation of <code>e2</code>.</li>\n<p></p><p>\n</p><li>A mult-expression takes the form <code>(mult e1 e2)</code> where <code>mult</code> is always the string <code>"mult"</code>, there are always two expressions <code>e1, e2</code>, and this expression evaluates to the multiplication of the evaluation of <code>e1</code> and the evaluation of <code>e2</code>.</li>\n<p></p><p>\n</p><li>For the purposes of this question, we will use a smaller subset of variable names.  A variable starts with a lowercase letter, then zero or more lowercase letters or digits.  Additionally for your convenience, the names "add", "let", or "mult" are protected and will never be used as variable names.</li>\n<p></p><p>\n</p><li>Finally, there is the concept of scope.  When an expression of a variable name is evaluated, <b>within the context of that evaluation</b>, the innermost scope (in terms of parentheses) is checked first for the value of that variable, and then outer scopes are checked sequentially.  It is guaranteed that every expression is legal.  Please see the examples for more details on scope.</li>\n<p></p>\n\n<p><b>Evaluation Examples:</b><br>\n</p><pre><b>Input:</b> (add 1 2)\n<b>Output:</b> 3\n\n<b>Input:</b> (mult 3 (add 2 3))\n<b>Output:</b> 15\n\n<b>Input:</b> (let x 2 (mult x 5))\n<b>Output:</b> 10\n\n<b>Input:</b> (let x 2 (mult x (let x 3 y 4 (add x y))))\n<b>Output:</b> 14\n<b>Explanation:</b> In the expression (add x y), when checking for the value of the variable x,\nwe check from the innermost scope to the outermost in the context of the variable we are trying to evaluate.\nSince x = 3 is found first, the value of x is 3.\n\n<b>Input:</b> (let x 3 x 2 x)\n<b>Output:</b> 2\n<b>Explanation:</b> Assignment in let statements is processed sequentially.\n\n<b>Input:</b> (let x 1 y 2 x (add x y) (add x y))\n<b>Output:</b> 5\n<b>Explanation:</b> The first (add x y) evaluates as 3, and is assigned to x.\nThe second (add x y) evaluates as 3+2 = 5.\n\n<b>Input:</b> (let x 2 (add (let x 3 (let x 4 x)) x))\n<b>Output:</b> 6\n<b>Explanation:</b> Even though (let x 4 x) has a deeper scope, it is outside the context\nof the final x in the add-expression.  That final x will equal 2.\n\n<b>Input:</b> (let a1 3 b2 (add a1 1) b2) \n<b>Output</b> 4\n<b>Explanation:</b> Variable names can contain digits after the first character.\n\n</pre>\n\n<p><b>Note:</b>\n</p><li>The given string <code>expression</code> is well formatted: There are no leading or trailing spaces, there is only a single space separating different components of the string, and no space between adjacent parentheses.  The expression is guaranteed to be legal and evaluate to an integer.</li>\n<li>The length of <code>expression</code> is at most 2000.  (It is also non-empty, as that would not be a legal expression.)</li>\n<li>The answer and all intermediate calculations of that answer are guaranteed to fit in a 32-bit integer.</li>\n<p></p>\n          ',
    tags: ['Affirm'],
  },
  {
    id: '737',
    name: 'Sentence Similarity II ',
    acceptance: '40.4%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given two sentences <code>words1, words2</code> (each represented as an array of strings), and a list of similar word pairs <code>pairs</code>, determine if two sentences are similar.\n</p><p>\nFor example, <code>words1 = ["great", "acting", "skills"]</code> and <code>words2 = ["fine", "drama", "talent"]</code> are similar, if the similar word pairs are <code>pairs = [["great", "good"], ["fine", "good"], \n ["acting","drama"], ["skills","talent"]]</code>.\n</p><p>\nNote that the similarity relation <b>is</b> transitive. For example, if "great" and "good" are similar, and "fine" and "good" are similar, then "great" and "fine" <b>are similar</b>.\n</p><p>\nSimilarity is also symmetric.  For example, "great" and "fine" being similar is the same as "fine" and "great" being similar.\n</p><p>\nAlso, a word is always similar with itself.  For example, the sentences <code>words1 = ["great"], words2 = ["great"], pairs = []</code> are similar, even though there are no specified similar word pairs.\n</p><p>\nFinally, sentences can only be similar if they have the same number of words.  So a sentence like <code>words1 = ["great"]</code> can never be similar to <code>words2 = ["doubleplus","good"]</code>.\n</p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>words1</code> and <code>words2</code> will not exceed <code>1000</code>.</li>\n<li>The length of <code>pairs</code> will not exceed <code>2000</code>.</li>\n<li>The length of each <code>pairs[i]</code> will be <code>2</code>.</li>\n<li>The length of each <code>words[i]</code> and <code>pairs[i][j]</code> will be in the range <code>[1, 20]</code>.</li>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '738',
    name: 'Monotone Increasing Digits',
    acceptance: '41.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a non-negative integer <code>N</code>, find the largest number that is less than or equal to <code>N</code> with monotone increasing digits.\n</p><p>\n(Recall that an integer has <i>monotone increasing digits</i> if and only if each pair of adjacent digits <code>x</code> and <code>y</code> satisfy <code>x &lt;= y</code>.)\n</p><p>\n\n</p><p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> N = 10\n<b>Output:</b> 9\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> N = 1234\n<b>Output:</b> 1234\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> N = 332\n<b>Output:</b> 299\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n<code>N</code> is an integer in the range <code>[0, 10^9]</code>.\n</p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '739',
    name: 'Daily Temperatures',
    acceptance: '52.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a list of daily <code>temperatures</code>, produce a list that, for each day in the input, tells you how many days you would have to wait until a warmer temperature.  If there is no future day for which this is possible, put <code>0</code> instead.\n</p><p>\nFor example, given the list <code>temperatures = [73, 74, 75, 71, 69, 72, 76, 73]</code>, your output should be <code>[1, 1, 4, 2, 1, 1, 0, 0]</code>.\n</p>\n\n<p><b>Note:</b>\nThe length of <code>temperatures</code> will be in the range <code>[1, 30000]</code>.\nEach temperature will be an integer in the range <code>[30, 100]</code>.\n</p>\n          ',
    tags: ['Google'],
  },
  {
    id: '740',
    name: 'Delete and Earn',
    acceptance: '42.0%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nGiven an array <code>nums</code> of integers, you can perform operations on the array.\n</p><p>\nIn each operation, you pick any <code>nums[i]</code> and delete it to earn <code>nums[i]</code> points.  After, you must delete <b>every</b> element equal to <code>nums[i] - 1</code> or <code>nums[i] + 1</code>.\n</p><p>\nYou start with 0 points.  Return the maximum number of points you can earn by applying such operations.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> nums = [3, 4, 2]\n<b>Output:</b> 6\n<b>Explanation:</b> \nDelete 4 to earn 4 points, consequently 3 is also deleted.\nThen, delete 2 to earn 2 points. 6 total points are earned.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> nums = [2, 2, 3, 3, 3, 4]\n<b>Output:</b> 9\n<b>Explanation:</b> \nDelete 3 to earn 3 points, deleting both 2's and the 4.\nThen, delete 3 again to earn 3 points, and 3 again to earn 3 points.\n9 total points are earned.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li>The length of <code>nums</code> is at most <code>20000</code>.</li>\n<li>Each element <code>nums[i]</code> is an integer in the range <code>[1, 10000]</code>.</li>\n<p></p>\n          ",
    tags: ['Akuna Capital'],
  },
  {
    id: '741',
    name: 'Cherry Pickup',
    acceptance: '22.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nIn a N x N <code>grid</code> representing a field of cherries, each cell is one of three possible integers.\n</p><p>\n</p><li>0 means the cell is empty, so you can pass through;</li>\n<li>1 means the cell contains a cherry, that you can pick up and pass through;</li>\n<li>-1 means the cell contains a thorn that blocks your way.</li>\n<p></p><p>\nYour task is to collect maximum number of cherries possible by following the rules below:\n</p><p>\n</p><li>Starting at the position (0, 0) and reaching (N-1, N-1) by moving right or down through valid path cells (cells with value 0 or 1);</li>\n<li>After reaching (N-1, N-1), returning to (0, 0) by moving left or up through valid path cells;</li>\n<li>When passing through a path cell containing a cherry, you pick it up and the cell becomes an empty cell (0);</li>\n<li>If there is no valid path between (0, 0) and (N-1, N-1), then no cherries can be collected.</li>\n<p></p><p>\n\n</p><p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> grid =\n[[0, 1, -1],\n [1, 0, -1],\n [1, 1,  1]]\n<b>Output:</b> 5\n<b>Explanation:</b> \nThe player started at (0, 0) and went down, down, right right to reach (2, 2).\n4 cherries were picked up during this single trip, and the matrix becomes [[0,1,-1],[0,0,-1],[0,0,0]].\nThen, the player went left, up, up, left to return home, picking up one more cherry.\nThe total number of cherries picked up is 5, and this is the maximum possible.\n</pre>\n<p></p>\n\n<p><b>Note:</b>\n</p><li><code>grid</code> is an <code>N</code> by <code>N</code> 2D array, with <code>1 &lt;= N &lt;= 50</code>.</li>\n<li>Each <code>grid[i][j]</code> is an integer in the set <code>{-1, 0, 1}</code>.</li>\n<li>It is guaranteed that grid[0][0] and grid[N-1][N-1] are not -1.</li><li>\n<p></p>\n          </li>',
    tags: ['Akuna Capital'],
  },
  {
    id: '742',
    name: 'Closest Leaf in a Binary Tree ',
    acceptance: '31.6%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>Given a binary tree <b>where every node has a unique value</b>, and a target key <code>k</code>, find the value of the nearest leaf node to target <code>k</code> in the tree.\n</p><p>\nHere, <i>nearest</i> to a leaf means the least number of edges travelled on the binary tree to reach any leaf of the tree.  Also, a node is called a <i>leaf</i> if it has no children.\n</p><p>\nIn the following examples, the input tree is represented in flattened form row by row.\nThe actual <code>root</code> tree given will be a TreeNode object.\n</p><p>\n<b>Example 1:</b>\n</p><pre><b>Input:</b>\nroot = [1, 3, 2], k = 1\nDiagram of binary tree:\n          1\n         / \\\n        3   2\n\n<b>Output:</b> 2 (or 3)\n\n<b>Explanation:</b> Either 2 or 3 is the nearest leaf node to the target of 1.\n</pre>\n<p></p><p>\n<b>Example 2:</b>\n</p><pre><b>Input:</b>\nroot = [1], k = 1\n<b>Output:</b> 1\n\n<b>Explanation:</b> The nearest leaf node is the root node itself.\n</pre>\n<p></p>\n\n<p>\n<b>Example 3:</b>\n</p><pre><b>Input:</b>\nroot = [1,2,3,4,null,null,null,5,null,6], k = 2\nDiagram of binary tree:\n             1\n            / \\\n           2   3\n          /\n         4\n        /\n       5\n      /\n     6\n\n<b>Output:</b> 3\n<b>Explanation:</b> The leaf node with value 3 (and not the leaf node with value 6) is nearest to the node with value 2.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>root</code> represents a binary tree with at least <code>1</code> node and at most <code>1000</code> nodes.</li>\n<li>Every node has a unique <code>node.val</code> in range <code>[1, 1000]</code>.</li>\n<li>There exists some node in the given binary tree for which <code>node.val == k</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Amazon', 'databricks'],
  },
  {
    id: '743',
    name: 'Network Delay Time',
    acceptance: '32.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nThere are <code>N</code> network nodes, labelled <code>1</code> to <code>N</code>.\n</p><p>\nGiven <code>times</code>, a list of travel times as <b>directed</b> edges <code>times[i] = (u, v, w)</code>, where <code>u</code> is the source node, <code>v</code> is the target node, and <code>w</code> is the time it takes for a signal to travel from source to target.\n</p><p>\nNow, we send a signal from a certain node <code>K</code>.  How long will it take for all nodes to receive the signal?  If it is impossible, return <code>-1</code>.\n</p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>N</code> will be in the range <code>[1, 100]</code>.</li>\n<li><code>K</code> will be in the range <code>[1, N]</code>.</li>\n<li>The length of <code>times</code> will be in the range <code>[1, 6000]</code>.</li>\n<li>All edges <code>times[i] = (u, v, w)</code> will have <code>1 &lt;= u, v &lt;= N</code> and <code>1 &lt;= w &lt;= 100</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Akuna Capital'],
  },
  {
    id: '744',
    name: 'Find Smallest Letter Greater Than Target',
    acceptance: '50.5%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a list of sorted characters <code>letters</code> containing only lowercase letters, and given a target letter <code>target</code>, find the smallest element in the list that is larger than the given target.\n</p><p>\nLetters also wrap around.  For example, if the target is <code>target = \'z\'</code> and <code>letters = [\'a\', \'b\']</code>, the answer is <code>\'a\'</code>.\n</p>\n\n<p><b>Examples:</b><br>\n</p><pre><b>Input:</b>\nletters = ["c", "f", "j"]\ntarget = "a"\n<b>Output:</b> "c"\n\n<b>Input:</b>\nletters = ["c", "f", "j"]\ntarget = "c"\n<b>Output:</b> "f"\n\n<b>Input:</b>\nletters = ["c", "f", "j"]\ntarget = "d"\n<b>Output:</b> "f"\n\n<b>Input:</b>\nletters = ["c", "f", "j"]\ntarget = "g"\n<b>Output:</b> "j"\n\n<b>Input:</b>\nletters = ["c", "f", "j"]\ntarget = "j"\n<b>Output:</b> "c"\n\n<b>Input:</b>\nletters = ["c", "f", "j"]\ntarget = "k"\n<b>Output:</b> "c"\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>letters</code> has a length in range <code>[2, 10000]</code>.</li>\n<li><code>letters</code> consists of lowercase letters, and contains at least 2 unique letters.</li>\n<li><code>target</code> is a lowercase letter.</li>\n</ol>\n<p></p>\n          ',
    tags: ['LinkedIn'],
  },
  {
    id: '745',
    name: 'Prefix and Suffix Search',
    acceptance: '21.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nGiven many <code>words</code>, <code>words[i]</code> has weight <code>i</code>.\n</p><p>\nDesign a class <code>WordFilter</code> that supports one function, <code>WordFilter.f(String prefix, String suffix)</code>.\nIt will return the word with given <code>prefix</code> and <code>suffix</code> with maximum weight.  If no word exists, return -1.\n</p>\n\n<p><b>Examples:</b><br>\n</p><pre><b>Input:</b>\nWordFilter(["apple"])\nWordFilter.f("a", "e") // returns 0\nWordFilter.f("b", "") // returns -1\n</pre><p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>words</code> has length in range <code>[1, 15000]</code>.</li>\n<li>For each test case, up to <code>words.length</code> queries <code>WordFilter.f</code> may be made.</li>\n<li><code>words[i]</code> has length in range <code>[1, 10]</code>.</li>\n<li><code>prefix, suffix</code> have lengths in range <code>[0, 10]</code>.</li>\n<li><code>words[i]</code> and <code>prefix, suffix</code> queries consist of lowercase letters only.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '746',
    name: 'Min Cost Climbing Stairs',
    acceptance: '47.9%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nOn a staircase, the <code>i</code>-th step has some non-negative cost <code>cost[i]</code> assigned (0 indexed).\n</p><p>\nOnce you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> cost = [10, 15, 20]\n<b>Output:</b> 15\n<b>Explanation:</b> Cheapest is start on cost[1], pay that cost and go to the top.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]\n<b>Output:</b> 6\n<b>Explanation:</b> Cheapest is start on cost[0], and only step on 1s, skipping cost[3].\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>cost</code> will have a length in the range <code>[2, 1000]</code>.</li>\n<li>Every <code>cost[i]</code> will be an integer in the range <code>[0, 999]</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '747',
    name: 'Largest Number At Least Twice of Others',
    acceptance: '45.3%',
    difficulty: 'Easy',
    questionHtml:
      "\n            <br>\n            <p>\nIn a given integer array <code>nums</code>, there is always exactly one largest element.\n</p><p>\nFind whether the largest element in the array is at least twice as much as every other number in the array.\n</p><p>\nIf it is, return the <b>index</b> of the largest element, otherwise return -1.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> nums = [3, 6, 1, 0]\n<b>Output:</b> 1\n<b>Explanation:</b> 6 is the largest integer, and for every other number in the array x,\n6 is more than twice as big as x.  The index of value 6 is 1, so we return 1.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> nums = [1, 2, 3, 4]\n<b>Output:</b> -1\n<b>Explanation:</b> 4 isn't at least as big as twice the value of 3, so we return -1.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>nums</code> will have a length in the range <code>[1, 50]</code>.</li>\n<li>Every <code>nums[i]</code> will be an integer in the range <code>[0, 99]</code>.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google'],
  },
  {
    id: '748',
    name: 'Shortest Completing Word',
    acceptance: '54.7%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nFind the minimum length word from a given dictionary <code>words</code>, which has all the letters from the string <code>licensePlate</code>.  Such a word is said to <i>complete</i> the given string <code>licensePlate</code>\n</p><p>\nHere, for letters we ignore case.  For example, <code>"P"</code> on the <code>licensePlate</code> still matches <code>"p"</code> on the word.\n</p><p>\nIt is guaranteed an answer exists.  If there are multiple answers, return the one that occurs first in the array.\n</p><p>\nThe license plate might have the same letter occurring multiple times.  For example, given a <code>licensePlate</code> of <code>"PP"</code>, the word <code>"pair"</code> does not complete the <code>licensePlate</code>, but the word <code>"supper"</code> does.\n</p><p>\n\n</p><p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]\n<b>Output:</b> "steps"\n<b>Explanation:</b> The smallest length word that contains the letters "S", "P", "S", and "T".\nNote that the answer is not "step", because the letter "s" must occur in the word twice.\nAlso note that we ignored case for the purposes of comparing whether a letter exists in the word.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]\n<b>Output:</b> "pest"\n<b>Explanation:</b> There are 3 smallest length words that contains the letters "s".\nWe return the one that occurred first.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>licensePlate</code> will be a string with length in range <code>[1, 7]</code>.</li>\n<li><code>licensePlate</code> will contain digits, spaces, or letters (uppercase or lowercase).</li>\n<li><code>words</code> will have a length in the range <code>[10, 1000]</code>.</li>\n<li>Every <code>words[i]</code> will consist of lowercase letters, and have length in range <code>[1, 15]</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '749',
    name: 'Contain Virus',
    acceptance: '36.2%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nA virus is spreading rapidly, and your task is to quarantine the infected area by installing walls.\n</p><p>\nThe world is modeled as a 2-D array of cells, where <code>0</code> represents uninfected cells, and <code>1</code> represents cells contaminated with the virus.  A wall (and only one wall) can be installed <b>between any two 4-directionally adjacent cells</b>, on the shared boundary.\n</p><p>\nEvery night, the virus spreads to all neighboring cells in all four directions unless blocked by a wall.\nResources are limited. Each day, you can install walls around only one region -- the affected area (continuous block of infected cells) that threatens the most uninfected cells the following night. There will never be a tie.\n</p><p>\nCan you save the day? If so, what is the number of walls required? If not, and the world becomes fully infected, return the number of walls used.\n</p><p>\n\n</p><p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> grid = \n[[0,1,0,0,0,0,0,1],\n [0,1,0,0,0,0,0,1],\n [0,0,0,0,0,0,0,1],\n [0,0,0,0,0,0,0,0]]\n<b>Output:</b> 10\n<b>Explanation:</b>\nThere are 2 contaminated regions.\nOn the first day, add 5 walls to quarantine the viral region on the left. The board after the virus spreads is:\n\n[[0,1,0,0,0,0,1,1],\n [0,1,0,0,0,0,1,1],\n [0,0,0,0,0,0,1,1],\n [0,0,0,0,0,0,0,1]]\n\nOn the second day, add 5 walls to quarantine the viral region on the right. The virus is fully contained.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> grid = \n[[1,1,1],\n [1,0,1],\n [1,1,1]]\n<b>Output:</b> 4\n<b>Explanation:</b> Even though there is only one cell saved, there are 4 walls built.\nNotice that walls are only built on the shared boundary of two different cells.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> grid = \n[[1,1,1,0,0,0,0,0,0],\n [1,0,1,0,1,1,1,1,1],\n [1,1,1,0,0,0,0,0,0]]\n<b>Output:</b> 13\n<b>Explanation:</b> The region on the left only builds two new walls.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The number of rows and columns of <code>grid</code> will each be in the range <code>[1, 50]</code>.</li>\n<li>Each <code>grid[i][j]</code> will be either <code>0</code> or <code>1</code>.</li>\n<li>Throughout the described process, there is always a contiguous viral region that will infect <b>strictly more</b> uncontaminated squares in the next round.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Bloomberg'],
  },
  {
    id: '750',
    name: 'Number Of Corner Rectangles ',
    acceptance: '46.5%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a grid where each entry is only 0 or 1, find the number of corner rectangles.\n</p><p>\nA <i>corner rectangle</i> is 4 distinct 1s on the grid that form an axis-aligned rectangle.  Note that only the corners need to have the value 1.  Also, all four 1s used must be distinct.\n</p><p>\n\n</p><p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> grid = \n[[1, 0, 0, 1, 0],\n [0, 0, 1, 0, 1],\n [0, 0, 0, 1, 0],\n [1, 0, 1, 0, 1]]\n<b>Output:</b> 1\n<b>Explanation:</b> There is only one corner rectangle, with corners grid[1][2], grid[1][4], grid[3][2], grid[3][4].\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> grid = \n[[1, 1, 1],\n [1, 1, 1],\n [1, 1, 1]]\n<b>Output:</b> 9\n<b>Explanation:</b> There are four 2x2 rectangles, four 2x3 and 3x2 rectangles, and one 3x3 rectangle.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> grid = \n[[1, 1, 1, 1]]\n<b>Output:</b> 0\n<b>Explanation:</b> Rectangles must have four distinct corners.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The number of rows and columns of <code>grid</code> will each be in the range <code>[1, 200]</code>.</li>\n<li>Each <code>grid[i][j]</code> will be either <code>0</code> or <code>1</code>.</li>\n<li>The number of <code>1</code>s in the grid will be at most <code>6000</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '751',
    name: 'IP to CIDR ',
    acceptance: '55.7%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven a start IP address <code>ip</code> and a number of ips we need to cover <code>n</code>, return a representation of the range as a list (of smallest possible length) of CIDR blocks.\n</p><p>\nA CIDR block is a string consisting of an IP, followed by a slash, and then the prefix length.  For example: "123.45.67.89/20".  That prefix length "20" represents the number of common prefix bits in the specified range.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> ip = "255.0.0.7", n = 10\n<b>Output:</b> ["255.0.0.7/32","255.0.0.8/29","255.0.0.16/32"]\n<b>Explanation:</b>\nThe initial ip address, when converted to binary, looks like this (spaces added for clarity):\n255.0.0.7 -&gt; 11111111 00000000 00000000 00000111\nThe address "255.0.0.7/32" specifies all addresses with a common prefix of 32 bits to the given address,\nie. just this one address.\n\nThe address "255.0.0.8/29" specifies all addresses with a common prefix of 29 bits to the given address:\n255.0.0.8 -&gt; 11111111 00000000 00000000 00001000\nAddresses with common prefix of 29 bits are:\n11111111 00000000 00000000 00001000\n11111111 00000000 00000000 00001001\n11111111 00000000 00000000 00001010\n11111111 00000000 00000000 00001011\n11111111 00000000 00000000 00001100\n11111111 00000000 00000000 00001101\n11111111 00000000 00000000 00001110\n11111111 00000000 00000000 00001111\n\nThe address "255.0.0.16/32" specifies all addresses with a common prefix of 32 bits to the given address,\nie. just 11111111 00000000 00000000 00010000.\n\nIn total, the answer specifies the range of 10 ips starting with the address 255.0.0.7 .\n\nThere were other representations, such as:\n["255.0.0.7/32","255.0.0.8/30", "255.0.0.12/30", "255.0.0.16/32"],\nbut our answer was the shortest possible.\n\nAlso note that a representation beginning with say, "255.0.0.7/30" would be incorrect,\nbecause it includes addresses like 255.0.0.4 = 11111111 00000000 00000000 00000100 \nthat are outside the specified range.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>ip</code> will be a valid IPv4 address.</li>\n<li>Every implied address <code>ip + x</code> (for <code>x &lt; n</code>) will be a valid IPv4 address.</li>\n<li><code>n</code> will be an integer in the range <code>[1, 1000]</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Airbnb'],
  },
  {
    id: '752',
    name: 'Open the Lock',
    acceptance: '37.1%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYou have a lock in front of you with 4 circular wheels.  Each wheel has 10 slots: <code>\'0\', \'1\', \'2\', \'3\', \'4\', \'5\', \'6\', \'7\', \'8\', \'9\'</code>.  The wheels can rotate freely and wrap around: for example we can turn <code>\'9\'</code> to be <code>\'0\'</code>, or <code>\'0\'</code> to be <code>\'9\'</code>.  Each move consists of turning one wheel one slot.\n</p><p>\nThe lock initially starts at <code>\'0000\'</code>, a string representing the state of the 4 wheels.\n</p><p>\nYou are given a list of <code>deadends</code> dead ends, meaning if the lock displays any of these codes, the wheels of the lock will stop turning and you will be unable to open it.\n</p><p>\nGiven a <code>target</code> representing the value of the wheels that will unlock the lock, return the minimum total number of turns required to open the lock, or -1 if it is impossible.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> deadends = ["0201","0101","0102","1212","2002"], target = "0202"\n<b>Output:</b> 6\n<b>Explanation:</b>\nA sequence of valid moves would be "0000" -&gt; "1000" -&gt; "1100" -&gt; "1200" -&gt; "1201" -&gt; "1202" -&gt; "0202".\nNote that a sequence like "0000" -&gt; "0001" -&gt; "0002" -&gt; "0102" -&gt; "0202" would be invalid,\nbecause the wheels of the lock become stuck after the display becomes the dead end "0102".\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> deadends = ["8888"], target = "0009"\n<b>Output:</b> 1\n<b>Explanation:</b>\nWe can turn the last wheel in reverse to move from "0000" -&gt; "0009".\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"\n<b>Output:</b> -1\n<b>Explanation:</b>\nWe can\'t reach the target without getting stuck.\n</pre>\n<p></p>\n\n<p><b>Example 4:</b><br>\n</p><pre><b>Input:</b> deadends = ["0000"], target = "8888"\n<b>Output:</b> -1\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li>The length of <code>deadends</code> will be in the range <code>[1, 500]</code>.</li>\n<li><code>target</code> will not be in the list <code>deadends</code>.</li>\n<li>Every string in <code>deadends</code> and the string <code>target</code> will be a string of 4 digits from the 10,000 possibilities <code>\'0000\'</code> to <code>\'9999\'</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: [],
  },
  {
    id: '753',
    name: 'Cracking the Safe',
    acceptance: '39.4%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\nThere is a box protected by a password.  The password is <code>n</code> digits, where each letter can be one of the first <code>k</code> digits <code>0, 1, ..., k-1</code>.\n</p><p>\nYou can keep inputting the password, the password will automatically be matched against the last <code>n</code> digits entered.\n</p><p>\nFor example, assuming the password is <code>"345"</code>, I can open it when I type <code>"012345"</code>, but I enter a total of 6 digits.\n</p><p>\nPlease return any string of minimum length that is guaranteed to open the box after the entire string is inputted.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> n = 1, k = 2\n<b>Output:</b> "01"\n<b>Note:</b> "10" will be accepted too.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> n = 2, k = 2\n<b>Output:</b> "00110"\n<b>Note:</b> "01100", "10011", "11001" will be accepted too.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>n</code> will be in the range <code>[1, 4]</code>.</li>\n<li><code>k</code> will be in the range <code>[1, 10]</code>.</li>\n<li><code>k^n</code> will be at most <code>4096</code>.</li>\n</ol>\n<p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '754',
    name: 'Reach a Number',
    acceptance: '23.9%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nYou are standing at position <code>0</code> on an infinite number line.  There is a goal at position <code>target</code>.\n</p><p>\nOn each move, you can either go left or right.  During the <i>n</i>-th move (starting from 1), you take <i>n</i> steps.\n</p><p>\nReturn the minimum number of steps required to reach the destination.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> target = 3\n<b>Output:</b> 2\n<b>Explanation:</b>\nOn the first move we step from 0 to 1.\nOn the second step we step from 1 to 3.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> target = 2\n<b>Output:</b> 3\n<b>Explanation:</b>\nOn the first move we step from 0 to 1.\nOn the second move we step  from 1 to -1.\nOn the third move we step from -1 to 2.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><li><code>target</code> will be a non-zero integer in the range <code>[-10^9, 10^9]</code>.</li>\n<p></p>\n          ',
    tags: ['inmobi'],
  },
  {
    id: '755',
    name: 'Pour Water',
    acceptance: '34.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nWe are given an elevation map, <code>heights[i]</code> representing the height of the terrain at that index.  The width at each index is 1.  After <code>V</code> units of water fall at index <code>K</code>, how much water is at each index?\n</p><p>\nWater first drops at index <code>K</code> and rests on top of the highest terrain or water at that index.  Then, it flows according to the following rules:\n</p><li>If the droplet would eventually fall by moving left, then move left.</li>\n<li>Otherwise, if the droplet would eventually fall by moving right, then move right.</li>\n<li>Otherwise, rise at it\'s current position.</li>\nHere, "eventually fall" means that the droplet will eventually be at a lower level if it moves in that direction.\nAlso, "level" means the height of the terrain plus any water in that column.\n<p></p><p>\nWe can assume there\'s infinitely high terrain on the two sides out of bounds of the array.  Also, there could not be partial water being spread out evenly on more than 1 grid block - each unit of water has to be in exactly one block.\n</p><p>\n\n</p><p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> heights = [2,1,1,2,1,2,2], V = 4, K = 3\n<b>Output:</b> [2,2,2,3,2,2,2]\n<b>Explanation:</b>\n#       #\n#       #\n##  # ###\n#########\n 0123456    &lt;- index\n\nThe first drop of water lands at index K = 3:\n\n#       #\n#   w   #\n##  # ###\n#########\n 0123456    \n\nWhen moving left or right, the water can only move to the same level or a lower level.\n(By level, we mean the total height of the terrain plus any water in that column.)\nSince moving left will eventually make it fall, it moves left.\n(A droplet "made to fall" means go to a lower height than it was at previously.)\n\n#       #\n#       #\n## w# ###\n#########\n 0123456    \n\nSince moving left will not make it fall, it stays in place.  The next droplet falls:\n\n#       #\n#   w   #\n## w# ###\n#########\n 0123456  \n\nSince the new droplet moving left will eventually make it fall, it moves left.\nNotice that the droplet still preferred to move left,\neven though it could move right (and moving right makes it fall quicker.)\n\n#       #\n#  w    #\n## w# ###\n#########\n 0123456  \n\n#       #\n#       #\n##ww# ###\n#########\n 0123456  \n\nAfter those steps, the third droplet falls.\nSince moving left would not eventually make it fall, it tries to move right.\nSince moving right would eventually make it fall, it moves right.\n\n#       #\n#   w   #\n##ww# ###\n#########\n 0123456  \n\n#       #\n#       #\n##ww#w###\n#########\n 0123456  \n\nFinally, the fourth droplet falls.\nSince moving left would not eventually make it fall, it tries to move right.\nSince moving right would not eventually make it fall, it stays in place:\n\n#       #\n#   w   #\n##ww#w###\n#########\n 0123456  \n\nThe final answer is [2,2,2,3,2,2,2]:\n\n    #    \n ####### \n ####### \n 0123456 \n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> heights = [1,2,3,4], V = 2, K = 2\n<b>Output:</b> [2,3,3,4]\n<b>Explanation:</b>\nThe last droplet settles at index 1, since moving further left would not cause it to eventually fall to a lower height.\n</pre>\n<p></p>\n\n<p><b>Example 3:</b><br>\n</p><pre><b>Input:</b> heights = [3,1,3], V = 5, K = 1\n<b>Output:</b> [4,4,4]\n</pre>\n<p></p>\n\n<p><b>Note:</b><br></p><ol>\n<li><code>heights</code> will have length in <code>[1, 100]</code> and contain integers in <code>[0, 99]</code>.</li>\n<li><code>V</code> will be in range <code>[0, 2000]</code>.</li>\n<li><code>K</code> will be in range <code>[0, heights.length - 1]</code>.</li>\n</ol><p></p>\n          ',
    tags: ['Airbnb'],
  },
  {
    id: '756',
    name: 'Pyramid Transition Matrix',
    acceptance: '42.2%',
    difficulty: 'Medium',
    questionHtml:
      "\n            <br>\n            <p>\nWe are stacking blocks to form a pyramid.  Each block has a color which is a one letter string, like `'Z'`.\n</p><p>\nFor every block of color `C` we place not in the bottom row, we are placing it on top of a left block of color `A` and right block of color `B`.  We are allowed to place the block there only if `(A, B, C)` is an allowed triple.\n</p><p>\nWe start with a bottom row of <code>bottom</code>, represented as a single string.  We also start with a list of allowed triples <code>allowed</code>.  Each allowed triple is represented as a string of length 3.\n</p><p>\nReturn true if we can build the pyramid all the way to the top, otherwise false.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> bottom = \"XYZ\", allowed = [\"XYD\", \"YZE\", \"DEA\", \"FFF\"]\n<b>Output:</b> true\n<b>Explanation:</b>\nWe can stack the pyramid like this:\n    A\n   / \\\n  D   E\n / \\ / \\\nX   Y   Z\n\nThis works because ('X', 'Y', 'D'), ('Y', 'Z', 'E'), and ('D', 'E', 'A') are allowed triples.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> bottom = \"XXYX\", allowed = [\"XXX\", \"XXY\", \"XYX\", \"XYY\", \"YXZ\"]\n<b>Output:</b> false\n<b>Explanation:</b>\nWe can't stack the pyramid to the top.\nNote that there could be allowed triples (A, B, C) and (A, B, D) with C != D.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br>\n</p><ol>\n<li><code>bottom</code> will be a string with length in range <code>[2, 8]</code>.</li>\n<li><code>allowed</code> will have length in range <code>[0, 200]</code>.</li>\n<li>Letters in all strings will be chosen from the set <code>{'A', 'B', 'C', 'D', 'E', 'F', 'G'}</code>.</li>\n</ol>\n<p></p>\n          ",
    tags: ['Google', 'Airbnb'],
  },
  {
    id: '757',
    name: 'Set Intersection Size At Least Two',
    acceptance: '33.7%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nAn integer interval <code>[a, b]</code> (for integers <code>a &lt; b</code>) is a set of all consecutive integers from <code>a</code> to <code>b</code>, including <code>a</code> and <code>b</code>.\n</p><p>\nFind the minimum size of a set S such that for every integer interval A in <code>intervals</code>, the intersection of S with A has size at least 2.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> intervals = [[1, 3], [1, 4], [2, 5], [3, 5]]\n<b>Output:</b> 3\n<b>Explanation:</b>\nConsider the set S = {2, 3, 4}.  For each interval, there are at least 2 elements from S in the interval.\nAlso, there isn't a smaller size set that fulfills the above condition.\nThus, we output the size of this set, which is 3.\n</pre>\n<p></p>\n\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> intervals = [[1, 2], [2, 3], [2, 4], [4, 5]]\n<b>Output:</b> 5\n<b>Explanation:</b>\nAn example of a minimum sized set is {1, 2, 3, 4, 5}.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br></p><ol>\n<li><code>intervals</code> will have length in range <code>[1, 3000]</code>.</li>\n<li><code>intervals[i]</code> will have length <code>2</code>, representing some integer interval.</li>\n<li><code>intervals[i][j]</code> will be an integer in <code>[0, 10^8]</code>.</li>\n</ol><p></p>\n          ",
    tags: ['Drawbridge'],
  },
  {
    id: '759',
    name: 'Employee Free Time',
    acceptance: '50.3%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nWe are given a list <code>schedule</code> of employees, which represents the working time for each employee.\n</p><p>\nEach employee has a list of non-overlapping <code>Intervals</code>, and these intervals are in sorted order.\n</p><p>\nReturn the list of finite intervals representing <b>common, positive-length free time</b> for <i>all</i> employees, also in sorted order.\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> schedule = [[[1,2],[5,6]],[[1,3]],[[4,10]]]\n<b>Output:</b> [[3,4]]\n<b>Explanation:</b>\nThere are a total of three employees, and all common\nfree time intervals would be [-inf, 1], [3, 4], [10, inf].\nWe discard any intervals that contain inf as they aren't finite.\n</pre>\n<p></p>\n<p><b>Example 2:</b><br>\n</p><pre><b>Input:</b> schedule = [[[1,3],[6,7]],[[2,4]],[[2,5],[9,12]]]\n<b>Output:</b> [[5,6],[7,9]]\n</pre>\n<p></p>\n\n<p>\n(Even though we are representing <code>Intervals</code> in the form <code>[x, y]</code>, the objects inside are <code>Intervals</code>, not lists or arrays.  For example, <code>schedule[0][0].start = 1, schedule[0][0].end = 2</code>, and <code>schedule[0][0][0]</code> is not defined.)\n</p><p>\nAlso, we wouldn't include intervals like [5, 5] in our answer, as they have zero length.\n</p>\n\n<p><b>Note:</b></p><ol>\n<li><code>schedule</code> and <code>schedule[i]</code> are lists with lengths in range <code>[1, 50]</code>.</li>\n<li><code>0 &lt;= schedule[i].start &lt; schedule[i].end &lt;= 10^8</code>.</li>\n</ol><p></p>\n          ",
    tags: ['Airbnb'],
  },
  {
    id: '760',
    name: 'Find Anagram Mappings',
    acceptance: '78.2%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two lists <code>A</code>and <code>B</code>, and <code>B</code> is an anagram of <code>A</code>. <code>B</code> is an anagram of <code>A</code> means <code>B</code> is made by randomizing the order of the elements in <code>A</code>.\n</p><p>\nWe want to find an <i>index mapping</i> <code>P</code>, from <code>A</code> to <code>B</code>. A mapping <code>P[i] = j</code> means the <code>i</code>th element in <code>A</code> appears in <code>B</code> at index <code>j</code>.\n</p><p>\nThese lists <code>A</code> and <code>B</code> may contain duplicates.  If there are multiple answers, output any of them.\n</p>\n\n<p>\nFor example, given\n</p><pre>A = [12, 28, 46, 32, 50]\nB = [50, 12, 32, 46, 28]\n</pre>\n<p></p>\nWe should return\n<pre>[1, 4, 3, 2, 0]\n</pre>\nas <code>P[0] = 1</code> because the <code>0</code>th element of <code>A</code> appears at <code>B[1]</code>,\nand <code>P[1] = 4</code> because the <code>1</code>st element of <code>A</code> appears at <code>B[4]</code>,\nand so on.\n<p></p>\n\n<p><b>Note:</b></p><ol>\n<li><code>A, B</code> have equal lengths in range <code>[1, 100]</code>.</li>\n<li><code>A[i], B[i]</code> are integers in range <code>[0, 10^5]</code>.</li>\n</ol><p></p>\n          ',
    tags: ['Google'],
  },
  {
    id: '761',
    name: 'Special Binary String',
    acceptance: '33.5%',
    difficulty: 'Hard',
    questionHtml:
      '\n            <br>\n            <p>\n<i>Special</i> binary strings are binary strings with the following two properties:\n</p><p>\n</p><li>The number of 0\'s is equal to the number of 1\'s.</li>\n<li>Every prefix of the binary string has at least as many 1\'s as 0\'s.</li>\n<p></p><p>\nGiven a special string <code>S</code>, a <i>move</i> consists of choosing two consecutive, non-empty, special substrings of <code>S</code>, and swapping them.  <i>(Two strings are consecutive if the last character of the first string is exactly one index before the first character of the second string.)</i>\n</p><p>\nAt the end of any number of moves, what is the lexicographically largest resulting string possible?\n</p>\n\n<p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> S = "11011000"\n<b>Output:</b> "11100100"\n<b>Explanation:</b>\nThe strings "10" [occuring at S[1]] and "1100" [at S[3]] are swapped.\nThis is the lexicographically largest string possible after some number of swaps.\n</pre>\n<p></p>\n\n<p><b>Note:</b></p><ol>\n<li><code>S</code> has length at most <code>50</code>.</li>\n<li><code>S</code> is guaranteed to be a <i>special</i> binary string as defined above.</li>\n</ol><p></p>\n          ',
    tags: ['Coursera', 'Quip'],
  },
  {
    id: '762',
    name: 'Prime Number of Set Bits in Binary Representation',
    acceptance: '54.0%',
    difficulty: 'Easy',
    questionHtml:
      '\n            <br>\n            <p>\nGiven two integers <code>L</code> and <code>R</code>, find the count of numbers in the range <code>[L, R]</code> (inclusive) having a prime number of set bits in their binary representation.\n</p><p>\n(Recall that the number of set bits an integer has is the number of <code>1</code>s present when written in binary.  For example, <code>21</code> written in binary is <code>10101</code> which has 3 set bits.  Also, 1 is not a prime.)\n</p><p>\n\n</p><p><b>Example 1:</b><br></p><pre><b>Input:</b> L = 6, R = 10\n<b>Output:</b> 4\n<b>Explanation:</b>\n6 -&gt; 110 (2 set bits, 2 is prime)\n7 -&gt; 111 (3 set bits, 3 is prime)\n9 -&gt; 1001 (2 set bits , 2 is prime)\n10-&gt;1010 (2 set bits , 2 is prime)\n</pre><p></p>\n\n<p><b>Example 2:</b><br></p><pre><b>Input:</b> L = 10, R = 15\n<b>Output:</b> 5\n<b>Explanation:</b>\n10 -&gt; 1010 (2 set bits, 2 is prime)\n11 -&gt; 1011 (3 set bits, 3 is prime)\n12 -&gt; 1100 (2 set bits, 2 is prime)\n13 -&gt; 1101 (3 set bits, 3 is prime)\n14 -&gt; 1110 (3 set bits, 3 is prime)\n15 -&gt; 1111 (4 set bits, 4 is not prime)\n</pre><p></p>\n\n<p><b>Note:</b><br></p><ol>\n<li><code>L, R</code> will be integers <code>L &lt;= R</code> in the range <code>[1, 10^6]</code>.</li>\n<li><code>R - L</code> will be at most 10000.</li>\n</ol><p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '763',
    name: 'Partition Labels',
    acceptance: '67.3%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nA string <code>S</code> of lowercase letters is given.  We want to partition this string into as many parts as possible so that each letter appears in at most one part, and return a list of integers representing the size of these parts.\n</p><p>\n\n</p><p><b>Example 1:</b><br>\n</p><pre><b>Input:</b> S = "ababcbacadefegdehijhklij"\n<b>Output:</b> [9,7,8]\n<b>Explanation:</b>\nThe partition is "ababcbaca", "defegde", "hijhklij".\nThis is a partition so that each letter appears in at most one part.\nA partition like "ababcbacadefegde", "hijhklij" is incorrect, because it splits S into less parts.\n</pre>\n<p></p>\n\n<p><b>Note:</b><br></p><ol>\n<li><code>S</code> will have length in range <code>[1, 500]</code>.</li>\n<li><code>S</code> will consist of lowercase letters (<code>\'a\'</code> to <code>\'z\'</code>) only.</li>\n</ol><p></p>\n          ',
    tags: ['Amazon'],
  },
  {
    id: '764',
    name: 'Largest Plus Sign',
    acceptance: '32.0%',
    difficulty: 'Medium',
    questionHtml:
      '\n            <br>\n            <p>\nIn a 2D <code>grid</code> from (0, 0) to (N-1, N-1), every cell contains a <code>1</code>, except those cells in the given list <code>mines</code> which are <code>0</code>.  What is the largest axis-aligned plus sign of <code>1</code>s contained in the grid?  Return the order of the plus sign.  If there is none, return 0.\n</p><p>\nAn "<i>axis-aligned plus sign of <code>1</code>s</i> of order <b>k</b>" has some center <code>grid[x][y] = 1</code> along with 4 arms of length <code>k-1</code> going up, down, left, and right, and made of <code>1</code>s.  This is demonstrated in the diagrams below.  Note that there could be <code>0</code>s or <code>1</code>s beyond the arms of the plus sign, only the relevant area of the plus sign is checked for 1s.\n</p><p>\n\n</p><p><b>Examples of Axis-Aligned Plus Signs of Order k:</b><br></p><pre>Order 1:\n000\n0<b>1</b>0\n000\n\nOrder 2:\n00000\n00<b>1</b>00\n0<b>111</b>0\n00<b>1</b>00\n00000\n\nOrder 3:\n0000000\n000<b>1</b>000\n000<b>1</b>000\n0<b>11111</b>0\n000<b>1</b>000\n000<b>1</b>000\n0000000\n</pre><p></p>\n\n<p><b>Example 1:</b><br></p><pre><b>Input:</b> N = 5, mines = [[4, 2]]\n<b>Output:</b> 2\n<b>Explanation:</b>\n11111\n11111\n1<b>1</b>111\n<b>111</b>11\n1<b>1</b>011\nIn the above grid, the largest plus sign can only be order 2.  One of them is marked in bold.\n</pre><p></p>\n\n<p><b>Example 2:</b><br></p><pre><b>Input:</b> N = 2, mines = []\n<b>Output:</b> 1\n<b>Explanation:</b>\nThere is no plus sign of order 2, but there is of order 1.\n</pre><p></p>\n\n<p><b>Example 3:</b><br></p><pre><b>Input:</b> N = 1, mines = [[0, 0]]\n<b>Output:</b> 0\n<b>Explanation:</b>\nThere is no plus sign, so return 0.\n</pre><p></p>\n\n<p><b>Note:</b><br></p><ol>\n<li><code>N</code> will be an integer in the range <code>[1, 500]</code>.</li>\n<li><code>mines</code> will have length at most <code>5000</code>.</li>\n<li><code>mines[i]</code> will be length 2 and consist of integers in the range <code>[0, N-1]</code>.</li>\n<li><i>(Additionally, programs submitted in C, C++, or C# will be judged with a slightly smaller time limit.)</i></li>\n</ol><p></p>\n          ',
    tags: ['Facebook'],
  },
  {
    id: '765',
    name: 'Couples Holding Hands',
    acceptance: '43.4%',
    difficulty: 'Hard',
    questionHtml:
      "\n            <br>\n            <p>\nN couples sit in 2N seats arranged in a row and want to hold hands.  We want to know the minimum number of swaps so that every couple is sitting side by side.  A <i>swap</i> consists of choosing <b>any</b> two people, then they stand up and switch seats. \n</p><p>\nThe people and seats are represented by an integer from <code>0</code> to <code>2N-1</code>, the couples are numbered in order, the first couple being <code>(0, 1)</code>, the second couple being <code>(2, 3)</code>, and so on with the last couple being <code>(2N-2, 2N-1)</code>.\n</p><p>\nThe couples' initial seating is given by <code>row[i]</code> being the value of the person who is initially sitting in the i-th seat.\n\n</p><p><b>Example 1:</b><br></p><pre><b>Input:</b> row = [0, 2, 1, 3]\n<b>Output:</b> 1\n<b>Explanation:</b> We only need to swap the second (row[1]) and third (row[2]) person.\n</pre><p></p>\n\n<p><b>Example 2:</b><br></p><pre><b>Input:</b> row = [3, 2, 0, 1]\n<b>Output:</b> 0\n<b>Explanation:</b> All couples are already seated side by side.\n</pre><p></p>\n\n<p>\n<b>Note:</b>\n</p><ol> \n<li> <code>len(row)</code> is even and in the range of <code>[4, 60]</code>.</li>\n<li> <code>row</code> is guaranteed to be a permutation of <code>0...len(row)-1</code>.</li>\n</ol>\n          ",
    tags: ['Google'],
  },
];
