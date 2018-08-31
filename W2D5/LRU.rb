class LRUCache
   def initialize
     @size = 4
     @lru = Array.new(@size)

   end

   def count
     @lru.length
   end

   def add(el)
     # adds element to cache according to LRU principle
     if @lru.include?(el)
       place = @lru.index(el)
       @lru.pop(place)
       @lru << el
     elsif @lru.length < @size
       @lru.shift
       @lru << el
       end
     else
       @lru << el
     end
   end

   def show
     # shows the items in the cache, with the LRU item first
     @lru.each do |el|
       puts el
     end
   end

   private
   # helper methods go here!

 end
