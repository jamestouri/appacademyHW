def sluggish_octopus(arr)
  result = ''
  arr.each_with_index do |el1, i|
    (i+1...arr.length).each_with_index do |el2|
      if el1.length < arr[el2].length
        if result.length < arr[el2].length
          result = arr[el2]
        end
      else
        if result.length < el1.length
          result = el1
        end
      end
    end
  end
  result
end

def dominant_octopus(arr)
  res = arr.sort
  res[-1]
end

def clever_octopus(arr)
  res = arr[0]

  (1...arr.length).each do |i|
    if res.length < arr[i].length
      res = arr[i]
    end
  end
  res
end


def slow_dance(str, arr)
  arr.each_with_index do |el, i|
    if el == str
      return i
    end
  end
end

def constant_dance(str, hash)
  return hash[str]
end
