require 'rails_helper'

RSpec.describe Task, type: :model do
  describe 'content' do
    it { should validate_presence_of(:content) }
  end
end
