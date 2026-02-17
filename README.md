১. question: What is the difference between `null` and `undefined`?
উত্তর: undefined --> ডেভেলপার ভ্যারিয়েবল ডিয়ক্লিায়র করছে কিন্তু ভ্যালু আস্যাইন করা হয় নি এইটা JavaScripet নিজে দেয়।
উত্তর: null = JavaScripet ভ্যারিয়েবল মান কোনো কিছু সেট না করা হয় তখন ডেভেলপার Null ব্যবহার করে।

২.question: What is the use of the `map()` function in JavaScript? How is it different from `forEach()`?
উত্তর: map() --> map ব্যবহার করা হয় array প্রতিটা element উপর নতুন একটা array return পাওয়ার জন্য। 
উত্তর: forEach() --> forEach ব্যবহার করা হয় array প্রতিটা element উপর loop চালিয়ে কাজ করা জন্য forEach কোনো নতুন  array return করে না ।

৩. question: What is the difference between `==` and `===`?
উত্তর: == --> == হলো loose equailty এটা ভ্যারিবেয়ল ভেলু এবং যে কোন ভেলু মান আগে compair করা আগে টাইপ কনভাট  করে নেয়।
উত্তর:=== হলো strict equality এটি ভ্যারিবেয়ল ভেলু ও type দুইটা চেক করে নেয়।

৪.question: What is the significance of `async`/`await` in fetching API data?
উত্তর: async/await ব্যবহার করা হয় API call করা সময় যাতে API কে সহজ ভাবে হ্যান্ডেল করা যায়, কারণ API কল হতে সময় লাগে await দিয়ে আমরা responsive আসা পযন্ত অপেক্ষা করতে পারি,আর async function এর ভিতরে asynchronous কাজকে clean এবং readable ভাবে handle করা যায়।

৫. question: Explain the concept of Scope in JavaScript (Global, Function, Block).
উত্তর: Global Scope: function বা block এর বাইরে declare করা variable, যেকোন জায়গা থেকে access করা যায়।

 Function Scope: function এর ভিতরে declare করা variable, শুধু ওই function এর ভিতরেই access করা যায়।

 Block Scope: {} block এর ভিতরে let এবং const দিয়ে declare করা variable, শুধু ওই block এর ভিতরেই access করা যায়।