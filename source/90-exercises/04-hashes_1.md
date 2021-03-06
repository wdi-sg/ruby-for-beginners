# Working with Hashes (1)

Before you get started, make sure you have your text editor and terminal open,
and you have navigated to your exercises directory in the terminal. E.g. `cd
~/ruby-for-beginners/exercises`.


## Exercise 4.1

Make a new file `hashes_1-1.rb`, and fill in the following line:

```ruby
dictionary = { :one => 'uno', :two => 'dos', :three => 'tres' }
# your code goes here
```

So that it prints out `dos`.

<a href="https://wdi-sg.github.io/ruby-for-beginners/solutions/hashes_1-1.html" class="solution">Show solution</a>


## Exercise 4.2

Make a new file `hashes_1-2.rb`, and fill in the following line:

```ruby
dictionary = { :one => 'uno', :two => 'dos', :three => 'tres' }
# your code goes here
puts dictionary[:four]
```

So that it prints out `cuatro`.

<a href="https://wdi-sg.github.io/ruby-for-beginners/solutions/hashes_1-2.html" class="solution">Show solution</a>


## Exercise 4.3

Copy that file to a new file `cp hashes_1-2.rb hashes_1-3.rb`, and change your
code so that it prints out the following.

```
Cuatro
```

<p class="hint">
There's a method that upcases the first letter of a string. Find it by
googling for "ruby string upcase first letter".
</p>

<a href="https://wdi-sg.github.io/ruby-for-beginners/solutions/hashes_1-3.html" class="solution">Show solution</a>


## Exercise 4.4

There is a method on hashes that allows to check if a certain key is defined on
the hash.  Find that method by googling for "ruby hash key defined".

Try this method in `irb` by creating a hash like the one above, calling the
method and passing keys like `:one`, `:two`, `:four`, and `:ten`.

<a href="https://wdi-sg.github.io/ruby-for-beginners/solutions/hashes_1-4.html" class="solution">Show solution</a>


## Exercise 4.5

There is a method on hashes that flips keys and values. Find that method on the
<a href="http://www.ruby-doc.org/core-2.2.0/Hash.html">Ruby documentation about hashes</a>

Make a new file `hashes_1-5.rb`, and fill in the following line using that
method:

```ruby
dictionary = { :one => 'uno', :two => 'dos', :three => 'tres' }
# your code goes here
```

This should then output:

```
{ 'uno' => :one, 'dos' => :two, 'tres' => :three }
```

<a href="https://wdi-sg.github.io/ruby-for-beginners/solutions/hashes_1-5.html" class="solution">Show solution</a>
