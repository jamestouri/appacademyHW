class Simon
  COLORS = %w(red blue green yellow)

  attr_accessor :sequence_length, :game_over, :seq

  def initialize
    @sequence_length = 1
    @game_over = false
    @seq = []
  end

  def play
    until @game_over == true
      self.take_turn
    end
      self.game_over_message
      self.reset_game
  end

  def take_turn
    show = self.show_sequence
    answer = self.require_sequence

    self.round_success_message
    @sequence_length += 1
    if show != answer
      @game_over = true
    end
  end

  def show_sequence
    @seq
    self.add_random_color
  end

  def require_sequence
    res = []
    i = 1
    until i <= @seq.length
      answer = gets.chomp
      res << answer
    end
    res
  end

  def add_random_color
    @seq << COLORS.sample
  end

  def round_success_message
    puts "good job"
  end

  def game_over_message
    puts "come on mannnn"
  end

  def reset_game
    @game_over = false
    @seq = []
    @sequence_length = 1
  end
end
