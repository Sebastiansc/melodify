module ApplicationHelper
  def format_time(time)
    return 'now' if time == 'less than a minute'
    start = 0
    time.split('').each_with_index do |char, index|
      start = index if char.to_i > 0
    end
    time[start..-1]
  end
end
