class Stack
    def initialize()
      self.array = []
    end

    def push(el)
      self.array << el
    end

    def pop
      popped = self.array[-1]
      self.array[0...-1]
      popped
    end

    def peek
      self.array[-1]
    end
  end


class Queue
  def initialize
    self.array = []
  end

  def enqueue(el)
    self.array >> (el)
  end

  def deqeue
    dequed = self.array[0]
    self.array[1..-1]
    dequed
  end

  def peek
    self.array[0]
  end


class Map
  def initialize
    self.size = 9
    self.map = [nil] * self.size
  end

  def hash(key)
    key.to_s.length % self.size
  end

  def set(key, val)
    hash = hash(key)
    if self.map[hash].nil?
      self.map[hash] = [key, val]
      return true
    else
      self.map[hash].each do |arr|
        if arr[0] == key
          arr[1] = val
          return true
        end
      end
      self.map[hash] << [key, val]
      return true
  end

  def get(key)
    hash = hash(key)
    if self.map[hash].nil?
      return false
    end
    self.map[hash].each do |arr|
      if arr[0] == key
        return val
      end
    end
    return false
  end

  def delete(key)
    hash = hash(key)
    if self.map[hash].nil?
      return false
    end
    self.map[hash].each_with_index do |arr, idx|
      if arr[0] == key
        map[hash].delete_at(idx)
      end
    end
    return false

  def show
    return self.array
  end
end
