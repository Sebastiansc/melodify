json.array! @plays do |play|
  json.partial! 'play', play: play
end
